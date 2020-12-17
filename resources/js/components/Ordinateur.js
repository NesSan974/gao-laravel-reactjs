import React from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';








class Ordinateur extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            attributions: [],
            horraires: [],
        }
        this.attributions = []



        this.initialize = this.initialize.bind(this);
        this.displayHorraire = this.displayHorraire.bind(this);


    }

    componentDidMount() {
        this.initialize()

    }



    initialize() {

        var newTab = []
        for (let i = 0; i < this.props.ordinateur.attributions.length; i++) {
            newTab[this.props.ordinateur.attributions[i].horraire] =
            {
                'nom': this.props.ordinateur.attributions[i].client.nom,
                'prenom': this.props.ordinateur.attributions[i].client.prenom
            }
        }

        this.attributions = newTab



        this.displayHorraire()
    }

    displayHorraire() {


        var horraire = []

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

                                            : <Typography variant="body1" component="p"> 
                                            <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<AddBoxIcon />}
                                                ></Button>
                                                         </Typography>
                                    }

                                </Grid>
                                        <Grid item xs={4} >

                                    {
                                        (typeof heure.attribution !== 'undefined') ?
                                            <Typography variant="body1" component="p">
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    startIcon={<DeleteIcon />}
                                                >
                                                    Delete
                                                        </Button>
                                            </Typography>

                                            : <Typography variant="body1" component="p">   </Typography>
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
