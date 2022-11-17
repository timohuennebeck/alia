import "./MeetingsList.scss";

// images
import cogImg from "../../assets/icons/cog.svg"
import MeetingsElement from "../MeetingsElement/MeetingsElement";

export default function MeetingsList() {
    return (
        <div className="meetings">
            <div className="meetings__settings">
                <h3 className="meetings__settings-header">Upcoming Meetings</h3>
                <img className="meetings__settings-img" src={cogImg} alt="" />
            </div>
            <p className="meetings__date">TODAY</p>
            <div className="meetings__list">
                <MeetingsElement />
            </div>
        </div>
    );
}
