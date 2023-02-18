import React, { ReactNode } from "react";

import "./InfoCardsList.css";

interface InfoCardsListProps {
    cards: Array<ReactNode>;
}

const InfoCardsList: React.FC<InfoCardsListProps> = (props) => {
    const { cards } = props;


    return (
        <div className="cards-list"> 
            {cards}
        </ div>
    );
}

export default InfoCardsList;