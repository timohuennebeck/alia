import "./UserProfile.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";

import clockImg from "../../assets/icons/clock.svg";
import mailImg from "../../assets/icons/mail.svg";
import moreImg from "../../assets/icons/more-v.svg";

export default function UserProfile() {
    return (
        <div className="user">
            <img className="user__profile" src={profileImg} alt="" />
            <div className="user__info">
                <div className="user__info-ctn">
                    <div className="user__info-ctn-name">
                        <img className="user__info-ctn-name-img" src={profileImg} alt="" />
                        <div className="user__info-ctn-name-indv">
                            <h5 className="user__info-ctn-name-indv-header">Melanie Perkins</h5>
                            <p className="user__info-ctn-name-indv-username">@melanieperkins</p>
                        </div>
                    </div>
                    <img className="user__info-ctn-img" src={moreImg} alt="" />
                </div>
                <p className="user__info-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                </p>
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
