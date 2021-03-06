import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario';
import AppBar from './AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import costarica from './images/costarica.svg';

const useStyles = makeStyles({
    container: {
        background: '#ffffff',
    },

    typo: {
        color: '#bf0103',
        margin: 16,
    },


});



export default function Index() {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar />
            <Grid className={classes.container}>
                <Row start="xs">
                    <Col xs={12}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>
                        Calculadora
                    </Typography>
                    
                    </Col>
                </Row>
                <Row start="xs">         
                    <Col xs={12}>
                        <Formulario />
                    </Col>    
                </Row>
            </Grid>
            <Footer />
        </div>
        );
}

