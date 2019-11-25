import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "bootstrap/dist/css/bootstrap.css";
import Table from 'react-bootstrap/Table';

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
    }
}));

export default function Pagar() {

let guardado,fin,valor,dato,numero,flete,gestion,combustible,seguro,impuesto,transporte,total1,total2,cont,mensa;
function ver(){
	
	

		  numero=localStorage.getItem("cont");
		  flete=localStorage.getItem("Cont_flete");
		  gestion=localStorage.getItem("Cont_gestion");
		  combustible=localStorage.getItem("Cont_combustible");
		  seguro=localStorage.getItem("Cont_seguro");
		  impuesto=localStorage.getItem("Cont_impuesto");
		  transporte=localStorage.getItem("Cont_transporte");
		  total1=localStorage.getItem("Cont_total1");
		  total2=localStorage.getItem("Cont_total2");
		  
		  
		  
		  if(numero==null)
		  {
			  numero="0";
		  }
		  if(flete==null)
		  {
			  flete="0,00";
		  }
		  if(gestion==null)
		  {
			  gestion="0,00";
		  }
		  if(combustible==null)
		  {
			  combustible="0,00";
		  }
		  if(seguro==null)
		  {
			  seguro="0,00";
		  }
		  if(impuesto==null)
		  {
			  impuesto="0,00";
		  }
		  if(transporte==null)
		  {
			  transporte="0,00";
		  }
		  if(total1==null)
		  {
			  total1="0,00";
		  }
		  if(total2==null)
		  {
			  total2="0,00";
		  }
		  
		  
		  
                                 				
                                                 dato = "        <Table striped bordered hover> ";
                                                 dato+="        <thead>";
             dato += "            <tr>";
             dato += "                <th>";
             dato += "                   Resultado(s) de lo(s) envio(s) ";
             dato += "                </th>";
                                                 dato+="                <th>"; 
             dato += "                </th>";
             dato += "            </tr>";
             dato += "        </thead>";
                                                 dato+="        <thead>    ";
             dato += "            <tr>";
             dato += "                <th>";
             dato += "                    Descripción";
             dato += "                </th>";
                                                 dato+="                <th>";
             dato += "                    Precio";
             dato += "                </th>";
             dato += "            </tr>";
             dato += "        </thead>";
             dato += "        <tbody>";
                                                 dato+="            <tr>",
             dato += "                <td>";
             dato += "                    Numero de articulos ";               
             dato += "                </td>";
             dato += "                <td>"
             +numero+     
             "                </td>";
             dato += "            </tr>";
             dato += "            <tr>";
                                                 dato+="                <td>";
             dato += "                    Flete";
             dato += "                </td>";
    dato += "                <td>"
    +flete+
             "                </td>";
                                                 dato+="            </tr>    ";
             dato += "            <tr>";
             dato += "                <td>";
                                                 dato+="                    Gestion";
             dato += "                </td>";
    dato += "                <td>"
                +gestion+
             "                </td>";
             dato += "            </tr>";
             dato += "            <tr>";
             dato += "                <td>";
             dato += "                    Combustible";
                                                 dato+="                </td>";
    dato += "                <td>"
    +combustible+
                                                 "                </td>";
             dato += "            </tr>";
                                                 dato+="            <tr>";
             dato += "                <td>";
             dato += "                    Seguro";
             dato += "                </td>";
             dato += "                <td>"
                        +seguro+
             "                </td>";
                                                 dato+="            </tr>";
             dato += "            <tr>";
                                                 dato+="                <td>";
             dato += "                    Impuesto";
                                                 dato+="                </td>";
                                                 dato+="                <td>"
              +impuesto+
                                                 "                </td>";
                                                 dato+="            </tr>";
             dato += "            <tr>";
             dato += "                <td>";
             dato += "                    Transporte";
             dato += "                </td>";
                                                 dato+="                <td>"
             +transporte+
                                                 "                </td>";
                                                 dato+="            </tr> ";
             dato += "            <tr>";
             dato += "                <th>";
             dato += "                   Total sin articulo"; 
             dato += "                </th>";
             dato += "                <td>"
                                           +total1+ 
                                                 "                </td>";
                                                 dato+="            </tr>";
             dato += "            <tr>";
             dato += "                <th>";
             dato += "                    Total con articulo";
             dato += "                </th>";
             dato += "                <td>"
             +total2+
                                                 "                </td>";
                                                 dato+="            </tr> ";
             dato += "        </tbody>";
             dato += "    </Table>";
                                    
		  document.getElementById("id").innerHTML  =dato ;
	}
function clear(){
	
	      localStorage.removeItem("cont");
		  localStorage.removeItem("Cont_flete");
		  localStorage.removeItem("Cont_gestion");
		  localStorage.removeItem("Cont_combustible");
		  localStorage.removeItem("Cont_seguro");
		  localStorage.removeItem("Cont_impuesto");
		  localStorage.removeItem("Cont_transporte");
		  localStorage.removeItem("Cont_total1");
		  localStorage.removeItem("Cont_total2");
	
					 localStorage.removeItem('currency2');
					localStorage.removeItem('currency');
					localStorage.removeItem('currency3');
					localStorage.removeItem('currency4');
					localStorage.removeItem('currency5');
												
    dato = "        <Table striped bordered hover>";
                                        dato+="        <thead>";
    dato += "            <tr>";
    dato += "                <th>";
    dato += "                   Resultado(s) de lo(s) envio(s) ";
    dato += "                </th>";
                                        dato+="                <th>"; 
    dato += "                </th>";
    dato += "            </tr>";
    dato += "        </thead>";
                                        dato+="        <thead>    ";
    dato += "            <tr>";
    dato += "                <th>";
    dato += "                    Descripción";
    dato += "                </th>";
                                        dato+="                <th>";
    dato += "                    Precio";
    dato += "                </th>";
    dato += "            </tr>";
    dato += "        </thead>";
    dato += "        <tbody>";
                                        dato+="            <tr>",
    dato += "                <td>";
    dato += "                    Numero de articulos ";               
    dato += "                </td>";
    dato += "                <td>";
    dato += "                    0.00   ";     
    dato += "                </td>";
    dato += "            </tr>";
    dato += "            <tr>";
                                        dato+="                <td>";
    dato += "                    Flete";
    dato += "                </td>";
                                        dato+="                <td>";
    dato += "                    0.00";
    dato += "                </td>";
                                        dato+="            </tr>    ";
    dato += "            <tr>";
    dato += "                <td>";
                                        dato+="                    Gestion";
    dato += "                </td>";
                                        dato+="                <td>";
                                        dato+="                    0.00";
    dato += "                </td>";
    dato += "            </tr>";
    dato += "            <tr>";
    dato += "                <td>";
    dato += "                    Combustible";
                                        dato+="                </td>";
    dato += "                <td>";
                                        dato+="                    0.00";
                                        dato+="                </td>";
    dato += "            </tr>";
                                        dato+="            <tr>";
    dato += "                <td>";
    dato += "                    Seguro";
    dato += "                </td>";
    dato += "                <td>";
                                        dato+="                    0.00";
    dato += "                </td>";
                                        dato+="            </tr>";
    dato += "            <tr>";
                                        dato+="                <td>";
    dato += "                    Impuesto";
                                        dato+="                </td>";
                                        dato+="                <td>";
    dato += "                    0.00";
                                        dato+="                </td>";
                                        dato+="            </tr>";
    dato += "            <tr>";
    dato += "                <td>";
    dato += "                    Transporte";
    dato += "                </td>";
                                        dato+="                <td>";
    dato += "                    0.00";
                                        dato+="                </td>";
                                        dato+="            </tr> ";
    dato += "            <tr>";
    dato += "                <th>";
    dato += "                   Total sin articulo"; 
    dato += "                </th>";
    dato += "                <td>";
                                        dato+="                    0.00";
                                        dato+="                </td>";
                                        dato+="            </tr>";
    dato += "            <tr>";
    dato += "                <th>";
    dato += "                    Total con articulo";
    dato += "                </th>";
    dato += "                <td>";
    dato += "                    0.00";
                                        dato+="                </td>";
                                        dato+="            </tr> ";
    dato += "        </tbody>";
    dato += "    </Table>";
                                    	
		  document.getElementById("id").innerHTML  =dato ;

		  
		  
	}
    const classes = useStyles();
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={10}>
                                
                                <Table striped bordered hover id="id">
                            <thead>
                                <tr>
                                    <th>
                                       Resultado(s) de lo(s) envio(s) 
                                    </th>
                                    <th>
                                            
                                    </th>
                                </tr>
                            </thead>
                            <thead>    
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
                        </Table>

                                <Button variant="contained"   onClick={ver}style={{ margin: 16 }} className={classes.button}>
                                Totalizar
                    </Button>
                    
                    
                    
                    <Button variant="contained"   onClick={clear}style={{ margin: 16 }} className={classes.button}>
                                Limpiar 
                    </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
