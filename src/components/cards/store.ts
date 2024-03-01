import { create } from "zustand";
import { ICard } from "./types";

interface IUseCards {
    cards: Array<ICard> | undefined;
    card: ICard | undefined;
    searchCardsRequest: (searchText: string) => void;
    cardRequest: (id: string) => void;
    loading: boolean;
}

export const useCards = create<IUseCards>((set) => ({
    cards: [],
    card: undefined,
    loading: false,
    searchCardsRequest: async (searchText) => {
        try {
            set({ loading: true });
            const res = await fetch(
                `https://api.chucknorris.io/jokes/search?query=${searchText}`
            );
            const cards = await res.json();
            set({ cards: cards.result });
            set({ loading: false });
        } catch (error) {
            console.error("Error", error);
        }
    },
    cardRequest: async (id) => {
        try {
            const res = await fetch(`https://api.chucknorris.io/jokes/${id}`);
            const card = await res.json();
            set({ card });
        } catch (error) {
            console.error("Error", error);
        }
    },
}));
