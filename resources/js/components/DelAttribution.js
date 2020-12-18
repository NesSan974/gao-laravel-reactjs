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
import DeleteIcon from '@material-ui/icons/Delete';


class DelAttribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: '',
            addButton: false,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delAttribution = this.delAttribution.bind(this);
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
    delAttribution() {
        Axios.delete("api/attribution/delete/" + this.props.attribution.id ).then ( ({data}) => {
            this.props.delAtt(data.data)
        })
        this.setState({
            open: false
        });
    }



    render() {
        return (
            <div>

                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={this.handleClickOpen}
                >
                    
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        Suppresion d'une attribution {this.props.attribution.id}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Etes-vous sur de vouloir supprimer cette attribution
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={this.delAttribution} color="secondary" autoFocus>
                            Supprimer
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DelAttribution;


if (document.getElementById('delAttribution')) {
    ReactDOM.render(<DelAttribution />, document.getElementById('delAttribution'));

}
