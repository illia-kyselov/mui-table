import React from "react";
import { TextField } from "@mui/material";

interface SearchInputProps {
    searchTerm: string;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, handleSearchChange }) => {
    return (
        <TextField
            label="Пошук"
            placeholder="Ім’я користувача..."
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleSearchChange}
            value={searchTerm}
        />
    );
};

export default SearchInput;
