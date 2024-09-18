import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f04259',
        },
        secondary: {
            main: '#668099',
        },
        text: {
            primary: '#292424',
            secondary: '#668099',
        },
        error: {
            main: '#8b0000',
        },
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
        h4: {
            fontSize: '34px',
            fontWeight: 400,
            marginBottom: '40px',
        },
        body1: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: '#292424',
        },
        body2: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#292424',
        },
    },
    components: {
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    lineHeight: '20px',
                },
                selectLabel: {
                    color: '#668099',
                    fontFamily: 'Rubik',
                },
                select: {
                    color: '#292424',
                    fontFamily: 'Rubik',
                },
                displayedRows: {
                    color: '#292424',
                    fontFamily: 'Rubik',
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#14191f8f',
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    opacity: 0.9,
                    color: '#292424',
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '300px',
                },
            },
        },
    },
});

export default theme;
