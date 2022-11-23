import "./TrendingForYouPage.scss";

// images
import cogImg from "../../assets/icons/cog.svg";
import MeetingsElement from "../../components/MeetingsElement/MeetingsElement";

// libraries
import { Link } from "react-router-dom";

export default function TrendingForYouPage() {
    return (
        <div className="trending-sidebar">
            <div className="trending-sidebar__settings">
                <h3 className="trending-sidebar__settings-header">Trending For You</h3>
                <img className="trending-sidebar__settings-img" src={cogImg} alt="" />
            </div>
            <p className="trending-sidebar__date">TRENDING IN MARKETING</p>
            <div className="trending-sidebar__list"></div>
            <div className="trending-sidebar__line"></div>
            <p className="trending-sidebar__date">TRENDING IN MARKETING</p>
            <div className="trending-sidebar__list"></div>
            <Link to="/trending" className="trending-sidebar__more">
                Show More
            </Link>
        </div>
    );
}
