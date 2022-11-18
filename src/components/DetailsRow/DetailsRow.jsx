import "./DetailsRow.scss";

import moreImg from "../../assets/icons/more-v.svg";
import infoImg from "../../assets/icons/info-circle.svg";
import profileImg from "../../assets/images/melanie-perkins.jpg";
import favoriteImg from "../../assets/icons/heart.svg";

export default function DetailsRow() {
    return (
        <div className="details">
            <h5 className="details__header">#1 File Name</h5>
            <div className="details__person">
                <img className="details__person-img" src={profileImg} alt="" />
                <p className="details__person-name">Melanie Perkins</p>
            </div>
            <div className="details__info">
                <img className="details__info-img" src={infoImg} alt="" />
                <p className="details__info-date">Jul 28, 2022</p>
            </div>
            <p className="details__date">10:00 - 11:30 PM</p>
            <img className="details__img" src={favoriteImg} alt="" />
            <img className="details__more" src={moreImg} alt="" />
        </div>
    );
}
