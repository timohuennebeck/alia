import "./AddNewComment.scss";

import InputField from "../InputField/InputField";
import profileImg from "../../assets/images/melanie-perkins.jpg";
import postImg from "../../assets/icons/chat.svg";

export default function AddNewComment() {
    return (
        <div className="add-comment">
            <div className="add-comment__indv">
                <img className="add-comment__indv-img" src={profileImg} alt="" />
            </div>
            <InputField placeholder="Respond here..." />
            <div className="add-comment__button">
                <img className="add-comment__button-img" src={postImg} alt="" />
                <p className="add-comment__button-text">Publish</p>
            </div>
        </div>
    );
}
