import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import Pagar from './Pagar';
import AppBar from './AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
});

export default function Index() {
        return (
            <Grid>
                <AppBar />
                <Row center="md">
                    <Col xs={12} md={12}>
                        <h2>Parametros</h2>
                        <Formulario />
                    </Col>
                          

                    <Col xs={12} md={12}>
                        <h1>total a pagar</h1>
                        <Pagar />
                    </Col>
                </Row>
            </Grid>
        );
}

