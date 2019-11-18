import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    TextField: {
        align: 'left',
    }
});

export default function Formulario() {
    const classes = useStyles();

        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <TextField 
                            id="outlined-full-width"
                            fullWidth
                            label="Articulo"
                            margin="normal"
                            variant="outlined"
                            style={{ margin: 4 }}
                            
                        />
                    </Col>
                </Row>
                <Row start="xs">
                    <Col md={12}>
                        <TextField
                            type="number"
                            id="outlined-basic"
                            label="Valor producto"
                            margin="normal"
                            variant="outlined"
                            className={classes.TextField}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$</InputAdornment>,
                              }}
                            style={{ margin: 4 }}
                            helperText="FOB"
                        />
                    </Col>    
                </Row>
                
                <Row start="xs">
                    <Col>
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
                    </Col>
                </Row>
                    
                <Row start="xs">
                    <Col>
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
