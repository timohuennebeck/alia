import "./UpcomingMeetingsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import MeetingsElement from "../../components/MeetingsElement/MeetingsElement";

export default function UpcomingMeetingsPage() {
    return (
        <div className="upcoming-meetings">
            <div className="upcoming-meetings__settings">
                <h3 className="upcoming-meetings__settings-header">Upcoming Meetings</h3>
                <img className="upcoming-meetings__settings-img" src={cogImg} alt="" />
            </div>
            <p className="upcoming-meetings__date">TODAY</p>
            <div className="upcoming-meetings__list">
                <MeetingsElement />
            </div>
        </div>
    );
}