import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Table,
    TableContainer,
    Paper,
    TablePagination,
    SelectChangeEvent
} from "@mui/material";
import TableHeader from "../TableHeader/TableHeader";
import SearchInput from "../SearchInput/SearchInput";
import OperatorSort from "../OperatorSort/OperatorSort";
import OperatorFilter from "../OperatorFilter/OperatorFilter";
import OperatorTableBody from "../OperatorTableBody/OperatorTableBody";
import { getOperators } from "../../api/operatorApi";
import { mergeAddons } from "../../utils/addonUtils";
import { filterOperators } from '../../utils/filterUtils';
import { sortOperators } from '../../utils/sortUtils';
import { applyFilter } from '../../utils/filterHelpers';
import "./OperatorTable.scss";

const OperatorTable: React.FC = () => {
    const dispatch = useDispatch();
    const { operators, operatorAddons, loading } = useSelector((state: any) => state.operators);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortType, setSortType] = useState("Не вибрано");
    const [filterType, setFilterType] = useState("Всі");

    useEffect(() => {
        getOperators(dispatch);
    }, [dispatch]);

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortType(event.target.value as string);
    };

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        setFilterType(event.target.value as string);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(event.target.value);

    let addonFields = Array.from(new Set(operatorAddons.map((addon: any) => addon.fieldName))) as string[];

    addonFields = addonFields.filter(fieldName =>
        operatorAddons.some((addon: { fieldName: string; text: string }) =>
            addon.fieldName === fieldName && addon.text && addon.text.trim() !== ""
        )
    );

    const filteredOperators = filterOperators(operators, searchTerm, filterType, (operator: any) => applyFilter(operator, filterType));
    const sortedOperators = sortOperators(filteredOperators, sortType);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className="operator-table__title">Оператори</div>
            <TableContainer component={Paper}>
                <div className="operator-control-container">
                    <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                    <OperatorSort sortType={sortType} onSortChange={handleSortChange} />
                    <OperatorFilter filterType={filterType} onFilterChange={handleFilterChange} />
                </div>
                <Table>
                    <TableHeader addonFields={addonFields} />
                    <OperatorTableBody
                        sortedOperators={sortedOperators}
                        addonFields={addonFields}
                        operatorAddons={operatorAddons}
                        mergeAddons={mergeAddons}
                        rowsPerPage={rowsPerPage}
                        page={page}
                    />
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={sortedOperators.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
                    className="operator-table__pagination"
                />
            </TableContainer>
        </>
    );
};

export default OperatorTable;
