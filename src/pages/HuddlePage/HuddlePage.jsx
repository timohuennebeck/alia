import "./HuddlePage.scss";

import ButtonElement from "../../components/ButtonElement/ButtonElement";
import hideImg from "../../assets/icons/eye-slash.svg";
import messagesImg from "../../assets/icons/chat.svg";
import HuddleUserVideo from "../../components/HuddleUserVideo/HuddleUserVideo";
import expandImg from "../../assets/icons/collapse.svg";
import micImg from "../../assets/icons/microphone-mute.svg";
import shareImg from "../../assets/icons/cast.svg";
import settingsImg from "../../assets/icons/cog.svg";
import phoneImg from "../../assets/icons/phone.svg";
import LiveChatPage from "../LiveChatPage/LiveChatPage";

export default function HuddlePage() {
    return (
        <div className="huddle">
            <div className="huddle__left">
                <div className="huddle__left-hide">
                    <ButtonElement img={hideImg} name="Hide" />
                    <h3>Introduction to Next.js...</h3>
                </div>

                <div className="huddle__left-interface">
                    <div className="huddle__left-interface-top">
                        <div className="huddle__left-interface-top-chat">
                            <div className="huddle__left-interface-top-chat-time">
                                <p className="huddle__left-interface-top-chat-time-indv">3:15</p>
                            </div>
                            <div className="huddle__left-interface-top-chat-img">
                                <img
                                    className="huddle__left-interface-top-chat-img-indv"
                                    src={messagesImg}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="huddle__left-interface-top-users">
                            <HuddleUserVideo />
                            <HuddleUserVideo />
                            <HuddleUserVideo />
                        </div>
                    </div>
                    <div className="huddle__left-interface-nav">
                        <div className="huddle__left-interface-nav-indv">
                            <img
                                className="huddle__left-interface-nav-indv-img"
                                src={expandImg}
                                alt=""
                            />
                        </div>
                        <div className="huddle__left-interface-nav-indv">
                            <img className="huddle__left-interface-nav-indv-img" src={micImg} alt="" />
                        </div>
                        <div className="huddle__left-interface-nav-end">
                            <img className="huddle__left-interface-nav-end-img" src={phoneImg} alt="" />
                        </div>
                        <div className="huddle__left-interface-nav-indv">
                            <img className="huddle__left-interface-nav-indv-img" src={shareImg} alt="" />
                        </div>
                        <div className="huddle__left-interface-nav-indv">
                            <img
                                className="huddle__left-interface-nav-indv-img"
                                src={settingsImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="huddle__left-transcribe">
                    <p className="huddle__left-transcribe-header">New</p>
                    <p>Thanks for sending all those completed...</p>
                </div>
            </div>
            <div className="huddle__right">
                <LiveChatPage />
            </div>
        </div>
    );
}
