import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Table from '@material-ui/core/Table';
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
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <Paper>
                            <Table>
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

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Total con articulo</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotalArt)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Total sin articulo</TableCell>
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