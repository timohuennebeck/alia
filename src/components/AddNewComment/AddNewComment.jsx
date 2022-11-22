import "./AddNewComment.scss";

import ButtonElement from "../ButtonElement/ButtonElement";
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
            <ButtonElement img={postImg} name="Publish" />
        </div>
    );
}
