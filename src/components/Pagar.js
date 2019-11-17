import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
//import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function descripcion(desc, precio) {
    return { desc, precio };
}

const rows = [
    descripcion('Flete aereo Paq', 10),
    descripcion('Combustible', 50),
    descripcion('Seguro', 20),
    descripcion('Gestion aduanal', 70),
    descripcion('Impuesto nacionalizacion', 40),
    descripcion('Transporte costo por paquete', 15),
];

export default function Pagar() {
        return (
            <Grid>
                <Row center="xs">
                    <Col>
                        <Paper>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
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
                            </TableBody>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }