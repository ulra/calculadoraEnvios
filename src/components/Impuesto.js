import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import articulos from './articulos.json';
import destinos from './destinos.json';
import camion from './images/camion.svg';
import camion_amarillo from './images/camion_amarillo.svg';
import camion_verde from './images/camion_verde.svg';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    button: {
        padding: 10,
        backgroundColor: '#bf0103',
        color: '#ffffff'
    },
    
    TextField: {
        width: 220,
    },


   p: {
color: '#bf0103',
fontSize: 13
}

    
});



export default function Impuesto(){

    function clear(){

        document.getElementById("Flete").value=0.00;
        document.getElementById("Gestion").value=0.00;
           
           
       }
       
       function guardar(e)
       {
           if(total==0 || totalArt==0 ){
       
               mensa='<div class="alert alert-warning alert-dismissable">';
               //mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
               mensa+='<strong>¡Info:!</strong> Favor No Ingresar Datos Nulos';
               mensa+='</div>';
               document.getElementById("mensa").innerHTML  =mensa ;
           setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 3500);
               
       }else{
       
       if(sessionStorage.cont){
       
           
       
       
       
           if(sessionStorage.cont>2)
           {
               //alert('Maximo 3 Articulo a calcular');
               mensa='Máximo 3 Articulo a calcular';
               
               
               mensa='<div class="alert alert-warning alert-dismissable">';
               //mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
               mensa+='<strong>¡Info:!</strong> Máximo 3 Artículo a calcular.'
               mensa+='</div>';
               document.getElementById("mensa").innerHTML  =mensa ;
           setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 3500);
           
           }else{
           sessionStorage.cont=parseInt(sessionStorage.cont)+1;
           sessionStorage.Cont_flete=parseFloat(sessionStorage.Cont_flete)+parseFloat(flete1);
           sessionStorage.Cont_gestion=parseFloat(sessionStorage.Cont_gestion)+parseFloat(totalGestion11);
           sessionStorage.Cont_combustible=parseFloat(sessionStorage.Cont_combustible)+parseFloat(combustible1);
           sessionStorage.Cont_transporte=parseFloat(sessionStorage.Cont_transporte)+parseFloat(Transporte1);
           sessionStorage.Cont_impuesto=parseFloat(sessionStorage.Cont_impuesto)+parseFloat(impuesto1);
           sessionStorage.Cont_seguro=parseFloat(sessionStorage.Cont_seguro)+parseFloat(seguro1);
           sessionStorage.Cont_total1=parseFloat(sessionStorage.Cont_total1)+parseFloat(total1);
           sessionStorage.Cont_total2=parseFloat(sessionStorage.Cont_total2)+parseFloat(totalArt1);
           mensa='Movimiento Cargado..'+sessionStorage.cont;
           mensa='<div class="alert alert-success" alert-dismissable">';
               //mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
               mensa+='<strong>¡Bien!</strong> Movimiento Cargado..'+sessionStorage.cont;
               mensa+='En caso de Haber Finalizado Presione <strong>Totalizar</strong>';
               mensa+='</div>';
               document.getElementById("mensa").innerHTML  =mensa ;
           setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 3500);
               document.getElementById("mensa").innerHTML  =mensa ;
           ;
           }
       
         }else{
               
               sessionStorage.cont=1;
               sessionStorage.Cont_flete=parseFloat(flete1);
               sessionStorage.Cont_gestion=parseFloat(totalGestion11);
               sessionStorage.Cont_combustible=parseFloat(combustible1);
               sessionStorage.Cont_transporte=parseFloat(Transporte1);
               sessionStorage.Cont_impuesto=parseFloat(impuesto1);
               sessionStorage.Cont_seguro=parseFloat(seguro1);
               sessionStorage.Cont_total1=parseFloat(total1);
               sessionStorage.Cont_total2=parseFloat(totalArt1);
               mensa='Movimiento Cargado..'+sessionStorage.cont;
               
               mensa='<div class="alert alert-success" alert-dismissable">';
               //mensa+='<button type="button" class="close" data-dis	miss="alert">&times;</button>';
               mensa+='<strong>¡Bien!</strong> Movimiento Cargado..'+sessionStorage.cont;
               mensa+='En caso de Haber Finalizado Presione <strong>Totalizar</strong>';
               mensa+='</div>';
               document.getElementById("mensa").innerHTML  =mensa ;
           setTimeout(function(){ document.getElementById("mensa").innerHTML  ='' ; }, 3500);
               document.getElementById("mensa").innerHTML  =mensa ;
             }
       id=sessionStorage.cont;
       
       
       }
       }



    const classes = useStyles();
    let tributario = sessionStorage.getItem('currency2');
    let destino = sessionStorage.getItem('currency');
    let valor = sessionStorage.getItem('currency3');
    let peso = sessionStorage.getItem('currency4');
    let medida = sessionStorage.getItem('currency5');
   


     let  tarifa,vla,gestion,totalGestion,combustible,impuesto,fin,pagoDestino,den,Transporte,seguro,total,totalArt,flete,cont;
    let Cont_flete,Cont_gestion,Cont_combustible,Cont_transporte,Cont_impuesto,Cont_seguro,Cont_total1,Cont_total2, id,mensa,color,avion,peso2;
    let calculo;
    let iva;
    let iva1;
    let iva2;
    let subtotal3;
    let subtotal4;
    let cif;
    let subtotal;
    let Iva;
    Iva=0.13;
    let pesoKilo;
    let libraA;
    let Decimal;
    calculo=0;
    let totalGestion1;
    let flete1;
let totalGestion11;
let combustible1;
let impuesto1;
let seguro1;
let Transporte1;
let total1;
let totalArt1;
let ivaTransporte;
let IvaKilo;
let peso3;

    
   
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
if (destino!=null){
let kilo=2.20462;
seguro =valor*0.02;
if (!medida){
	medida="Libras";
	}
     if(valor<=0){
     
    }else{
    seguro =valor*0.02;
    
    if(medida=='Kilo'){
		peso3=peso;
		peso=peso*kilo;
		}
			
    

    if(peso<=0){
		tarifa=6;
		flete=tarifa;
		}
    
    
     if(peso==1){
		tarifa=6;
		flete=tarifa;
		}
		
	   if(peso==2){
		tarifa=9;
		flete=tarifa;
		}
		
		   if(peso>1 && peso<2){
			tarifa=6;vla=2.64;
			Decimal = peso%1;
			vla=Decimal*2.64;
			
			flete=tarifa+vla;
			
			}
			if(peso>0 && peso<1){
			tarifa=6;
		flete=tarifa;
			
			}
			
			
			if(peso>2){
					
		
		if(peso>2 && peso<=13){
		tarifa=9;vla=2.64 ;
		}
		if(peso>13 && peso<25){
		tarifa=9;vla=2.50;
		}
		if(peso>=25 && peso<=100){
		tarifa=9;vla=1.80;
		}
		if(peso>100 && peso<=150){
		tarifa=9;vla=1.72;
		}
		if(peso>150 && peso<=200){
		tarifa=9;vla=1.63;
		}
		if(peso>200 && peso<=250){
		tarifa=9;vla=1.55;
		}
		if(peso>250){
		tarifa=9;vla=1.48;
		}
		
		
		peso2=peso-2;			
		calculo=tarifa+(peso2*vla);
		flete=calculo;	
    
	}
			
			
			


combustible=flete*0.17;


subtotal=flete+combustible;
  valor = parseFloat(valor, 10);
cif=seguro+valor+flete;
       


   
    if(cif >=1 && cif<=25.9999999)
    {
	totalGestion=3;	
	}
	if(cif >=26 && cif<=100.9999999)
    {
	totalGestion=5;	
	}
	if(cif >=101 && cif<=500.999999)
    {
	totalGestion=10;	
	}
	if(cif >=501)
    {
	totalGestion=35;	
	}
	
	
	
	
	
	totalGestion1=totalGestion*Iva;
    totalGestion=totalGestion+totalGestion1;
    
    	   if(medida=='Kilo'){
		
	if(valor>=10 &&  valor<=10.43){	
	if(peso==4.40924){
		totalGestion=5.65;
		
		
	}
}	
		
		}
		
		
    if(peso2<=1){

        iva1=1;
    }else{
        iva1=2;

    }

    
    iva=(totalGestion*Iva)+totalGestion;
    let subtotal2;
    subtotal2=cif;
	  fin=articulos.filter(d => d.ruta === tributario);
	  tributario=fin[0].precio;
	  
	  den=destinos.filter(e => e.Destinoss === destino);
	  pagoDestino=den[0].forma;
      Transporte=0;
      let tipoTransporte; 
	  if(pagoDestino==='Tarifa 1')
	  {
        Transporte=2;  
        tipoTransporte=1;
		color=<img src={camion_verde} clasName={classes.camion}/>;
	  }
	  
	  if(pagoDestino==='Tarifa 2')
	  {
        Transporte=2.66; 
        tipoTransporte=2;
		color=<img src={camion_amarillo} clasName={classes.camion}/>;
		
			if(medida=="Libras"){
		
		
		libraA=0.5;
		//pesoKilo="medifaddd";
		pesoKilo=peso/kilo;
		pesoKilo=pesoKilo-1;
		pesoKilo=pesoKilo*libraA;
		pesoKilo=pesoKilo+2.35;
		IvaKilo=pesoKilo*0.13;
		pesoKilo=pesoKilo+IvaKilo;
		Transporte=pesoKilo;
		if(peso<2.21){
			Transporte=2.66;
			}
		}
		if(medida=="Kilo"){
			
			libraA=0.5;
		pesoKilo=peso3;
		pesoKilo=pesoKilo-1;
		pesoKilo=pesoKilo*libraA;
		pesoKilo=pesoKilo+2.35;
		IvaKilo=pesoKilo*0.13;
		pesoKilo=pesoKilo+IvaKilo;
		Transporte=pesoKilo;
				if(peso3<1.1){
			Transporte=2.66;
			}
			
			}
		
	  }
	  
	  if(pagoDestino==='N/A')
	  {
		
		color=<img src={camion} clasName={classes.camion}/>;
		
	  }
       
       
     	  
	tributario=tributario/100;
	
    impuesto=cif*tributario;
    let subtotal3;

    subtotal3=subtotal2+impuesto;
    
	
	
    
    if(tipoTransporte==1){
        iva2=2;
        subtotal4=valor;
    }else{
        iva2=peso/kilo;
        iva2=iva2-1;
        iva2=iva2*0.5;
        iva2=iva2+2.35;
        subtotal4=0;

    }
	}


}
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

	totalArt=valor+flete+combustible+seguro+impuesto+Transporte+totalGestion;
	total=flete+combustible+seguro+impuesto+Transporte+totalGestion;
	
flete1=Number.parseFloat(flete).toFixed(2);
totalGestion11=Number.parseFloat(totalGestion).toFixed(2);
combustible1=Number.parseFloat(combustible).toFixed(2);
impuesto1=Number.parseFloat(impuesto).toFixed(2);
seguro1=Number.parseFloat(seguro).toFixed(2);
Transporte1=Number.parseFloat(Transporte).toFixed(2);
total1=Number.parseFloat(total).toFixed(2);
totalArt1=Number.parseFloat(totalArt).toFixed(2);





    return (
       
                <Grid>
                  <Row start="xs">
                    <Col>
				
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue="Disponible para el envió"
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
                                value={flete1}
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
                                value={totalGestion11}
                                label="Gestión"
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
                                value={combustible1}
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
                                value={impuesto1}
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
                                value={seguro1}
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
                                value={Transporte1}
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
                                value={total1}
                                label="Total Sin Artículo"
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
                                value={totalArt1}
                                label="Total Con Artículo"
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
                                Calcular envío
                    </Button>
						
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <Paper>
                        <ul class="ui list">

                         
                            <li className="small">Ingresa tu producto</li>
                            <li className="small">Coloca el valor de tu producto</li>
                            <li className="small">Coloca el peso de tu producto Kilos o Libras</li>
                            <p className={classes.p}> (Importante la calculadora inicia en libras por defecto)</p>
                            <li className="small">Selecciona tu destino</li>
                            <li className="small">Si tu destino tiene la opción de envío se encenderá una casilla de color</li>
                            <li className="small">Puede realizar en simultaneo 3 cálculos de diferentes productos</li>

                        </ul>
                        
                        </Paper>
                        </Col>
                    </Row>
             
                </Grid>
        
    );
}
