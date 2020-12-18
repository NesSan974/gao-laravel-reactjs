import React from 'react';
import ReactDOM from 'react-dom';
import Ordinateur from './Ordinateur';
import AddOrdinateur from '../components/AddOrdinateur';

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import Axios from 'axios';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Computer } from '@material-ui/icons';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ordinateurs: [],
            clients : [],
            date: new Date().toISOString().substr(0, 10),
        };

        

        this.updateOrd = this.updateOrd.bind(this);
        this.getOrd = this.getOrd.bind(this);
        this.getClients = this.getClients.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);




    }




    componentDidMount() {

        this.getOrd()
        this.getClients()
    }

    componentWillUnmount() { }


    getOrd() {
        Axios.post('/api/ordinateur/show', { 'date': this.state.date }).then(({ data }) => {
            this.setState({ ordinateurs: data.data })
        })
    }

    getClients() {
        var tab = [];
        Axios.get('/api/clients/show').then(({ data }) => {

            data.data.forEach(client => {
                tab.push(client)
            });

            this.setState({
                clients : tab
            })
            


        })
    }

    handleDateChange(event) {

        this.setState({
            ordinateurs: [],
            date: event.target.value
        })


        Axios.post('/api/ordinateur/show', { 'date': event.target.value }).then(({ data }) => {
            this.setState({ ordinateurs: data.data })
            


        })
    }

    updateOrd(ord) {

        const newTab = this.state.ordinateurs.concat(ord);

        this.setState({
            ordinateurs: newTab,
        })
    }

    render() {
        return (
            <Container>

                <div>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                    />
                </div>



                <div>
                    <AddOrdinateur onUpdate={this.updateOrd} />
                </div>
                <Grid container
                    spacing={5}>


                    {
                        this.state.ordinateurs.map((ord) => (
                            <Grid key={ord.id} item xs={4} >
                                <Ordinateur clients={this.state.clients} date={date} ordinateur={ord} />
                            </Grid>

                        ))
                    }

                </Grid>

            </Container>

        );

    }
}
export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}