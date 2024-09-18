import React from 'react';
import { TableHead, TableRow, TableCell, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TableHeaderProps {
    addonFields: string[];
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    borderBottom: `2px solid ${theme.palette.divider}`,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.primary,
}));

const TableHeader: React.FC<TableHeaderProps> = ({ addonFields }) => {
    return (
        <TableHead>
            <StyledTableRow>
                <TableCell>
                    <StyledBox>#</StyledBox>
                </TableCell>
                <TableCell>
                    <StyledBox>Користувач</StyledBox>
                </TableCell>
                <TableCell>
                    <StyledBox>Працює</StyledBox>
                </TableCell>
                <TableCell>
                    <StyledBox>Дата / Час створення</StyledBox>
                </TableCell>

                {addonFields.map((fieldName) => (
                    <TableCell key={fieldName}>
                        <StyledBox>{fieldName}</StyledBox>
                    </TableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    );
};

export default TableHeader;
