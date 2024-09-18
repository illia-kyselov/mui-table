import { Provider } from 'react-redux';
import { store } from './redux/store';
import OperatorTable from './components/OperatorTable/OperatorTable';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import { Box } from '@mui/material';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ padding: '40px 24px' }}>
                    <OperatorTable />
                </Box>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
