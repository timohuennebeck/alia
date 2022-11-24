import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import "./MeetingsPage.scss";

// images
import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import hideImg from "../../assets/icons/eye-slash.svg";

// components
import DetailsRow from "../../components/DetailsRow/DetailsRow";
import DropdownDark from "../../components/DropdownDark/DropdownDark"

// api calls
import { getMeetings } from "../../utils/api";
import { useEffect, useState } from "react";

export default function MeetingsPage({ closeModal }) {
    const [meetingsData, setMeetingsData] = useState([]);

    useEffect(() => {
        getMeetings().then(({ data }) => {
            setMeetingsData(data);
        });
    }, []);

    return (
        <div className="meetings">
            <div className="meetings__buttons">
                <div className="meetings__buttons-hide">
                    <ButtonElementDark name="Hide" img={hideImg} onClick={closeModal} />
                </div>
                <DropdownDark />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="meetings__information">
                {meetingsData.map((item) => {
                    return <DetailsRow data={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}
