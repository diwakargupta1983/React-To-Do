import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    bannerBg: {
      background: "blue",
      color: "#fff",
    },
    marginTop: {
        marginTop: 50,
    }
  });

function Banner(props){
    const classes = useStyles();
    return(
        <Box className={classes.bannerBg} p={2} pt={5}>
            <Typography variant="h3" className={classes.marginTop} align="left" gutterBottom>{props.title}</Typography>
            <Typography variant="h6" align="left" gutterBottom>{Date()}</Typography>
        </Box>
    );
}

export default Banner;