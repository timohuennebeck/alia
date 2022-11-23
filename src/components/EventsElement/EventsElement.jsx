import "./EventsElement.scss";

export default function EventsElement({ data }) {

    return (
        <div className="events-element">
            <p className="events-element__hashtag">{data.name}</p>
            <p className="events-element__amount">{data.time_at}</p>
        </div>
    );
}
