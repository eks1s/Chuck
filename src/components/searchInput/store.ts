import { create } from "zustand";

interface IUseSearchInput {
    searchInputText: string;
    setSearchInputText: (value: string) => void;
}

export const useSearchInput = create<IUseSearchInput>((set) => ({
    searchInputText: "",
    setSearchInputText: (searchInputText) => set({ searchInputText }),
}));
