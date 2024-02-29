import { FC } from "react";
import { dataConvertor } from "../../../../utils/dataConvertor";
import { ECards } from "../../types";
import classNames from "classnames";

import "./card.scss";

export interface ICardProps {
    url: string;
    data: string;
    value: string;
    id: string;
    size?: ECards;
}

export const Card: FC<ICardProps> = ({ data, value, id, size, url }) => {
    return (
        <a href={url} rel="noreferrer" target="_blank" className="card-link">
            <div
                className={classNames("card", { bigCard: size === ECards.BIG })}
            >
                <p className="card-title">{value}</p>
                <div className="card-bottom">
                    <p className="card-id">{id}</p>
                    <p className="card-date">{dataConvertor(data)}</p>
                </div>
            </div>
        </a>
    );
};
