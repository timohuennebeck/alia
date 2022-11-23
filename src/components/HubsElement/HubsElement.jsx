import "./HubsElement.scss";

// components
import moreImg from "../../assets/icons/more-v.svg";

// libraries
import { Link } from "react-router-dom";

export default function HubsElement({ hubsData }) {
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
