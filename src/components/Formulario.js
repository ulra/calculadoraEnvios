import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Peso from './Peso';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import destinos from './destinos.json';
import articulos from './articulos.json';
import MenuItem from '@material-ui/core/MenuItem';

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
    
    const [ currency, setCurrency] = React.useState('');
    
    const handleChange = event => {
        setCurrency(event.target.value);
      };

      const [ currency2, setCurrency2] = React.useState('');

      const handleChange2 = event => {
        setCurrency2(event.target.value);
      };
    
    
        return (
            <Grid>
                <Row start="xs">
                    <Col xs={12}  >
                        <TextField 
                            className={classes.TextField}
                            id="standard-select-currency"
                            select
                            fullWidth
                            label="Articulo"
                            value={currency2}
                            variant="outlined"
                            style={{ margin: 8 }}
                            onChange={handleChange2}
                            SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                },
                              }}
                        >
                            {destinos.map(option => (
                                <MenuItem key={option.ruta} value={option.ruta} >
                            {option.ruta}
                            </MenuItem>
                            ))}
                        </TextField>

                    </Col>
                </Row>
                

                <Row start="xs">
                    <Col  xs={12} >

                        <TextField
                            className={classes.TextField}
                            id="standard-select-currency"
                            value={currency}
                            label="Destino"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            select
                            style={{ margin: 8 }}
                            onChange={handleChange}
                            SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                },
                              }}
                        >
                            {articulos.map(option => (
                                <MenuItem key={option.ruta} value={option.ruta} >
                            {option.ruta}
                            </MenuItem>
                            ))}
                        </TextField>

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
