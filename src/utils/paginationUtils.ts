export const paginate = (data: any[], page: number, rowsPerPage: number) => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};
