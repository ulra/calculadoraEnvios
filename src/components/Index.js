import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import AppBar from './AppBar';
import Typography from '@material-ui/core/Typography';

class Index extends Component {
    
    render(){
        return (
            <div>
                <AppBar />
                <Grid style={{ background: '#ffffff' }}>
                    <Row start="xs">
                        <Col xs={12}>
                            <Typography variant="h4" gutterBottom style={{ color: '#bf0103', margin: 16 }}>
                                Calculadora de costos
                    </Typography>
                        </Col>
                    </Row>
                    <Row start="xs">
                        <Col xs={12}>
                            <Formulario />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Index();
