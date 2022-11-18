import "./HubsElement.scss";

import moreImg from "../../assets/icons/more-v.svg";

export default function HubsElement() {
    return (
        <div className="hubs-element">
            <div className="hubs-element__ctn">
                <div className="hubs-element__ctn-img"></div>
                <p className="hubs-element__ctn-name">News</p>
            </div>
            <img className="hubs-element__img" src={moreImg} alt="" />
        </div>
    );
}
