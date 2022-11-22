import "./CommentElement.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";

import watchImg from "../../assets/icons/eye.svg";
import commentsImg from "../../assets/icons/chat.svg";
import moreImg from "../../assets/icons/more-v.svg";

import { Link } from "react-router-dom";

export default function CommentElement({ data }) {
    return (
        <>
            <div className="comment">
                <img className="comment__profile" src={profileImg} alt="" />
                <div className="comment__info">
                    <div className="comment__info-ctn">
                        <div className="comment__info-ctn-name">
                            <img className="comment__info-ctn-name-img" src={profileImg} alt="" />
                            <div className="comment__info-ctn-name-indv">
                                <h5 className="comment__info-ctn-name-indv-header">
                                    Melanie Perkins
                                </h5>
                                <p className="comment__info-ctn-name-indv-username">
                                    @melanieperkins
                                </p>
                            </div>
                        </div>
                        <img className="comment__info-ctn-img" src={moreImg} alt="" />
                    </div>
                    <div className="comment__info-content">
                        <p className="comment__info-content-paragraph">{data.message}</p>
                        <p className="comment__info-content-amount">7 Comments</p>
                    </div>
                    <div className="comment__info-share">
                        <div className="comment__info-share-buttons">
                            <ButtonElement img={watchImg} name="Watch" />
                            <Link to={`comments/${data.id}`}>
                                <ButtonElement img={commentsImg} name="Comment" />
                            </Link>
                        </div>
                        <p className="comment__info-share-amount">7 Comments</p>
                    </div>
                </div>
            </div>
        </>
    );
}
