import "./ShowCommentsModal.scss";

// components
import CommentElement from "../CommentElement/CommentElement";
import AddNewComment from "../AddNewComment/AddNewComment";
import { useEffect, useState } from "react";
import { getComments } from "../../utils/api";
import ButtonElementDark from "../ButtonElementDark/ButtonElementDark";
import hideImg from "../../assets/icons/eye-slash.svg";

export default function ShowCommentsModal({ postsData, closeModal }) {
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        getComments().then(({ data }) => {
            setCommentsData(data.filter((comments) => comments.posts_id === postsData.id));
        });
    });

    return (
        <div className="show-comments">
            <div className="show-comments__buttons">
                <ButtonElementDark name="Hide" img={hideImg} onClick={closeModal} />
            </div>
            <div className="show-comments__main">
                <div className="show-comments__main-indv">
                    <CommentElement postsData={postsData} />
                    <AddNewComment />
                </div>
                <div className="show-comments__main-indv">
                    {commentsData.map((item) => {
                        return <CommentElement postsData={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}
