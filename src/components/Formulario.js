import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Impuesto from './Impuesto';
import destinos from './destinos.json';
import articulos from './articulos.json';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Pagar from './Pagar';

const useStyles = makeStyles({
    TextField: {
        align: 'left',
    
    }, 

    peso: {  
        margin: 2,
    }

});


export default function Formulario() {

    let Pdestinos;
    const classes = useStyles();
    const [ currency, setCurrency] = React.useState('');
    
    const handleChange = event => {
        sessionStorage.setItem('currency', event.target.value);
        setCurrency(event.target.value);
      };

      const [ currency2, setCurrency2] = React.useState('');

      const handleChange2 = event => {
        sessionStorage.setItem('currency2', event.target.value);
        setCurrency2(event.target.value);
      };
    
      const [ currency3, setCurrency3] = React.useState('');
		let ff;
      const handleChange3 = event => {
		 
        sessionStorage.setItem('currency3', event.target.value);
        setCurrency3(event.target.value);
      };

      const [currency4, setValue4] = React.useState('');

      const handleChange4 = event => {
          sessionStorage.setItem('currency4', event.target.value);
          setValue4(event.target.value);
      };
      
      
       const  [setVacurrency5, setValue5] = React.useState('Libras');

      const handleChange5 = event => {
          sessionStorage.setItem('currency5', event.target.value);
          setValue5(event.target.value);
      };

      function ordenarAsc(p_array_json, p_key) {
        p_array_json.sort(function (a, b) {
           return a[p_key] > b[p_key];
        });
     }
    
     
     ordenarAsc(destinos, 'Destinoss');
        return (
            <Grid>
                <Row start="xs">
                    <Col xs={12} >
                       
                        <TextField 
                            className={classes.TextField}
                            id="articulo"
                            select
                            fullWidth
                            label="Artículo"
                            value={currency2}
                            variant="outlined"
                            style={{ margin: 8 }}
                            onChange={handleChange2.bind(this)}
                          
                        >
                            {
                                                              
                                articulos.map(option => (
                                <MenuItem key={option.precio} value={option.ruta}  >
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
                            id="destino"
                            value={currency}
                            label="Destino"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            select
                            style={{ margin: 8 }}
                            onChange={handleChange.bind(this)}
                            SelectProps={{
                                MenuProps: {
                                  className: classes.menu,
                                },
                              }}
                        >
                            {
                            
                            
                            
                           
                               
                                destinos.map(option => (
                                <MenuItem key={option.Destinoss} value={option.Destinoss} >
                            {option.Destinoss}
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
                            id="valor"
                            label="Valor producto"
                            defaultValue="0"
                            margin="normal"
                            value={currency3}
                            onChange={handleChange3.bind(this)}
                            variant="outlined"
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
                            id="peso"
                            label="Peso"
                            value={currency4}
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange4.bind(this)}
                            style={{ marginLeft: 16, marginRight: 20 }}
                        />
                    </Col>
                    <Col >
                    <div>
            <FormControl component="fieldset" className={classes.FormControl} style={{ marginLeft: 18, marginTop: 8 }}>
                <FormLabel component="legend">Medidas</FormLabel>
                    <RadioGroup aria-label="Medidas" name="medidas"  onChange={handleChange5.bind(this)} row >
                    <FormControlLabel value="Kilo"  control={<Radio color="primary"  labelPlacement="start"/>} label="Kilo" />
                    <FormControlLabel value="Libras"  control={<Radio color="primary"  labelPlacement="start"/>} label="Libra" />
                    </RadioGroup>
                
            </FormControl>
        </div>
                    </Col>
                </Row>
                    
          
                <Row>
                    <Col xs={12} md={6} >
                        < Impuesto />
                    </Col>
                    <Col xs={12} md={6}>
                              <Pagar/>
                        </Col>    
                </Row>
                    
            </Grid>
        );
    }

