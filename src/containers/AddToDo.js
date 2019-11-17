import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AddToDoForm from './AddToDoForm';

const styles = {
    addButton: {
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
            background: 'transparent',
            boxShadow: 'none',
        }
    },
    addForm: {
        background: "#f1f1f1",
        border: "1px dashed #ccc"
    },
}

class AddTodo extends Component {
    state = {
        showAddToDoForm: false,
        showAddToDoButton: true
    }

    handleShowHideToDoForm = () => {
        this.setState(prevState => ({
            showAddToDoButton: !prevState.showAddToDoButton,
            showAddToDoForm: !prevState.showAddToDoForm,
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.addForm} p={3}>
                {
                    this.state.showAddToDoButton ? <Button
                        variant="contained"
                        startIcon={<AddCircleIcon color='primary' />}
                        disableRipple
                        className={classes.addButton}
                        onClick={this.handleShowHideToDoForm}
                        pl={0}
                    >
                        Add a to-do
                    </Button> : null
                }
                {this.state.showAddToDoForm ? <AddToDoForm addATodo={this.props.addATodo} handleShowHideToDoForm={this.handleShowHideToDoForm.bind(this)} /> : null}
            </Box>
        )
    }
}

export default withStyles(styles)(AddTodo);