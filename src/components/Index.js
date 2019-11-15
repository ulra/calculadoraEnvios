import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';

class Index extends Component {
    render() {
        return (
            <Grid>
                <Row center="md">

                    <Col xs={12} md={6}>
                        <h2>Parametros</h2>
                        <Formulario />
                    </Col>
                          

                    <Col xs={12} md={6}>
                        <h1>total a pagar</h1>
                    </Col>
                    
                </Row>
            </Grid>
        );
    }
}

export default Index;