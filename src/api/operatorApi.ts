const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const baseURL = `https://${API_TOKEN}.mockapi.io/api`;

export const fetchOperatorsApi = async () => {
    const response = await fetch(`${baseURL}/operator`);
    if (!response.ok) throw new Error('Failed to fetch operators');
    return response.json();
};

export const fetchOperatorAddonsApi = async () => {
    const response = await fetch(`${baseURL}/operatorAddon`);
    if (!response.ok) throw new Error('Failed to fetch operator addons');
    return response.json();
};
