import React from 'react';
import { TableBody, TableRow, TableCell, Typography } from '@mui/material';
import OperatorTableRow from '../OperatorTableRow/OperatorTableRow';

interface OperatorTableBodyProps {
    sortedOperators: any[];
    addonFields: string[];
    operatorAddons: any[];
    mergeAddons: (operatorAddons: any[], operatorId: string) => any;
    rowsPerPage: number;
    page: number;
}

const OperatorTableBody: React.FC<OperatorTableBodyProps> = ({
    sortedOperators,
    addonFields,
    operatorAddons,
    mergeAddons,
    rowsPerPage,
    page,
}) => {
    return (
        <TableBody>
            {sortedOperators.length === 0 ? (
                <TableRow>
                    <TableCell colSpan={addonFields.length + 4} align="center">
                        <Typography
                            variant="h6"
                            color="error"
                            sx={{ fontWeight: 'bold' }}
                        >
                            Упс... Нічого не знайдено
                        </Typography>
                    </TableCell>
                </TableRow>
            ) : (
                sortedOperators
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((operator: any, index: number) => (
                        <OperatorTableRow
                            key={operator.id}
                            index={index}
                            operator={operator}
                            addons={mergeAddons(operatorAddons, operator.id)}
                            addonFields={addonFields}
                        />
                    ))
            )}
        </TableBody>
    );
};

export default OperatorTableBody;
