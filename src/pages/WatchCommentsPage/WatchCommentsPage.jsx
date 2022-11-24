import "./WatchCommentsPage.scss";

import PostElement from "../../components/PostElement/PostElement";
import ButtonElementDark from "../../components/ButtonElementDark/ButtonElementDark";
import userImg from "../../assets/icons/user.svg";
import calendarImg from "../../assets/icons/calendar-month.svg";
import { useEffect, useRef, useState } from "react";
import { getPosts } from "../../utils/api";
import DropdownDark from "../../components/DropdownDark/DropdownDark";

export default function WatchCommentsPage() {
    const [postsData, setPostsData] = useState([]);
    const [filteredPostsData, setFilteredPostsData] = useState([]);
    const [pullValue, setPullValue] = useState([]);

    const userValues = useRef();

    useEffect(() => {
        getPosts().then(({ data }) => {
            setPostsData(data.filter((favorite) => favorite.status === "Favorite"));
        });
    }, []);

    useEffect(() => {
        setFilteredPostsData(
            postsData.filter(
                (favorite) =>
                    favorite.status === "Favorite" && favorite.users_id === Number(pullValue)
            )
        );
    }, [pullValue]);

    const handleChange = (e) => {
        setPullValue(e.target.value);
    };

    return (
        <form className="comments" ref={userValues}>
            <div className="comments__nav">
                <DropdownDark onChange={handleChange} />
                <ButtonElementDark img={calendarImg} name="Date" />
            </div>
            <div className="comments__saved">
                {filteredPostsData.map((item) => {
                    return <PostElement postsData={item} key={item.id} />;
                })}
            </div>
        </form>
    );
}
