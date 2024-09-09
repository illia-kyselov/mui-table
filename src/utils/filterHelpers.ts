export const applyFilter = (operator: any, filterType: string) => {
    const operatorDate = new Date(operator.createdAt);
    const today = new Date();

    switch (filterType) {
        case "isWorking":
            return operator.isWorking;
        case "notWorking":
            return !operator.isWorking;
        case "today":
            return operatorDate.toDateString() === today.toDateString();
        case "yesterday":
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            return operatorDate.toDateString() === yesterday.toDateString();
        case "thisMonth":
            return operatorDate.getMonth() === today.getMonth() && operatorDate.getFullYear() === today.getFullYear();
        case "lastMonth":
            const lastMonth = new Date(today);
            lastMonth.setMonth(today.getMonth() - 1);
            return operatorDate.getMonth() === lastMonth.getMonth() && operatorDate.getFullYear() === lastMonth.getFullYear();
        default:
            return true;
    }
};
