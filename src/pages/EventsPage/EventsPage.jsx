import "./EventsPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg"
import EventsElement from "../../components/EventsElement/EventsElement"

export default function EventsPage() {
    return (
        <div className="events">
            <div className="events__settings">
                <h3 className="events__settings-header">Upcoming Events</h3>
                <img className="events__settings-img" src={cogImg} alt="" />
            </div>
            <p className="events__date">TODAY</p>
            <div className="events__list">
                <EventsElement />
                <EventsElement />
                <EventsElement />
            </div>
        </div>
    );
}
