import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';
import "./TableHeader.scss";

const TableHeader: React.FC = () => (
    <TableHead className="operator-table-header">
        <TableRow className="operator-table-header__row">
            <TableCell>
                <span className="operator-table-header__text">#</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">Користувач</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">Працює</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">Дата / Час створення</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">SMTP</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">JBOD</span>
            </TableCell>
            <TableCell>
                <span className="operator-table-header__text">fieldName[]</span>
            </TableCell>
        </TableRow>
    </TableHead>
);

export default TableHeader;
