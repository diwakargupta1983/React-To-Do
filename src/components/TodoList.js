import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import ListIcon from '@material-ui/icons/List';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    width100: {
      width: '100%',
    },
  });

  function TodoList(){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <ButtonBase className={classes.width100}>
                    <Card className={classes.width100}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={2}><ListIcon /></Grid>
                            <Grid item xs={10}><Typography variant="subtitle2" align="left" gutterBottom>Team To-Do List</Typography></Grid>
                        </Grid>
                    </Card>
                </ButtonBase>
            </Grid>
        </div>
    );
}

export default TodoList;