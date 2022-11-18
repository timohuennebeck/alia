import "./HubsExplorerLine.scss";

import moreImg from "../../assets/icons/more-v.svg";
import infoImg from "../../assets/icons/info-circle.svg";
import profileImg from "../../assets/images/melanie-perkins.jpg";

export default function HubsExplorerLine() {
    return (
        <div className="hubs-explorer">
            <h5 className="hubs-explorer__header">#1 File Name</h5>
            <div className="hubs-explorer__person">
                <img className="hubs-explorer__person-img" src={profileImg} alt="" />
                <p className="hubs-explorer__person-name">Melanie Perkins</p>
            </div>
            <div className="hubs-explorer__info">
                <img className="hubs-explorer__info-img" src={infoImg} alt="" />
                <p className="hubs-explorer__info-date">Jul 28, 2022</p>
            </div>
            <p className="hubs-explorer__date">10:00 - 11:30 PM</p>
            <img className="hubs-explorer__more" src={moreImg} alt="" />
        </div>
    );
}
