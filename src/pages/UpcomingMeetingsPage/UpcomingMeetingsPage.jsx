import "./UpcomingMeetingsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import MeetingsElement from "../../components/MeetingsElement/MeetingsElement";

// libraries
import { Link } from "react-router-dom";

// api calls
import { getMeetings } from "../../utils/api";
import { useEffect, useState } from "react";

export default function UpcomingMeetingsPage() {
    const [meetingsData, setMeetingsData] = useState([]);

    useEffect(() => {
        getMeetings().then(({ data }) => {
            setMeetingsData(data);
        });
    }, []);

    if (!meetingsData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="upcoming-meetings">
            <div className="upcoming-meetings__settings">
                <h3 className="upcoming-meetings__settings-header">Upcoming Meetings</h3>
                <img className="upcoming-meetings__settings-img" src={cogImg} alt="" />
            </div>
            <p className="upcoming-meetings__date">TODAY</p>
            <div className="upcoming-meetings__list">
                {meetingsData.map((item) => {
                    return <MeetingsElement data={item} key={item.id} />;
                })}
            </div>
            <Link to="/meetings" className="upcoming-meetings__more">
                Explore Meetings
            </Link>
        </div>
    );
}
