import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appbar: {
        
        background: 'linear-gradient(183deg, hsla(216.12, 55.68%, 36.27%, 1) 46%, hsla(216.12, 55.68%, 36.27%, 0) 47%),linear-gradient(335deg, hsla(353.43, 0%, 100%, 1) 100%, hsla(353.43, 0%, 100%, 0) 96%)',
    
    },
    icono: {
        margin: 10,
        width: 60,
        height: 60,
    },

    footer: {
        color: '#000000',
        textAlign: 'center'
    }


});

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.footer}>
                © Copyright 2019 Liberty Express. All rights reserved
                </Toolbar>
            </AppBar>
        </div>
    );
}