import "./EventsElement.scss";
import React from "react";

interface EventsElementProps {
    data: {
        name: string;
        time_at: string;
    };
}

export default function EventsElement({ data }: EventsElementProps) {
    return (
        <div className="events-element">
            <p className="events-element__hashtag">{data.name}</p>
            <p className="events-element__amount">{data.time_at}</p>
        </div>
    );
}
