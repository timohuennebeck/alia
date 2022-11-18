import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./MeetingsPage.scss";

import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

export default function MeetingsPage() {
    return (
        <div className="meetings">
            <div className="meetings__buttons">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="meetings__information">
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
                <DetailsRow />
            </div>
        </div>
    );
}
