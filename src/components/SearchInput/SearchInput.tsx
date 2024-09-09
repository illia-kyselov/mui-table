import React from 'react';
import { TextField } from '@mui/material';

interface SearchInputProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <TextField
            label="Пошук"
            placeholder="Ім’я користувача..."
            variant="outlined"
            margin="normal"
            onChange={onSearchChange}
            value={searchTerm}
            className="operator-table__search-input"
            slotProps={{
                inputLabel: {
                    shrink: true,
                },
            }}
        />
    );
};

export default SearchInput;
