import "./PostElement.scss";

import ButtonElement from "../ButtonElement/ButtonElement";

import watchImg from "../../assets/icons/eye.svg";
import commentsImg from "../../assets/icons/chat.svg";
import moreImg from "../../assets/icons/more-v.svg";
import ShowCommentsModal from "../ShowCommentsModal/ShowCommentsModal";

// libraries
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";

// api calls
import { getComments, getUsers } from "../../utils/api";

export default function PostElement({ postsData }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [usersData, setUsersData] = useState([]);
    const [commentsAmount, setCommentsAmount] = useState([]);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsersData(data.filter((user) => user.id === postsData.users_id)[0]);
        });
        getComments().then(({ data }) => {
            setCommentsAmount(data.filter((comment) => comment.posts_id === postsData.id));
        });
    }, []);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    if (!usersData || !commentsAmount) {
        return <p>Loading Database...</p>;
    }

    if (commentsAmount === 0) {
        console.log("Hello");
    }

    return (
        <>
            <div className="post">
                <Link to={`/friends-profile/${postsData.users_id}`}>
                    <img className="post__profile" src={usersData.image_url} alt="" />
                </Link>
                <div className="post__info">
                    <div className="post__info-ctn">
                        <div className="post__info-ctn-name">
                            <img
                                className="post__info-ctn-name-img"
                                src={usersData.image_url}
                                alt=""
                            />
                            <div className="post__info-ctn-name-indv">
                                <h5 className="post__info-ctn-name-indv-header">
                                    {usersData.first_name} {usersData.last_name}
                                </h5>
                                <p className="post__info-ctn-name-indv-username">
                                    {usersData.username}
                                </p>
                            </div>
                        </div>
                        <img className="post__info-ctn-img" src={moreImg} alt="" />
                    </div>
                    <div className="post__info-content">
                        <p className="post__info-content-paragraph">{postsData.message}</p>
                        <p className="post__info-content-amount" onClick={openModal}>
                            {commentsAmount.length} Comments
                        </p>
                    </div>
                    <div className="post__info-date">
                        <p className="post__info-date-time">
                            {new Date(postsData.created_at).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                        <p className="post__info-date-date">
                            {new Date(postsData.created_at).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="post__info-share">
                        <div className="post__info-share-buttons">
                            <ButtonElement img={watchImg} name="Watch" />
                            <ButtonElement img={commentsImg} name="Comment" onClick={openModal} />
                        </div>
                        <p className="post__info-share-amount" onClick={openModal}>
                            {commentsAmount.length} Comments
                        </p>
                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="post__card-modal"
                overlayClassName="post__card-modal-background"
            >
                <ShowCommentsModal closeModal={closeModal} postsData={postsData} />
            </ReactModal>
        </>
    );
}
