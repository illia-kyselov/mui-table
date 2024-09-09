import React from "react";
import { TableRow, TableCell, Avatar, Checkbox } from "@mui/material";
import "./OperatorTableRow.scss";
import { formatDate } from "../../utils/formatters";

interface OperatorTableRowProps {
    operator: {
        id: string;
        name: string;
        avatar: string;
        isWorking: boolean;
        createdAt: string;
    };
    addons: Record<string, string>;
    index: number;
    addonFields: string[];
}

const OperatorTableRow: React.FC<OperatorTableRowProps> = ({
    operator,
    addons,
    index,
    addonFields,
}) => {
    return (
        <TableRow className="operator-table-row" key={operator.id}>
            <TableCell className="operator-table-row__cell">
                <span className="operator-table-row__cell--index">{operator.id}</span>
            </TableCell>
            <TableCell className="operator-table-row__cell">
                <div className="operator-table-row__cell--name">
                    <Avatar
                        className="operator-table-row__avatar"
                        alt={operator.name}
                        src={operator.avatar}
                    />
                    <span>{operator.name}</span>
                </div>
            </TableCell>
            <TableCell className="operator-table-row__cell">
                <Checkbox
                    className="operator-table-row__checkbox"
                    checked={operator.isWorking}
                    disabled
                />
            </TableCell>
            <TableCell className="operator-table-row__cell">
                <span>{formatDate(operator.createdAt)}</span>
            </TableCell>

            {addonFields.map((fieldName) => (
                <TableCell key={fieldName} className="operator-table-row__cell">
                    <span>{addons[fieldName] || "-"}</span>
                </TableCell>
            ))}
        </TableRow>
    );
};

export default OperatorTableRow;
