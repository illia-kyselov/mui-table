export const mergeAddons = (operatorAddons: any, operatorId: string) => {
    const operatorSpecificAddons = operatorAddons.filter(
        (addon: any) => addon.id === operatorId
    );

    const mergedAddons = operatorSpecificAddons.reduce(
        (acc: any, addon: any) => {
            acc[addon.fieldName] = addon.text;
            return acc;
        },
        {}
    );

    return mergedAddons;
};
