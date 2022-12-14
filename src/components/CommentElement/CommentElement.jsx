import "./CommentElement.scss";

import ButtonElement from "../ButtonElement/ButtonElement";

import watchImg from "../../assets/icons/eye.svg";
import commentsImg from "../../assets/icons/chat.svg";
import moreImg from "../../assets/icons/more-v.svg";
import ShowCommentsModal from "../ShowCommentsModal/ShowCommentsModal";
import profileImg from "../../assets/images/portrait.jpg";

// libraries
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";

// api calls
import { getComments, getUsers } from "../../utils/api";

export default function CommentElement({ commentsData }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [usersData, setUsersData] = useState([]);
    const [commentsAmount, setCommentsAmount] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data.filter((user) => user.id === commentsData.users_id)[0]);
        });
        getComments().then(({ data }) => {
            setCommentsAmount(data.filter((comment) => comment.posts_id === commentsData.id));
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (!usersData) {
        return <p>Loading Database...</p>;
    }

    return (
        <>
            <div className="comment">
                <Link to={`/friends-profile/${commentsData.users_id}`}>
                    <img className="comment__profile" src={usersData.image_url} alt="" />
                </Link>
                <div className="comment__info">
                    <div className="comment__info-ctn">
                        <div className="comment__info-ctn-name">
                            <img
                                className="comment__info-ctn-name-img"
                                src={usersData.image_url}
                                alt=""
                            />
                            <div className="comment__info-ctn-name-indv">
                                <h5 className="comment__info-ctn-name-indv-header">
                                    {usersData.first_name} {usersData.last_name}
                                </h5>
                                <p className="comment__info-ctn-name-indv-username">
                                    {usersData.username}
                                </p>
                            </div>
                        </div>
                        <img className="comment__info-ctn-img" src={moreImg} alt="" />
                    </div>
                    <div className="comment__info-content">
                        <p className="comment__info-content-paragraph">{commentsData.message}</p>
                        <p className="comment__info-content-amount" onClick={openModal}>
                            {commentsAmount.length} Comments
                        </p>
                    </div>
                    <div className="comment__info-date">
                        <p className="comment__info-date-time">
                            {new Date(commentsData.created_at).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                        <p className="comment__info-date-date">
                            {new Date(commentsData.created_at).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="comment__info-share">
                        <div className="comment__info-share-buttons">
                            <ButtonElement img={watchImg} name="Watch" />
                            <ButtonElement img={commentsImg} name="Comment" onClick={openModal} />
                        </div>
                        <p className="comment__info-share-amount" onClick={openModal}>
                            {commentsAmount.length} Comments
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
                <ShowCommentsModal closeModal={closeModal} postsData={commentsData} />
            </ReactModal>
        </>
    );
}
