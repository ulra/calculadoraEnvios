import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import Pagar from './Pagar';
import AppBar from './AppBar';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        background: '#ffffff',
    },

    typo: {
        color: '#bf0103',
        margin: 16,
    },


});



export default function Index() {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar />
            <Grid className={classes.container}>
                <Row start="xs">
                    <Col xs={12}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>
                        Calculadora de costos
                    </Typography>
                    </Col>
                </Row>
                <Row start="xs">         
                    <Col xs={12}>
                        <Formulario />
                    </Col>    
                </Row>

                <Row> 

                    <Col xs={12} md={6}>
                        <Pagar />
                    </Col>
                </Row>
            </Grid>
        </div>
        );
}

