export const dataConvertor = (data: string) => {
    return new Date(data).toLocaleDateString();
};
