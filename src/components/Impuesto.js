import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default function Impuesto(){
    return (
        <Grid>
            <Row>
                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="FLete"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>
                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Gestion"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>
            </Row>

            <Row>
                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Combustible"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>

                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Impuesto"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>
            </Row>

            <Row>
                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Seguro"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>

                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Transporte"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>
            </Row>

            <Row>
                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Total Articulo"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>

                <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="$ 0.00"
                            label="Total sin articulo"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        />
                </Col>
            </Row>
        </Grid>
    );
}