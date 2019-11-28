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
	
	

		  numero=sessionStorage.getItem('cont');
		  flete=sessionStorage.getItem('Cont_flete');
		  gestion=sessionStorage.getItem('Cont_gestion');
		  combustible=sessionStorage.getItem('Cont_combustible');
		  seguro=sessionStorage.getItem('Cont_seguro');
		  impuesto=sessionStorage.getItem('Cont_impuesto');
		  transporte=sessionStorage.getItem('Cont_transporte');
		  total11=sessionStorage.getItem('Cont_total1');
		  total2=sessionStorage.getItem('Cont_total2');
		  
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
		  if(flete==null)
		  {
			  flete='0,00';
		  }
		  if(gestion==null)
		  {
			  gestion='0,00';
		  }
		  if(combustible==null)
		  {
			  combustible='0,00';
		  }
		  if(seguro==null)
		  {
			  seguro='0,00';
		  }
		  if(impuesto==null)
		  {
			  impuesto='0,00';
		  }
		  if(transporte==null)
		  {
			  transporte='0,00';
		  }
		  if(total1==null)
		  {
			  total1='0,00';
		  }
		  if(total2==null)
		  {
			  total2='0,00';
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
             dato += '                    Numero de articulos ';               
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
                +gestion+
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
             dato += '                   Total sin articulo'; 
             dato += '                </th>';
             dato += '                <td>'
                                           +total11+ 
                                                 '                </td>';
                                                 dato+='            </tr>';
             dato += '            <tr>';
             dato += '                <th>';
             dato += '                    Total con articulo';
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
	
	      sessionStorage.removeItem('cont');
		  sessionStorage.removeItem('Cont_flete');
		  sessionStorage.removeItem('Cont_gestion');
		  sessionStorage.removeItem('Cont_combustible');
		  sessionStorage.removeItem('Cont_seguro');
		  sessionStorage.removeItem('Cont_impuesto');
		  sessionStorage.removeItem('Cont_transporte');
		  sessionStorage.removeItem('Cont_total1');
		  sessionStorage.removeItem('Cont_total2');
	
					 sessionStorage.removeItem('currency2');
					sessionStorage.removeItem('currency');
					sessionStorage.removeItem('currency3');
					sessionStorage.removeItem('currency4');
					sessionStorage.removeItem('currency5');
												
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
    dato += '                    Numero de articulos ';               
    dato += '                </td>';
    dato += '                <td>';
    dato += '                    0.00   ';     
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
                                        dato+='                    Gestion';
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
    dato += '                   Total sin articulo'; 
    dato += '                </th>';
    dato += '                <td>';
                                        dato+='                    0.00';
                                        dato+='                </td>';
                                        dato+='            </tr>';
    dato += '            <tr>';
    dato += '                <th>';
    dato += '                    Total con articulo';
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
                        Resultado(s) de lo(s) envio(s)
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
                                        Numero de articulos                
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
                                        Gestion
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
                                       Total sin articulo 
                                    </th>
                                    <td>
                                        0.00
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Total con articulo
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
