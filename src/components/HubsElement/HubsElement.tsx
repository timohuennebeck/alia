import "./HubsElement.scss";
import React from "react";

// components
import moreImg from "../../assets/icons/more-v.svg";

// libraries
import { Link } from "react-router-dom";

interface HubsElementProps {
    hubsData: {
        id: number;
        name: string;
    };
}

export default function HubsElement({ hubsData }: HubsElementProps) {
    return (
        <div className="hubs-element">
            <Link to={`/${hubsData.id}`} className="hubs-element__ctn">
                <div className="hubs-element__ctn-img"></div>
                <p className="hubs-element__ctn-name">{hubsData.name}</p>
            </Link>
            <img className="hubs-element__img" src={moreImg} alt="" />
        </div>
    );
}
