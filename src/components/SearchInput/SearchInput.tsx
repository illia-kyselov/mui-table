import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SearchInputProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    margin: 0,
    '& .MuiOutlinedInput-input::placeholder': {
        ...theme.typography.body1,
        opacity: 0.9,
    },
}));

const SearchInput: React.FC<SearchInputProps> = ({
    searchTerm,
    onSearchChange,
}) => {
    return (
        <StyledTextField
            label="Пошук"
            placeholder="Ім’я користувача..."
            variant="outlined"
            onChange={onSearchChange}
            value={searchTerm}
            slotProps={{
                inputLabel: {
                    shrink: true,
                },
            }}
        />
    );
};

export default SearchInput;
