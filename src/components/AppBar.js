import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    appbar: {
        background: '#000000',
    },

    icono: {
        margin: 10,
        width: 60,
        height: 60,
    },


});

export default function Appbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <InsertChartIcon style={{ fontSize: 50}} />
                    <Typography variant="h6" center>
                        Calculadora
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}