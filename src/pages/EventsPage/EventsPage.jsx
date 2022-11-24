import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./EventsPage.scss";

// images
import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import hideImg from "../../assets/icons/eye-slash.svg";

// components
import DetailsRow from "../../components/DetailsRow/DetailsRow";

// api calls
import { getEvents } from "../../utils/api";
import { useEffect, useState } from "react";
import DropdownDark from "../../components/DropdownDark/DropdownDark";

export default function EventsPage({ closeModal }) {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getEvents().then(({ data }) => {
            setEventsData(data);
        });
    }, []);

    return (
        <div className="events">
            <div className="events__buttons">
                <div className="events__buttons-hide">
                    <ButtonElementDark name="Hide" img={hideImg} onClick={closeModal} />
                </div>
                <DropdownDark />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="events__information">
                {eventsData.map((item) => {
                    return <DetailsRow data={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}
