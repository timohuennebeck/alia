import "./NewComment.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";

import watchImg from "../../assets/icons/eye.svg";
import commentsImg from "../../assets/icons/chat.svg";
import moreImg from "../../assets/icons/more-v.svg";

export default function NewComment() {
    return (
        <div className="comment">
            <img className="comment__profile" src={profileImg} alt="" />
            <div className="comment__info">
                <div className="comment__info-ctn">
                    <div className="comment__info-ctn-name">
                        <h5 className="comment__info-ctn-name-header">Melanie Perkins</h5>
                        <p className="comment__info-ctn-name-username">@melanieperkins</p>
                    </div>
                    <img className="comment__info-ctn-img" src={moreImg} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                </p>
                <div className="comment__info-share">
                    <div className="comment__info-share-buttons">
                        <ButtonElement img={watchImg} name="Watch" />
                        <ButtonElement img={commentsImg} name="Comment" />
                    </div>
                    <p className="comment__info-share-amount">7 Comments</p>
                </div>
            </div>
        </div>
    );
}