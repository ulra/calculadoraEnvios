import React from 'react';
import { makeStyle } from '@material-ui/core/styles';
import Radio from '@material-ui/core/radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
            <FormControl component="fieldset" className={classes.FormControl}>
                <FormLabel component="legend">Medidas</FormLabel>
                    <RadioGroup aria-label="Medidas" name="medidas" value={value} onChange={handleChange}>
                        <FormControlLabel value="Kilo"/>
                        <FormControlLabel />
                    </RadioGroup>
            </FormControl>
        </div>
    );
}