import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyle = makeStyles(theme => ({

}));

export default function Peso() {
    const classes = useStyle();
    const [value, setValue] = React.useState('Kilo');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <div>
            <FormControl component="fieldset" className={classes.FormControl} style={{ marginLeft: 18, marginTop: 8 }}>
                <FormLabel component="legend">Medidas</FormLabel>
                    <RadioGroup aria-label="Medidas" name="medidas" value={value} onChange={handleChange} row>
                    <FormControlLabel value="Kilo" control={<Radio color="primary"  labelPlacement="start"/>} label="Kilo" />
                    <FormControlLabel value="Libras" control={<Radio color="primary"  labelPlacement="start"/>} label="Libra" />
                    </RadioGroup>
            </FormControl>
        </div>
    );
}