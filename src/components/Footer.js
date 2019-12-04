import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appbar: {
        
        background: '#295290'
     
    },
    icono: {
        margin: 10,
        width: 60,
        height: 60,
    },

    footer: {
        color: '#ffffff',
        textAlign: 'center'

    }


});

export default function Footer() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.footer}>
                Copyright © 2019. Todos los derechos reservados. Desarrollado por &nbsp;<a target="_blank" href="https://softwaredigitals.com.ve" style={{color: '#ffffff'}}>Software Digital Solucion</a>&nbsp; & &nbsp;<a target="_blank" href="https://www.bitskpis.com/" style={{color:'#ffffff'}}>Bits Kpis</a>.
                </Toolbar>
            </AppBar>
        </div>
    );
}
