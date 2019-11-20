import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({

    cabecera: {
        backgroundColor: '#295290',
        color: '#ffffff',
    },

    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
}));

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function descripcion(desc, precio) {
    return { desc, precio };
}

function TotalArt(items) {
    return items.map(({ precio }) => precio).reduce((sum, i) => sum + i, 0);
}

const rows = [
    descripcion('Flete aereo Paq', 10),
    descripcion('Combustible', 10),
    descripcion('Seguro', 10),
    descripcion('Gestion aduanal', 10),
    descripcion('Impuesto nacionalizacion', 10),
    descripcion('Transporte costo por paquete', 20),
];

const invoiceTotalArt = TotalArt(rows);

export default function Pagar() {
    const classes = useStyles();
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={10}>
                        <Paper className={classes.root} style={{ margin: 8 }}>
                            <Table>
                            <TableHead >
                                <TableRow >
                                    <TableCell className={classes.cabecera} colSpan={3}>
                                        Total a pagar
                                    </TableCell>
                                    </TableRow>
                                <TableRow>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.desc}>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">{ccyFormat(row.precio)}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell rowSpan={2} />
                                    <TableCell ><b>Total con articulo</b> </TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotalArt)}</TableCell>
                                </TableRow>
                                    <TableRow>
                                    <TableCell ><b>Total sin articulo</b></TableCell>
                                    <TableCell align="rigth">{ccyFormat(invoiceTotalArt)}</TableCell>
                                </TableRow>
                                </TableBody>
                        </Table>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }