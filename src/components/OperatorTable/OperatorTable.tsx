import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOperators } from "../../redux/slices";
import {
    Table,
    TableBody,
    TableContainer,
    Paper,
    TextField,
    TablePagination,
    TableRow,
    TableCell,
    Typography,
} from "@mui/material";
import OperatorTableRow from "../OperatorTableRow/OperatorTableRow";
import TableHeader from "../TableHeader/TableHeader";
import "./OperatorTable.scss";

const OperatorTable: React.FC = () => {
    const dispatch = useDispatch();
    const { operators, operatorAddons, loading } = useSelector(
        (state: any) => state.operators
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        dispatch(fetchOperators());
    }, [dispatch]);

    const mergeAddons = (operatorId: string) => {
        const smtpAddon = operatorAddons.find((addon: any) => addon.fieldName === "SMTP" && addon.id === operatorId);
        const jbodAddon = operatorAddons.find((addon: any) => addon.fieldName === "JBOD" && addon.id === operatorId);
        const additionalAddons = operatorAddons
            .filter((addon: any) => addon.id === operatorId && addon.fieldName !== "SMTP" && addon.fieldName !== "JBOD")
            .map((addon: any) => addon.text)
            .join(", ");

        return {
            SMTP: smtpAddon ? smtpAddon.text : "-",
            JBOD: jbodAddon ? jbodAddon.text : "-",
            additional: additionalAddons || "-"
        };
    };

    const filteredOperators = operators.filter((operator: any) =>
        operator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(event.target.value);

    const handleChangePage = (event: unknown, newPage: number) =>
        setPage(newPage);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className="operator-table__title">Оператори</div>
            <TableContainer component={Paper}>
                <div className="operator-table__search">
                    <TextField
                        label="Пошук"
                        placeholder="Ім’я користувача..."
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleSearchChange}
                        value={searchTerm}
                        className="operator-table__search-input"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                </div>
                <Table>
                    <TableHeader />
                    <TableBody>
                        {filteredOperators.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    <Typography variant="h6" className="operator-table__empty-message">Упс... Нічого не знайдено</Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredOperators
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((operator: any, index: number) => (
                                    <OperatorTableRow
                                        key={operator.id}
                                        operator={operator}
                                        index={index}
                                        addons={mergeAddons(operator.id)}
                                    />
                                ))
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={filteredOperators.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className="operator-table__pagination"
                />
            </TableContainer>
        </>
    );
};

export default OperatorTable;
