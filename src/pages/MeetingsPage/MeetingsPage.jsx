import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./MeetingsPage.scss";

import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import DetailsRow from "../../components/DetailsRow/DetailsRow";

// api calls
import { getMeetings } from "../../utils/api";
import { useEffect, useState } from "react";

export default function MeetingsPage() {
    const [meetingsData, setMeetingsData] = useState([]);

    useEffect(() => {
        getMeetings().then(({ data }) => {
            setMeetingsData(data);
        });
    }, []);

    return (
        <div className="meetings">
            <div className="meetings__buttons">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="meetings__information">
                {meetingsData.map((item) => {
                    return <DetailsRow data={item} key={item.id}/>;
                })}
            </div>
        </div>
    );
}
