export enum ECards {
    SMALL,
    BIG,
}

export interface ICard {
    categories: Array<any>;
    created_at: string;
    updated_at: string;
    icon_url: string;
    url: string;
    id: string;
    value: string;
}
