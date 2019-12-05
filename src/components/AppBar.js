import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import liberty from './images/liberty.png';

const useStyles = makeStyles({
    appbar: {
        
        background: '#000000',
    },
    icono: {
        margin: 10,
        width: 60,
        height: 60,
    },

    bandera: {
        align: 'right'
    }

});

export default function Appbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                </Toolbar>
            </AppBar>
        </div>
    );
}