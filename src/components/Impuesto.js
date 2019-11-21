import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles({
    button: {
        padding: 10,
        backgroundColor: '#bf0103',
        color: '#ffffff'
      },

});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function descripcion(desc, precio) {
    return { desc, precio };
}

const rows = [
    descripcion('Flete aereo Paq', 10),
    descripcion('Combustible', 20),
    descripcion('Seguro', 30),
    descripcion('Gestion aduanal', 40),
    descripcion('Impuesto nacionalizacion', 50),
    descripcion('Transporte costo por paquete', 60),
];

export default function Impuesto(){
    const classes = useStyles();
    
    return (
       
                <Grid>
            
                    <Row>
                        <Col>
                
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[0].precio)}                               
                                label="Flete"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>
                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[3].precio)}
                                label="Gestion"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[1].precio)}
                                label="Combustible"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>

                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[4].precio)}
                                label="Impuesto"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[2].precio)}
                                label="Seguro"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>

                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={ccyFormat(rows[5].precio)}
                                label="Transporte"
                                margin="normal"
                                variant="outlined"
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
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
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
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
                                style={{ marginLeft: 16, marginRight: 20 }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                  }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="contained" className={classes.button} style={{ margin: 16 }}>
                                Cálcular envio
                    </Button>

                            <Button variant="contained" className={classes.button} style={{ margin: 16 }}>
                                Limpiar formulario
                    </Button>
                    
                        </Col>
                    </Row>
             
                </Grid>
        
    );
}