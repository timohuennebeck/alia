import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./EventsPage.scss";

import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

export default function EventsPage() {
    return (
        <div className="events">
            <div className="events__buttons">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="events__information">
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
            </div>
        </div>
    );
}
