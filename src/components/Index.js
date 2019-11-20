import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import Pagar from './Pagar';
import AppBar from './AppBar';
import Impuesto from './Impuesto';

export default function Index() {

    return (
        <div>
            <AppBar />
            <Grid>
                <Row start="xs">
                            
                    <Col xs={12}>
                        <h2>Parametros</h2>
                        <Formulario />
                    </Col>    
                </Row>
                <Row>
                    <h1>total a pagar</h1>
                </Row>
                <Row> 
                    <Col xs={6}>
                        <Impuesto />
                    </Col>

                    <Col xs={6}>
                        <Pagar />
                    </Col>
                </Row>
            </Grid>
        </div>
        );
}

