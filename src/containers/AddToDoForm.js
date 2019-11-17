import React, {Component} from 'react';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


class AddToDoForm extends Component {

    state = {
        title: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addATodo(this.state.title);
        this.setState({ title: '' });
        this.props.handleShowHideToDoForm();
    }
    onChange = (e) => this.setState({ title: e.target.value });

    render(){
        return(
            <Box>
                <form onSubmit={this.onSubmit}>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                id="standard-basic"
                                margin="normal"
                                value={this.state.title}
                                onChange={this.onChange}
                                fullWidth="true"
                            />
                        </Grid>
                        <Grid item xs={2} alignContent="flex-end">
                            <Grid container direction="row" justify="flex-end">
                                <Button variant="contained" type="submit" color="primary">Add</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        );
    }
}
// PropTypes
AddToDoForm.propTypes = {
    addATodo: PropTypes.func.isRequired
}
export default AddToDoForm;