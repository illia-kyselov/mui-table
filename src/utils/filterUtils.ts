export const filterOperators = (operators: any[], searchTerm: string) => {
    return operators.filter((operator) =>
        operator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const sortOperators = (operators: any[], sortField: string, order: string) => {
    return operators.sort((a, b) => {
        if (order === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });
};
