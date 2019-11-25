import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import articulos from './articulos.json';
import destinos from './destinos.json';
import "bootstrap/dist/css/bootstrap.css";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import camion from './images/camion.svg';
import camion_amarillo from './images/camion_amarillo.svg';
import camion_verde from './images/camion_verde.svg';

const useStyles = makeStyles({
    button: {
        padding: 10,
        backgroundColor: '#bf0103',
        color: '#ffffff'
    },
    
    TextField: {
        width: 220,
    },
    
});



export default function Impuesto(){
    const classes = useStyles();
    let tributario = localStorage.getItem('currency2');
    let destino = localStorage.getItem('currency');
    let valor = localStorage.getItem('currency3');
    let peso = localStorage.getItem('currency4');
    let medida = localStorage.getItem('currency5');
   


     let  tarifa,vla,gestion,totalGestion,combustible,impuesto,fin,pagoDestino,den,Transporte,seguro,total,totalArt,flete,cont;
    let Cont_flete,Cont_gestion,Cont_combustible,Cont_transporte,Cont_impuesto,Cont_seguro,Cont_total1,Cont_total2, id,mensa,color,avion;
    let Objeto = new Object();
gestion=0;
seguro =0;
cont=0;
Cont_flete=0;
Cont_gestion=0;
Cont_combustible=0;
Cont_transporte=0;
Cont_impuesto=0;
Cont_seguro=0;
Cont_total1=0;
Cont_total2=0;


function clear(){

 document.getElementById("Flete").value=0.00;
 document.getElementById("Gestion").value=0.00;
	
	
}

function guardar(e)
{
	

if(localStorage.cont){
	if(localStorage.cont>2)
	{
		//alert('Maximo 3 Articulo a calcular');
		mensa='Maximo 3 Articulo a calcular';
		
		
		mensa='<div class="alert alert-warning alert-dismissable">';
		//mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
		mensa+='<strong>¡Info:!</strong> Maximo 3 Articulo a calcular.'
		mensa+='</div>';
		document.getElementById("mensa").innerHTML  =mensa ;
	setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 2000);
	
	}else{
	localStorage.cont=parseInt(localStorage.cont)+1;
	localStorage.Cont_flete=parseInt(localStorage.Cont_flete)+flete;
	localStorage.Cont_gestion=parseInt(localStorage.Cont_gestion)+gestion;
	localStorage.Cont_combustible=parseInt(localStorage.Cont_combustible)+combustible;
	localStorage.Cont_transporte=parseInt(localStorage.Cont_transporte)+Transporte;
	localStorage.Cont_impuesto=parseInt(localStorage.Cont_impuesto)+impuesto;
	localStorage.Cont_seguro=parseInt(localStorage.Cont_seguro)+seguro;
	localStorage.Cont_total1=parseInt(localStorage.Cont_total1)+total;
	localStorage.Cont_total2=parseInt(localStorage.Cont_total2)+totalArt;
	mensa='Movimiento Cargado..'+localStorage.cont;
	mensa='<div class="alert alert-success" alert-dismissable">';
		//mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
		mensa+='<strong>¡Bien!</strong> Movimiento Cargado..'+localStorage.cont;
		mensa+='En caso de Haber Finalizado Presione <strong>Totalizar</strong>';
		mensa+='</div>';
		document.getElementById("mensa").innerHTML  =mensa ;
	setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 2000);
		document.getElementById("mensa").innerHTML  =mensa ;
	;
	}

  }else{
		
		localStorage.cont=1;
        localStorage.Cont_flete=flete;
		localStorage.Cont_gestion=gestion;
		localStorage.Cont_combustible=combustible;
		localStorage.Cont_transporte=Transporte;
		localStorage.Cont_impuesto=impuesto;
		localStorage.Cont_seguro=seguro;
		localStorage.Cont_total1=total;
		localStorage.Cont_total2=totalArt;
		mensa='Movimiento Cargado..'+localStorage.cont;
		
		mensa='<div class="alert alert-success" alert-dismissable">';
		//mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
		mensa+='<strong>¡Bien!</strong> Movimiento Cargado..'+localStorage.cont;
		mensa+='En caso de Haber Finalizado Presione <strong>Totalizar</strong>';
		mensa+='</div>';
		document.getElementById("mensa").innerHTML  =mensa ;
	setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 2000);
		document.getElementById("mensa").innerHTML  =mensa ;
	  }
id=localStorage.cont;



}

let kilo=2.20462;
seguro =valor*0.02;
     if(valor<=0){
     
    }else{
    seguro =valor*0.02;
    if(medida=='Kilo'){
		
	peso=peso*kilo;	
	}
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
if(peso>250){
tarifa=9;vla=1.48;
}
if (peso>=2){
	
flete=(peso*vla)+tarifa;
}
         valor = parseFloat(valor, 10);
gestion=(tarifa+seguro)+valor;

   
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
	if(gestion >=501)
    {
	totalGestion=35;	
	}
	if(medida=="Kilo"){
		totalGestion=totalGestion*kilo;
		}
	combustible=tarifa*0.17;
	  fin=articulos.filter(d => d.ruta === tributario);
	  tributario=fin[0].precio;
	  
	  den=destinos.filter(e => e.Destinoss === destino);
	  pagoDestino=den[0].forma;
	  Transporte=0;
	  if(pagoDestino==='Tarifa 1')
	  {
		Transporte=2;  
		color=<img src={camion_verde} clasName={classes.camion}/>;
	  }
	  
	  if(pagoDestino==='Tarifa 2')
	  {
		Transporte=2.35; 
		color=<img src={camion_amarillo} clasName={classes.camion}/>;
		
	  }
	  
	  if(pagoDestino==='N/A')
	  {
		
		color=<img src={camion} clasName={classes.camion}/>;
		
	  }
       
       
     	  
	tributario=tributario/100;
	
	impuesto=(tarifa+seguro+valor)*tributario;
	
	}
	total=tarifa+totalGestion+combustible+impuesto+seguro+Transporte;
totalArt=total+valor;


if(peso==0){
tarifa=0;
}

if(tarifa==0)
{
totalGestion=0;
combustible=0;
impuesto=0;
total=0;
totalArt=0;
    Transporte = 0;
    seguro = 0; 
flete=0;   
}
//impuesto=Number(); 
//totalArt=totalArt.toFixed(2);
//total=total.toFixed(2);
if (isNaN(flete)) {
    flete=0;      // Se ejecuta
}
if (isNaN(totalGestion)) {
    totalGestion=0;      // Se ejecuta
}
if (isNaN(combustible)) {
    combustible=0;      // Se ejecuta
}
if (isNaN(impuesto)) {
    impuesto=0;      // Se ejecuta
}
if (isNaN(total)) {
    total=0;      // Se ejecuta
}
if (isNaN(totalArt)) {
    totalArt=0;      // Se ejecuta
}
if (isNaN(Transporte)) {
    Transporte=0;      // Se ejecuta
}
if (isNaN(seguro)) {
    seguro=0;      // Se ejecuta
}
flete=Number.parseFloat(flete).toFixed(2);
totalGestion=Number.parseFloat(totalGestion).toFixed(2);
combustible=Number.parseFloat(combustible).toFixed(2);
impuesto=Number.parseFloat(impuesto).toFixed(2);
seguro=Number.parseFloat(seguro).toFixed(2);
Transporte=Number.parseFloat(Transporte).toFixed(2);
total=Number.parseFloat(total).toFixed(2);
totalArt=Number.parseFloat(totalArt).toFixed(2);

	
    return (
       
                <Grid>
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
						<div id="icono">
						{color}
                     </div>
                    </Col>
                    
                </Row>
                    <Row>
                     
                        <Col>
							
                            <TextField
								disabled
                                id="flete"
                                value={flete}
                                defaultValue="0"
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
                                id="Gestion"
                                defaultValue="0"
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
                                id="combustible"
                                defaultValue="0"
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
                                id="Impuesto"
                                defaultValue="0"
                                value={impuesto}
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
                                id="Seguro"
                                value={seguro}
                                defaultValue="0"
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
                                defaultValue="0"
                                id="Transporte"
                                value={Transporte}
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
                                id="Total1"
                                defaultValue="$ 0.00"
                                value={total}
                                label="Total Sin Articulo"
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
                                id="Total2"
                                defaultValue="$ 0.00"
                                value={totalArt}
                                label="Total Con articulo"
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
                        <div id="mensa"></div>
                        
                            <Button variant="contained" className={classes.button} onClick={guardar} style={{ margin: 16 }}>
                                Cálcular envio
                    </Button>
						
                        </Col>
                    </Row>
             
                </Grid>
        
    );
}
