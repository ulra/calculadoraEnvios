import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme =>({

    cabecera: {
        backgroundColor: '#295290',
        color: '#ffffff',
    },

    root: {
        
        marginTop: theme.spacing(3),
        overflowX: 'none',
      },

      button: {
        padding: 10,
        backgroundColor: '#bf0103',
        color: '#ffffff'
    },

    tabla: {
        background: '#fff'
    }
}));

const alert = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];

export default function Pagar() {

let dato,numero,flete,gestion,combustible,seguro,impuesto,transporte,total1,total2;
let flete1;
let totalGestion1;
let combustible1;
let impuesto1;
let seguro1;
let Transporte1;

let total11;
let totalArt1;
function ver(){
	
	

		  numero=localStorage.getItem('cont');
		  flete=localStorage.getItem('Cont_flete');
		  gestion=localStorage.getItem('Cont_gestion');
		  combustible=localStorage.getItem('Cont_combustible');
		  seguro=localStorage.getItem('Cont_seguro');
		  impuesto=localStorage.getItem('Cont_impuesto');
		  transporte=localStorage.getItem('Cont_transporte');
		  total11=localStorage.getItem('Cont_total1');
		  total2=localStorage.getItem('Cont_total2');
		  
		  flete1=Number.parseFloat(flete).toFixed(2);
totalGestion1=Number.parseFloat(gestion).toFixed(2);
combustible1=Number.parseFloat(combustible).toFixed(2);
impuesto1=Number.parseFloat(impuesto).toFixed(2);
seguro1=Number.parseFloat(seguro).toFixed(2);
Transporte1=Number.parseFloat(transporte).toFixed(2);
total11=Number.parseFloat(total11).toFixed(2);
totalArt1=Number.parseFloat(total2).toFixed(2);

		  
		  if(numero==null)
		  {
			  numero='0';
		  }
		  if(flete1==null)
		  {
			  flete='0,00';
		  }
		  if(totalGestion1==null)
		  {
			  totalGestion1='0,00';
		  }
		  if(combustible1==null)
		  {
			  combustible1='0,00';
		  }
		  if(seguro1==null)
		  {
			  seguro1='0,00';
		  }
		  if(impuesto1==null)
		  {
			  impuesto1='0,00';
		  }
		  if(Transporte1==null)
		  {
			  Transporte1='0,00';
		  }
		  if(total11==null)
		  {
			  total11='0,00';
		  }
		  if(totalArt1==null)
		  {
			  total2='0,00';
		  }
		  
		  
		  if (isNaN(flete1)) {
    flete1='0.00';      // Se ejecuta
}
if (isNaN(totalGestion1)) {
    totalGestion1='0.00';      // Se ejecuta
}
if (isNaN(combustible1)) {
    combustible1='0.00';      // Se ejecuta
}
if (isNaN(impuesto1)) {
    impuesto1='0.00';      // Se ejecuta
}
if (isNaN(total11)) {
    total11='0.00';      // Se ejecuta
}
if (isNaN(totalArt1)) {
    totalArt1='0.00';      // Se ejecuta
}
if (isNaN(Transporte1)) {
    Transporte1='0.00';      // Se ejecuta
}
if (isNaN(seguro1)) {
    seguro1='0.00';      // Se ejecuta
}

                                 				
                                                 dato = '        <table  class="ui celled table"> ';
                                                 dato+='        <thead class="">    ';
             dato += '            <tr>';
             dato += '                <th>';
             dato += '                    Descripción';
             dato += '                </th>';
                                                 dato+='                <th>';
             dato += '                    Precio';
             dato += '                </th>';
             dato += '            </tr>';
             dato += '        </thead>';
             dato += '        <tbody>';
    dato += '            <tr>';
             dato += '                <td>';
             dato += '                    Número de Artículos ';               
             dato += '                </td>';
             dato += '                <td>'
             +numero+     
             '                </td>';
             dato += '            </tr>';
             dato += '            <tr>';
                                                 dato+='                <td>';
             dato += '                    Flete';
             dato += '                </td>';
    dato += '                <td>'
    +flete1+
             '                </td>';
                                                 dato+='            </tr>    ';
             dato += '            <tr>';
             dato += '                <td>';
                                                 dato+='                    Gestion';
             dato += '                </td>';
    dato += '                <td>'
                +totalGestion1+
             '                </td>';
             dato += '            </tr>';
             dato += '            <tr>';
             dato += '                <td>';
             dato += '                    Combustible';
                                                 dato+='                </td>';
    dato += '                <td>'
    +combustible1+
                                                 '                </td>';
             dato += '            </tr>';
                                                 dato+='            <tr>';
             dato += '                <td>';
             dato += '                    Seguro';
             dato += '                </td>';
             dato += '                <td>'
                        +seguro1+
             '                </td>';
                                                 dato+='            </tr>';
             dato += '            <tr>';
                                                 dato+='                <td>';
             dato += '                    Impuesto';
                                                 dato+='                </td>';
                                                 dato+='                <td>'
              +impuesto1+
                                                 '                </td>';
                                                 dato+='            </tr>';
             dato += '            <tr>';
             dato += '                <td>';
             dato += '                    Transporte';
             dato += '                </td>';
                                                 dato+='                <td>'
             +Transporte1+
                                                 '                </td>';
                                                 dato+='            </tr> ';
             dato += '            <tr>';
             dato += '                <th>';
             dato += '                   Total sin Artículo'; 
             dato += '                </th>';
             dato += '                <td>'
                                           +total11+ 
                                                 '                </td>';
                                                 dato+='            </tr>';
             dato += '            <tr>';
             dato += '                <th>';
             dato += '                    Total con Artículo';
             dato += '                </th>';
             dato += '                <td>'
             +totalArt1+
                                                 '                </td>';
                                                 dato+='            </tr> ';
             dato += '        </tbody>';
             dato += '    </table >';
                                    
		  document.getElementById('id').innerHTML  =dato ;
	}
function clear(){
	
	      localStorage.removeItem('cont');
		  localStorage.removeItem('Cont_flete');
		  localStorage.removeItem('Cont_gestion');
		  localStorage.removeItem('Cont_combustible');
		  localStorage.removeItem('Cont_seguro');
		  localStorage.removeItem('Cont_impuesto');
		  localStorage.removeItem('Cont_transporte');
		  localStorage.removeItem('Cont_total1');
		  localStorage.removeItem('Cont_total2');
	
					 localStorage.removeItem('currency2');
					localStorage.removeItem('currency');
					localStorage.removeItem('currency3');
					localStorage.removeItem('currency4');
					localStorage.removeItem('currency5');
												
    dato = '        <table  class="ui celled table">';
                                        dato+='        <thead class="">    ';
    dato += '            <tr>';
    dato += '                <th>';
    dato += '                    Descripción';
    dato += '                </th>';
                                        dato+='                <th>';
    dato += '                    Precio';
    dato += '                </th>';
    dato += '            </tr>';
    dato += '        </thead>';
    dato += '        <tbody>';
    dato += '            <tr>';
    dato += '                <td>';
    dato += '                    Número de Articulos ';               
    dato += '                </td>';
    dato += '                <td>';
    dato += '                    0   ';     
    dato += '                </td>';
    dato += '            </tr>';
    dato += '            <tr>';
                                        dato+='                <td>';
    dato += '                    Flete';
    dato += '                </td>';
                                        dato+='                <td>';
    dato += '                    0.00';
    dato += '                </td>';
                                        dato+='            </tr>    ';
    dato += '            <tr>';
    dato += '                <td>';
                                        dato+='                    Gestión';
    dato += '                </td>';
                                        dato+='                <td>';
                                        dato+='                    0.00';
    dato += '                </td>';
    dato += '            </tr>';
    dato += '            <tr>';
    dato += '                <td>';
    dato += '                    Combustible';
                                        dato+='                </td>';
    dato += '                <td>';
                                        dato+='                    0.00';
                                        dato+='                </td>';
    dato += '            </tr>';
                                        dato+='            <tr>';
    dato += '                <td>';
    dato += '                    Seguro';
    dato += '                </td>';
    dato += '                <td>';
                                        dato+='                    0.00';
    dato += '                </td>';
                                        dato+='            </tr>';
    dato += '            <tr>';
                                        dato+='                <td>';
    dato += '                    Impuesto';
                                        dato+='                </td>';
                                        dato+='                <td>';
    dato += '                    0.00';
                                        dato+='                </td>';
                                        dato+='            </tr>';
    dato += '            <tr>';
    dato += '                <td>';
    dato += '                    Transporte';
    dato += '                </td>';
                                        dato+='                <td>';
    dato += '                    0.00';
                                        dato+='                </td>';
                                        dato+='            </tr> ';
    dato += '            <tr>';
    dato += '                <th>';
    dato += '                   Total sin Artículo'; 
    dato += '                </th>';
    dato += '                <td>';
                                        dato+='                    0.00';
                                        dato+='                </td>';
                                        dato+='            </tr>';
    dato += '            <tr>';
    dato += '                <th>';
    dato += '                    Total con Artículo';
    dato += '                </th>';
    dato += '                <td>';
    dato += '                    0.00';
                                        dato+='                </td>';
                                        dato+='            </tr> ';
    dato += '        </tbody>';
    dato += '    </table >';
                                    	
		  document.getElementById('id').innerHTML  =dato ;

		  
		  
	}
    const classes = useStyles();
        return (
            <Grid className={classes.tabla}>
                <Row center='xs'>
                    <Col xs={10} cente='xs'>
                        <Paper style={{ margin: 3 }}>
                        <div class="alert alert-info" role="alert" >
                        Resultado(s) de lo(s) envío(s)
                    </div>
                                <table  class="ui celled table"  id='id'>
                            <thead class="">    
                                <tr>
                                    <th>
                                        Descripción
                                    </th>
                                    <th>
                                        Precio
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Número de Articulos                
                                    </td>
                                    <td>
                                        0.00        
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Flete
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr>    
                                <tr>
                                    <td>
                                        Gestión
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Combustible
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Seguro
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Impuesto
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Transporte
                                    </td>
                                    <td>
                                        0.00
                                    </td>
                                </tr> 
                                <tr>
                                    <th>
                                       Total sin Artículo 
                                    </th>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Total con Artículo
                                    </th>
                                    <td>
                                        0.00
                                    </td>
                                </tr> 
                            </tbody>
                        </table >

                                <Button variant='contained'   onClick={ver}style={{ margin: 16 }} className={classes.button}>
                                Totalizar
                    </Button>
                    
                    
                    
                    <Button variant='contained'   onClick={clear}style={{ margin: 16 }} className={classes.button}>
                                Limpiar 
                    </Button>
                    <div class="alert alert-info" role="alert" >
                        Nota: el paquete se entrega entre 24 a 48 horas una vez recibido en Miami
                    </div>
                    </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
