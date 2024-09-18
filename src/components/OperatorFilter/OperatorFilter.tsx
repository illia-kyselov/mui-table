import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';

interface OperatorFilterProps {
    filterType: string;
    onFilterChange: (event: SelectChangeEvent<string>) => void;
}

const OperatorFilter: React.FC<OperatorFilterProps> = ({
    filterType,
    onFilterChange,
}) => {
    return (
        <FormControl variant="outlined">
            <InputLabel id="filter-select-label">Фільтр</InputLabel>

            <Select
                labelId="filter-select-label"
                value={filterType}
                onChange={onFilterChange}
                label="Фільтр"
            >
                <MenuItem value="Всі">Всі</MenuItem>
                <MenuItem value="isWorking">Працює</MenuItem>
                <MenuItem value="notWorking">Не працює</MenuItem>
                <MenuItem value="today">Сьогоднішні</MenuItem>
                <MenuItem value="yesterday">Вчорашні</MenuItem>
                <MenuItem value="thisMonth">Цього місяця</MenuItem>
                <MenuItem value="lastMonth">Минулого місяця</MenuItem>
            </Select>
        </FormControl>
    );
};

export default OperatorFilter;
