import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


const styles = {
    deleteButton: {
        justifyContent: 'right',
    },
    markedDone: {
        textDecoration: 'line-through',
        color: '#ccc',
    }
}

export class TodoItem extends Component {
    
    // getStyle = () => {
    //     return {
    //         background: '#F4F4F4',
    //         padding: '10px',
    //         borderBottom: '1px #ccc dotted',
    //         textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    //     }
    // };
    render() {
        const { classes } = this.props;
        const { id, title, completed } = this.props.todo;
        return (
            <Box pl={3} pr={3}>
                <Grid container>
                    <Grid item xs={11}>
                        <FormControlLabel
                            className={this.props.todo.completed ? classes.markedDone : ''}
                            control={
                            <Checkbox
                                onChange={ this.props.markToDoAsComplete.bind(this, id ) } 
                                checked={ completed ? true : '' }
                                color="primary"
                                value=""
                            />
                            }
                            label={title}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton className={classes.deleteButton} aria-label="delete" onClick={this.props.deleteATodo.bind(this, id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markToDoAsComplete: PropTypes.func.isRequired,
    deleteATodo: PropTypes.func.isRequired
}


export default withStyles(styles)(TodoItem);