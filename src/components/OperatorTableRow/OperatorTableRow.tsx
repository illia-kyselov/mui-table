import React from 'react';
import { TableRow, TableCell, Avatar, Checkbox, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { formatDate } from '../../utils/formatters';

interface OperatorTableRowProps {
    operator: {
        id: string;
        name: string;
        avatar: string;
        isWorking: boolean;
        createdAt: string;
    };
    addons: Record<string, string>;
    addonFields: string[];
    index: number;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const TextBox = styled(Box)(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
}));

const BoldTextBox = styled(Box)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    lineHeight: theme.typography.body2.lineHeight,
}));

const OperatorTableRow: React.FC<OperatorTableRowProps> = React.memo(
    ({ operator, addons, addonFields, index }) => {
        const theme = useTheme();

        return (
            <TableRow key={operator.id} id={`${index}`}>
                <StyledTableCell>
                    <BoldTextBox>{operator.id}</BoldTextBox>
                </StyledTableCell>

                <StyledTableCell>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing(1),
                        }}
                    >
                        <Avatar
                            alt={operator.name}
                            src={operator.avatar}
                            sx={{ backgroundColor: theme.palette.primary.main }}
                        />
                        <TextBox>{operator.name}</TextBox>
                    </Box>
                </StyledTableCell>

                <StyledTableCell>
                    <Checkbox
                        checked={operator.isWorking}
                        disabled
                        sx={{
                            '& .MuiSvgIcon-root': {
                                color: theme.palette.secondary.main,
                            },
                            '&.Mui-checked .MuiSvgIcon-root': {
                                color: theme.palette.primary.main,
                            },
                        }}
                    />
                </StyledTableCell>

                <StyledTableCell>
                    <TextBox>{formatDate(operator.createdAt)}</TextBox>
                </StyledTableCell>

                {addonFields.map((fieldName) => (
                    <StyledTableCell key={fieldName}>
                        <TextBox>{addons[fieldName] || '-'}</TextBox>
                    </StyledTableCell>
                ))}
            </TableRow>
        );
    },
);

export default OperatorTableRow;
