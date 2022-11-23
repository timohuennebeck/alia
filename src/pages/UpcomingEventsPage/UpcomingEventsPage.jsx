import "./UpcomingEventsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import EventsElement from "../../components/EventsElement/EventsElement";

// libraries
import { Link } from "react-router-dom";

// api calls
import { getEvents } from "../../utils/api";
import { useEffect, useState } from "react";

export default function UpcomingEventsPage() {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getEvents().then(({ data }) => {
            setEventsData(data);
        });
    }, []);

    return (
        <div className="upcoming-events">
            <div className="upcoming-events__settings">
                <h3 className="upcoming-events__settings-header">Upcoming Events</h3>
                <img className="upcoming-events__settings-img" src={cogImg} alt="" />
            </div>
            <p className="upcoming-events__date">TODAY</p>
            <div className="upcoming-events__list">
                {eventsData.map((item) => {
                    return <EventsElement data={item} />;
                })}
            </div>
            <Link to="/events" className="upcoming-events__more">
                Explore Events
            </Link>
        </div>
    );
}
