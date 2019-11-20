import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import Pagar from './Pagar';
import AppBar from './AppBar';
import Impuesto from './Impuesto';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        background: '#ffffff',
    }

});


export default function Index() {
    const classes = useStyles();
    return (
        <div>
            <AppBar />
            <Grid className={classes.container}>
                <Row start="xs">
                            
                    <Col xs={12}>
                        <h2>Calculadora de costo</h2>
                        <Formulario />
                    </Col>    
                </Row>

                <Row> 
                    <Col xs={12} md={6}>
                        <Impuesto />
                    </Col>

                    <Col xs={12} md={6}>
                        <Pagar />
                    </Col>
                </Row>
            </Grid>
        </div>
        );
}

