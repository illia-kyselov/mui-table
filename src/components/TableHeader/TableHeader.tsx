import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';
import "./TableHeader.scss";

interface TableHeaderProps {
    addonFields: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ addonFields }) => (
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

            {addonFields.map((fieldName) => (
                <TableCell key={fieldName}>
                    <span className="operator-table-header__text">{fieldName}</span>
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

export default TableHeader;
