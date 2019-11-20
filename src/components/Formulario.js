import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Peso from './Peso';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

const useStyles = makeStyles({
    TextField: {
        align: 'left',
    
    }, 

    peso: {
        margin: 2,
    }

});

export default function Formulario() {
    const classes = useStyles();
        return (
            <Grid>
                <Row start="xs">
                    <Col xs={12}  >
                        <TextField 
                            className={classes.TextField}
                            id="outlined-full-width"
                            fullWidth
                            label="Articulo"
                            margin="normal"
                            variant="outlined"
                            style={{ margin: 8 }}
                            color='primary'
                        />
                    </Col>
                </Row>
                

                <Row start="xs">
                    <Col  xs={12} >

                        <TextField
                            className={classes.TextField}
                            id="outlined-basic"
                            label="Destino"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={{ margin: 8 }}
                        />

                    </Col>
                </Row>



                <Row start="xs">
                    <Col md={12}>
                        <TextField
                            className={classes.TextField}
                            type="number"
                            id="outlined-basic"
                            label="Valor producto"
                            margin="normal"
                            variant="outlined"
                            className={classes.TextField}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$</InputAdornment>,
                              }}
                            style={{ margin: 8 }}
                            
                        />
                    </Col>    
                </Row>

                <Row start="xs">
                    <Col >
                        <TextField
                            className={classes.TextField}
                            type="number"
                            id="outlined-basic"
                            label="Peso"
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20 }}
                        />
                    </Col>
                    <Col >
                        <Peso />
                    </Col>
                </Row>
                    
                <Row start="xs">
                    <Col>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="Disponible para el envio"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            style={{ marginLeft: 16, marginRight: 20}}
                        /> 
                    </Col>
                    <Col>
                        <FlightTakeoffIcon style={{ fontSize: 50, marginTop: 18, color: '#295290'}}/>
                    </Col>
                </Row>

            </Grid>
        );
    }
