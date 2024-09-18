export const sortOperators = (operators: any[], sortType: string) => {
    return operators.sort((a: any, b: any) => {
        switch (sortType) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'isWorking':
                return a.isWorking === b.isWorking ? 0 : a.isWorking ? -1 : 1;
            case 'notWorking':
                return a.isWorking === b.isWorking ? 0 : a.isWorking ? 1 : -1;
            case 'date-asc':
                return (
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                );
            case 'date-desc':
                return (
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                );
            default:
                return 0;
        }
    });
};
