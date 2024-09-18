export const filterOperators = (
    operators: any[],
    searchTerm: string,
    filterType: string,
    applyFilter: (operator: any) => boolean,
) => {
    return operators.filter(
        (operator: any) =>
            operator.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            applyFilter(operator),
    );
};
