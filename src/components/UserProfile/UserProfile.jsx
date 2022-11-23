import "./UserProfile.scss";

import ButtonElement from "../ButtonElement/ButtonElement";

import clockImg from "../../assets/icons/clock.svg";
import mailImg from "../../assets/icons/mail.svg";
import moreImg from "../../assets/icons/more-v.svg";

export default function UserProfile({ usersData }) {
    return (
        <div className="user">
            <img className="user__profile" src={usersData.image_url} alt="" />
            <div className="user__info">
                <div className="user__info-ctn">
                    <div className="user__info-ctn-name">
                        <img className="user__info-ctn-name-img" src={usersData.image_url} alt="" />
                        <div className="user__info-ctn-name-indv">
                            <h5 className="user__info-ctn-name-indv-header">
                                {usersData.first_name} {usersData.last_name}
                            </h5>
                            <p className="user__info-ctn-name-indv-username">
                                {usersData.username}
                            </p>
                        </div>
                    </div>
                    <img className="user__info-ctn-img" src={moreImg} alt="" />
                </div>
                <p className="user__info-paragraph">{usersData.description}</p>
                <div className="user__info-share">
                    <div className="user__info-share-buttons">
                        <ButtonElement img={clockImg} name="7:33 PM" />
                        <ButtonElement img={mailImg} name="Email" />
                    </div>
                    <p className="user__info-share-amount">7 Comments</p>
                </div>
            </div>
        </div>
    );
}
