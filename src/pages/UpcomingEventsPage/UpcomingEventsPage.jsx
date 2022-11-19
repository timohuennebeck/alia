import "./UpcomingEventsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import EventsElement from "../../components/EventsElement/EventsElement";

import { Link } from "react-router-dom";

export default function UpcomingEventsPage() {
    return (
        <div className="upcoming-events">
            <div className="upcoming-events__settings">
                <h3 className="upcoming-events__settings-header">Upcoming Events</h3>
                <img className="upcoming-events__settings-img" src={cogImg} alt="" />
            </div>
            <p className="upcoming-events__date">TODAY</p>
            <div className="upcoming-events__list">
                <EventsElement />
                <EventsElement />
                <EventsElement />
            </div>
            <Link className="upcoming-events__more">Show More</Link>
        </div>
    );
}
