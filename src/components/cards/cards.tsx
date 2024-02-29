import { useCards } from "./store";
import { useSearchInput } from "../searchInput/store";
import { useEffect, useMemo } from "react";
import { Card } from "./components/card/card";
import { ECards, ICard } from "./types";

import "./cards.scss";

export const Cards = () => {
    const cards = useCards((state) => state.cards);
    const searchCardsRequest = useCards((state) => state.searchCardsRequest);
    const searchInputText = useSearchInput((state) => state.searchInputText);

    useEffect(() => {
        if (searchInputText.length >= 3) searchCardsRequest(searchInputText);
    }, [searchCardsRequest, searchInputText]);

    // Лучше конечно не использовать useMemo
    // Так-как дорогостоящая операция, тут чисто для примера
    const appCards = useMemo(() => cards?.slice(0, 2), [cards]);
    const bottomCards = useMemo(() => cards?.slice(2), [cards]);

    const content = (cards: Array<ICard> | undefined, size: ECards) => {
        return Boolean(cards?.length)
            ? cards?.map(({ value, id, url, created_at }) => {
                  return (
                      <Card
                          url={url}
                          size={size}
                          value={value}
                          data={created_at}
                          id={id}
                      />
                  );
              })
            : null;
    };

    return (
        <div className="cards">
            <div className="top-cards">{content(appCards, ECards.BIG)}</div>
            <div className="bottom-cards">
                {content(bottomCards, ECards.SMALL)}
            </div>
        </div>
    );
};
