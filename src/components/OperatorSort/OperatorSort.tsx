import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';

interface OperatorSortProps {
    sortType: string;
    onSortChange: (event: SelectChangeEvent<string>) => void;
}

const OperatorSort: React.FC<OperatorSortProps> = ({
    sortType,
    onSortChange,
}) => {
    return (
        <FormControl variant="outlined">
            <InputLabel id="sort-select-label">Сортування</InputLabel>

            <Select
                labelId="sort-select-label"
                value={sortType}
                onChange={onSortChange}
                label="Сортування"
            >
                <MenuItem value="Не вибрано">Не вибрано</MenuItem>
                <MenuItem value="name-asc">Користувач A-Я</MenuItem>
                <MenuItem value="name-desc">Користувач Я-A</MenuItem>
                <MenuItem value="isWorking">Працює</MenuItem>
                <MenuItem value="notWorking">Не працює</MenuItem>
                <MenuItem value="date-desc">Новіші</MenuItem>
                <MenuItem value="date-asc">Старіші</MenuItem>
            </Select>
        </FormControl>
    );
};

export default OperatorSort;
