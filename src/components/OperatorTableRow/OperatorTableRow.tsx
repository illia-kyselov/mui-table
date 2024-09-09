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
    addons: {
        SMTP: string;
        JBOD: string;
        additional: string;
    };
    index: number;
}

const OperatorTableRow: React.FC<OperatorTableRowProps> = ({
    operator,
    addons,
    index,
}) => {
    return (
        <TableRow className="operator-table-row" key={operator.id}>
            <TableCell className="operator-table-row__cell">
                <span className="operator-table-row__text operator-table-row__cell--index">
                    {operator.id}
                </span>
            </TableCell>
            <TableCell className="operator-table-row__cell">
                <div className="operator-table-row__cell--name">
                    <Avatar
                        className="operator-table-row__avatar"
                        alt={operator.name}
                        src={operator.avatar}
                    />
                    <span className="operator-table-row__text operator-table-row__text--name">
                        {operator.name}
                    </span>
                </div>
            </TableCell>
            <TableCell className="operator-table-row__cell operator-table-row__cell--checkbox">
                <Checkbox
                    className={`operator-table-row__checkbox ${!operator.isWorking ? "operator-table-row__checkbox--disabled" : ""
                        }`}
                    checked={operator.isWorking}
                    disabled={!operator.isWorking}
                />
            </TableCell>
            <TableCell className="operator-table-row__cell operator-table-row__cell--created-at">
                <span className="operator-table-row__text operator-table-row__text--created-at">
                    {formatDate(operator.createdAt)}
                </span>
            </TableCell>
            <TableCell className="operator-table-row__cell operator-table-row__cell--smtp">
                <span className="operator-table-row__text operator-table-row__text--smtp">
                    {addons.SMTP}
                </span>
            </TableCell>
            <TableCell className="operator-table-row__cell operator-table-row__cell--jbod">
                <span className="operator-table-row__text operator-table-row__text--jbod">
                    {addons.JBOD}
                </span>
            </TableCell>
            <TableCell className="operator-table-row__cell operator-table-row__cell--additional">
                <span className="operator-table-row__text operator-table-row__text--additional">
                    {addons.additional}
                </span>
            </TableCell>
        </TableRow>
    );
};

export default OperatorTableRow;
