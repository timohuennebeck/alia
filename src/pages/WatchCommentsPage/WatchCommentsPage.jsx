import "./WatchCommentsPage.scss";

import CommentElement from "../../components/CommentElement/CommentElement";
import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";

export default function WatchCommentsPage() {
    return (
        <div className="comments">
            <div className="comments__nav">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="comments__saved">
                <CommentElement />
                <CommentElement />
            </div>
        </div>
    );
}
