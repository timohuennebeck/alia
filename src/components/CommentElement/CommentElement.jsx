import "./CommentElement.scss";

import profileImg from "../../assets/images/melanie-perkins.jpg";
import ButtonElement from "../ButtonElement/ButtonElement";

import watchImg from "../../assets/icons/eye.svg";
import commentsImg from "../../assets/icons/chat.svg";
import moreImg from "../../assets/icons/more-v.svg";
import ShowCommentsModal from "../ShowCommentsModal/ShowCommentsModal";

// libraries
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactModal from "react-modal";

export default function CommentElement({ postsData }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="comment">
                <Link to={`/friends-profile/${postsData.id}`}>
                    <img className="comment__profile" src={profileImg} alt="" />
                </Link>
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
                        <p className="comment__info-content-paragraph">{postsData.message}</p>
                        <p className="comment__info-content-amount" onClick={openModal}>
                            7 Comments
                        </p>
                    </div>
                    <div className="comment__info-date">
                        <p className="comment__info-date-time">
                            {new Date(postsData.created_at).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                        <p className="comment__info-date-date">
                            {new Date(postsData.created_at).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="comment__info-share">
                        <div className="comment__info-share-buttons">
                            <ButtonElement img={watchImg} name="Watch" />
                            <ButtonElement img={commentsImg} name="Comment" onClick={openModal} />
                        </div>
                        <p className="comment__info-share-amount" onClick={openModal}>
                            7 Comments
                        </p>
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="comment__card-modal"
                overlayClassName="comment__card-modal-background"
            >
                <ShowCommentsModal closeModal={closeModal} postsData={postsData} />
            </ReactModal>
        </>
    );
}
