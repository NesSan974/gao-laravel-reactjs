import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';

import AddAttribution from '../components/AddAttribution';
import DelAttribution from '../components/DelAttribution';







class Ordinateur extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            attributions: [],
            horraires: [],
            ordinateur: []
        }
        this.attributions = []



        this.initialize = this.initialize.bind(this);
        this.displayHorraire = this.displayHorraire.bind(this);
        this.updateAtt = this.updateAtt.bind(this);
        this.delAtt = this.delAtt.bind(this);


    }

    componentDidMount() {
        this.initialize()
        this.setState({ ordinateur: this.props.ordinateur })
    }



    initialize() {

        var newTab = []
        for (let i = 0; i < this.props.ordinateur.attributions.length; i++) {
            newTab[this.props.ordinateur.attributions[i].horraire] =
            {
                'id': this.props.ordinateur.attributions[i].id,
                'nom': this.props.ordinateur.attributions[i].client.nom,
                'prenom': this.props.ordinateur.attributions[i].client.prenom
            }
        }

        this.attributions = newTab



        this.displayHorraire()
    }

    delAtt(att) {
        const refreshDeleteData = this.attributions.filter(element => element.id != att.id);

        this.attributions = refreshDeleteData;
    
        this.displayHorraire()
    }

    updateAtt(att) {


        this.attributions[att.horraire] =
        {
            'id': att.id,
            'nom': att.client.nom,
            'prenom': att.client.prenom
        }


        this.displayHorraire()


    }

    displayHorraire() {
        var horraire = []

        this.setState({
            horraires: []
        })

        for (let i = 8; i <= 18; i++) {
            if (this.attributions[i] == undefined) {
                horraire.push({ 'h': i })

            } else {
                horraire.push({ 'h': i, 'attribution': this.attributions[i] })
            }
        }
        this.setState({
            horraires: horraire
        })
    }

    render() {


        return (

            <Card variant="outlined">
                <Grid container>

                    <Grid container
                        justify="center"
                        alignItems="flex-start" >
                        <Typography variant="h5" component="h2">
                            {this.props.ordinateur.nom}
                        </Typography>

                    </Grid>
                </Grid>

                <CardContent>

                    {

                        this.state.horraires.map((heure) => (
                            <Grid container
                                key={heure.h}
                                direction="row"
                                justify="space-between"
                                alignItems="flex-start"


                            >
                                <Grid item xs={4}>
                                    <Typography variant="body1" component="p">
                                        {heure.h}h
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} >

                                    {
                                        (typeof heure.attribution !== 'undefined') ?
                                            <Typography variant="body1" component="p">
                                                {heure.attribution.prenom} {heure.attribution.nom}
                                            </Typography>

                                            :

                                            <div>

                                                <AddAttribution updateAtt={this.updateAtt} clients={this.props.clients} horraire={heure} ordinateur={this.state.ordinateur} date={this.props.date.value} />

                                            </div>
                                    }

                                </Grid>
                                <Grid item xs={4} >

                                    {
                                        (typeof heure.attribution !== 'undefined') ?
                                            <div>
                                                <DelAttribution delAtt={this.delAtt} attribution={heure.attribution} />
                                            </div>

                                            : <div></div>
                                    }


                                </Grid>

                            </Grid>
                        ))

                    }



                </CardContent>




            </Card >

        );
    }
}

export default Ordinateur;

if (document.getElementById('ordinateur')) {
    ReactDOM.render(<Ordinateur />, document.getElementById('ordinateur'));
}
