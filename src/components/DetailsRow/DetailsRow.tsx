import "./DetailsRow.scss";
import React = require("react");

import moreImg from "../../assets/icons/more-v.svg";
import infoImg from "../../assets/icons/info-circle.svg";
import favoriteImg from "../../assets/icons/heart.svg";

interface DetailsRowProps {
    data: {
        name: string;
    };
}

export default function DetailsRow({ data }: DetailsRowProps) {
    return (
        <>
            <div className="details">
                <h5 className="details__header">{data.name}</h5>
                <div className="details__info">
                    <img className="details__info-img" src={infoImg} alt="" />
                    <p className="details__info-date">Jul 28, 2022</p>
                </div>
                <p className="details__date">10:00 - 11:30 PM</p>
                <img className="details__img" src={favoriteImg} alt="" />
                <img className="details__more" src={moreImg} alt="" />
            </div>
        </>
    );
}
