import { useEffect, useRef } from "react";
import { useSearchInput } from "./store";
import { useCards } from "../cards/store";

import "./searchInput.scss";

export const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { searchInputText, setSearchInputText } = useSearchInput();
    const cards = useCards((state) => state.cards);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="inputWrapper">
            <input
                ref={inputRef}
                type="text"
                className="input"
                value={searchInputText}
                onChange={(event) => setSearchInputText(event.target.value)}
            />
            <div className="count">Found jokes: {cards?.length}</div>
        </div>
    );
};
