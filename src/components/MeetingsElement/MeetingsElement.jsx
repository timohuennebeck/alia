import "./MeetingsElement.scss";

export default function MeetingsElement({ data }) {
    return (
        <div className="meetings-element">
            <p className="meetings-element__hashtag">{data.name}</p>
            <p className="meetings-element__amount">{data.time_at}</p>
        </div>
    );
}
