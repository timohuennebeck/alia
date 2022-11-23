import "./WatchCommentsPage.scss";

import CommentElement from "../../components/CommentElement/CommentElement";
import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";

export default function WatchCommentsPage() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getPosts().then(({ data }) => {
            setUsersData(data.filter((favorite) => favorite.status === "Favorite"));
        });
    }, []);

    return (
        <div className="comments">
            <div className="comments__nav">
                <ButtonElementDark img={userImg} name="Person" />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="comments__saved">
                {usersData.map((item) => {
                    return <CommentElement postsData={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}
