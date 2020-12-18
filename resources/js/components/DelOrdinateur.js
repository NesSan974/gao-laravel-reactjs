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

class DelOrdinateur extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
            addButton: false,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewOrd = this.addNewOrd.bind(this);
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

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        if (event.target.value.length >= 3) {
            this.setState({
                addButton: true
            })
        } else {
            this.setState({
                addButton: false
            })
        }
    }

    


    render() {
        return (
            <div>



                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    +
                </Button>


                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ajouter un ordinateur</DialogTitle>
                    <DialogContent>
                        <DialogContentText>

                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nom"
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={!this.state.addButton} onClick={this.addNewOrd} color="primary">
                            Ajouter
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DelOrdinateur;


if (document.getElementById('delOrdinateur')) {
    ReactDOM.render(<DelOrdinateur />, document.getElementById('delOrdinateur'));

}
