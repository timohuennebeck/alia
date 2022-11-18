import "./LiveChatPage.scss";

import messagesImg from "../../assets/icons/chat.svg";
import usersImg from "../../assets/icons/users.svg";
import arrowImg from "../../assets/icons/chevron-double-left.svg";
import InputField from "../../components/InputField/InputField";

export default function LiveChatPage() {
    return (
        <div className="chat">
            <div className="chat__buttons">
                <div className="chat__buttons-arrow">
                    <img className="chat__buttons-arrow-img" src={arrowImg} alt="" />
                    <p>Back</p>
                </div>
                <div className="chat__buttons-messages">
                    <img className="chat__buttons-messages-img" src={messagesImg} alt="" />
                </div>
                <div className="chat__buttons-users">
                    <img className="chat__buttons-users-img" src={usersImg} alt="" />
                </div>
            </div>
            <div className="chat__respond">
                <p className="chat__respond-writing">Melanie is writing...</p>
                <div className="chat__respond-ctn">
                    <InputField placeholder="Write a message here..." />
                    <div className="chat__respond-ctn-indv">
                        <img className="chat__respond-ctn-indv-img" src={messagesImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
