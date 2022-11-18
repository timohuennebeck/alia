import "./InformationExplorerLine.scss";

import moreImg from "../../assets/icons/more-v.svg";
import infoImg from "../../assets/icons/info-circle.svg";
import profileImg from "../../assets/images/melanie-perkins.jpg";

export default function InformationExplorerLine() {
    return (
        <div className="information-explorer">
            <h5 className="information-explorer__header">#1 File Name</h5>
            <div className="information-explorer__person">
                <img className="information-explorer__person-img" src={profileImg} alt="" />
                <p className="information-explorer__person-name">Melanie Perkins</p>
            </div>
            <div className="information-explorer__info">
                <img className="information-explorer__info-img" src={infoImg} alt="" />
                <p className="information-explorer__info-date">Jul 28, 2022</p>
            </div>
            <p className="information-explorer__date">10:00 - 11:30 PM</p>
            <img className="information-explorer__more" src={moreImg} alt="" />
        </div>
    );
}
