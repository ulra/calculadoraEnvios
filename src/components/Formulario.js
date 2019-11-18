import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputAdornment from '@material-ui/core/InputAdornment';

class Formulario extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <TextField 
                            id="outlined-basic"
                            label="Articulo"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            type="number"
                            id="outlined-basic"
                            label="Valor producto"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$</InputAdornment>,
                              }}
                        />

                        <TextField
                            type="number"
                            id="outlined-basic"
                            label="Peso"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              }}
                            margin="normal"
                            variant="outlined"
                        />

                        <br/>

                        <TextField
                            id="outlined-basic"
                            label="Origen"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-basic"
                            label="Destino"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            type="number"
                            id="outlined-basic"
                            label="flete"
                            label="Flete"
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$</InputAdornment>,
                              }}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Formulario;