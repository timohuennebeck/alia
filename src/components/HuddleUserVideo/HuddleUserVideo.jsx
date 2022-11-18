import "./HuddleUserVideo.scss";

import micImg from "../../assets/icons/microphone-mute.svg"

export default function HuddleUserVideo() {
    return (
    <div className="huddle-user">
        <img className="huddle-user__img" src={micImg} alt="" />
    </div>
    )
}
