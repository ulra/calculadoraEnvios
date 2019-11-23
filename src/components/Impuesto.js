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
    
    TextField: {
        width: 250,
    }

});


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
    let articulo = localStorage.getItem('currency2');
    let destino = localStorage.getItem('currency');
    let valor = localStorage.getItem('currency3');
    let peso = localStorage.getItem('currency4');
    let seguro =valor*0.02;
    let tarifa,vla,gestion,totalGestion,combustible;
    if(peso>=0.1 && peso<=1){
        tarifa=6;vla=6;
    }
    if(peso>=1.01 && peso<=2){
        tarifa=9;vla=2.64;
    }
    if(peso>=2.01 && peso<=13){
        tarifa=9;vla=2.64;
    }
    if(peso>=13.01 && peso<=24.99){
        tarifa=9;vla=2.50;
    }
    if(peso>=25 && peso<=100){
        tarifa=9;vla=1.80;
    }
    if(peso>=100.01 && peso<=150){
        tarifa=9;vla=1.72;
    }
    if(peso>=150.01 && peso<=200){
        tarifa=9;vla=1.63;
    }
    if(peso>=200.01 && peso<=250){
        tarifa=9;vla=1.55;
    }
    if(peso>=250){
        tarifa=9;vla=1.48;
    }
    gestion=tarifa+seguro+valor;
    
    if(gestion >=1 && gestion<=25)
    {
	totalGestion=3;	
	}
	if(gestion >=26 && gestion<=100)
    {
	totalGestion=5;	
	}
	if(gestion >=101 && gestion<=500)
    {
	totalGestion=10;	
	}
	if(gestion >=501 && gestion<=1000)
    {
	totalGestion=35;	
	}
	combustible=tarifa*0.17;
	
    return (
       
                <Grid>
            
                    <Row>
                        <Col>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                value={tarifa}
                                label="Flete"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                value={totalGestion}
                                label="Gestion"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                value={combustible}
                                label="Combustible"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                value={peso}
                                label="Impuesto"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                value={seguro}
                                label="Seguro"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                value={peso}
                                label="Transporte"
                                margin="normal"
                                variant="outlined"
                                className={classes.TextField}
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
                                className={classes.TextField}
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
                                className={classes.TextField}
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
