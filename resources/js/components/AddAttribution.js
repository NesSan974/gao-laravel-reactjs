import React from 'react';
import ReactDOM from 'react-dom';

import Axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Autocomplete from '@material-ui/lab/Autocomplete';

import AddBoxIcon from '@material-ui/icons/AddBox';


class AddAttribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addAttribution = this.addAttribution.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        console.log (event);
        this.setState({
            value: event.target.value
        });
    }

    handleClickOpen() {
        this.setState({
            open: true
        });

    }
    handleClose() {
        this.setState({
            open: false
        });
    }

    addAttribution() {
        Axios
            .post("api/attribution/add", {
                date: this.props.date,
                ordinateur_id: this.props.ordinateur.id,
                client_id: this.state.value.id,
                horraire: this.props.horraire.h

            })
            .then(({ data }) => {
                this.props.updateAtt(data.data)
            })

        this.handleClose()

        this.setState({
            value: ''
        });

    }


    render() {
        return (
            <div>



                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddBoxIcon />}
                    onClick={this.handleClickOpen}
                ></Button>


                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ajouter une attribution

                    </DialogTitle>
                    <DialogContent>

                        <Autocomplete
                            options={this.props.clients}
                            getOptionLabel={(option) => option.prenom}
                            style={{ width: 300 }}
                            onChange={(event, value) => this.setState({value :value}) }

                            //inputValue={this.state.value}
                            //onInputChange={this.handleChange}
                            

                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    id="client"
                                    label="Client"
                                    variant="outlined"
                                />
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.addAttribution} color="primary">
                            Ajouter
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddAttribution;


if (document.getElementById('addAttribution')) {
    ReactDOM.render(<AddAttribution />, document.getElementById('addAttribution'));

}
