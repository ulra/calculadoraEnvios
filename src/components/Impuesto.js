import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        padding: 10,
        backgroundColor: '#bf0103',
        color: '#ffffff'
      },

});

export default function Impuesto(){
    const classes=useStyles();
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
            <Row>
                <Col>
                    <Button variant="contained"  className={classes.button} style={{ margin: 16 }}>
                        Cálcular envio
                    </Button>
                    
                    <Button variant="contained"  className={classes.button} style={{ margin: 16 }}>
                        Descargar
                    </Button>

                    <Button variant="contained"  className={classes.button} style={{ margin: 16 }}>
                        Limpiar formulario
                    </Button>
                    
                </Col>
            </Row>
        </Grid>
    );
}