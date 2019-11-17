import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import userProfilePic from './../static/images/diwakar.jpg';

const useStyles = makeStyles({
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });

function User(){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4}><Avatar alt="Remy Sharp" src={userProfilePic} className={classes.bigAvatar} /></Grid>
                <Grid item xs={8}><Typography variant="subtitle2" gutterBottom>Diwakar Gupta</Typography></Grid>
            </Grid>
        </div>
    );
}

export default User;