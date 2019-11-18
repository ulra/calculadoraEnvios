import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import calculadora from './images/calculadora.png';

const useStyles = makeStyles({
    appbar: {
        background: '#000000',
    },

    icono: {
        margin: 10,
        width: 60,
        height: 60,
        backgroundSize: '100%',
    },


});

export default function Appbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Avatar src={calculadora} className={classes.icono} />
                    Calculadora
                </Toolbar>
            </AppBar>
        </div>
    );
}