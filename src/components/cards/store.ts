import { create } from "zustand";
import { ICard } from "./types";

interface IUseCards {
    cards: Array<ICard> | undefined;
    card: ICard | undefined;
    searchCardsRequest: (searchText: string) => void;
    cardRequest: (id: string) => void;
}

export const useCards = create<IUseCards>((set) => ({
    cards: [],
    card: undefined,
    searchCardsRequest: async (searchText) => {
        try {
            const res = await fetch(
                `https://api.chucknorris.io/jokes/search?query=${searchText}`
            );
            const cards = await res.json();
            set({ cards: cards.result });
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
