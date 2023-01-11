import "./MeetingsElement.scss";
import React from "react";

interface MeetingsElementProps {
    data: {
        name: string;
        time_at: string;
    };
}

export default function MeetingsElement({ data }: MeetingsElementProps) {
    return (
        <div className="meetings-element">
            <p className="meetings-element__hashtag">{data.name}</p>
            <p className="meetings-element__amount">{data.time_at}</p>
        </div>
    );
}
