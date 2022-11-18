import "./InformationLine.scss";

import moreImg from "../../assets/icons/more-v.svg";
import infoImg from "../../assets/icons/info-circle.svg";
import profileImg from "../../assets/images/melanie-perkins.jpg";

export default function InformationLine() {
    return (
        <div className="information">
            <h5 className="information__header">#1 File Name</h5>
            <div className="information__person">
                <img className="information__person-img" src={profileImg} alt="" />
                <p className="information__person-name">Melanie Perkins</p>
            </div>
            <div className="information__info">
                <img className="information__info-img" src={infoImg} alt="" />
                <p className="information__info-date">Jul 28, 2022</p>
            </div>
            <p className="information__date">10:00 - 11:30 PM</p>
            <img className="information__more" src={moreImg} alt="" />
        </div>
    );
}
