import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./EventsPage.scss";

import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

// api calls
import { getEvents } from "../../utils/api";
import { useEffect, useState } from "react";

export default function EventsPage() {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getEvents().then(({ data }) => {
            setEventsData(data);
        });
    }, []);

    return (
        <div className="events">
            <div className="events__buttons">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="events__information">
                {eventsData.map((item) => {
                    return <DetailsRow data={item} key={item.id}/>;
                })}
            </div>
        </div>
    );
}
