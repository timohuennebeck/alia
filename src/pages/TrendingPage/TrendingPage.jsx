import "./TrendingPage.scss";

// icons
import paperImg from "../../assets/icons/paperclip.svg";
import imagesImg from "../../assets/icons/image-gallery.svg";
import liveImg from "../../assets/icons/cast.svg";
import clockImg from "../../assets/icons/clock.svg";
import usersImg from "../../assets/icons/users.svg";
import micImg from "../../assets/icons/microphone.svg";
import bellImg from "../../assets/icons/bell-slash.svg";
import moreImg from "../../assets/icons/more-h.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

// components
import InputField from "../../components/InputField/InputField";
import NewComment from "../../components/NewComment/NewComment";

export default function TrendingPage() {
    return (
        <div className="trending">
            <div className="trending__channel">
                <div className="trending__channel-content">
                    <h4 className="trending__channel-content-header">
                        You are exploring "Trending"!
                    </h4>
                    <p className="trending__channel-content-text">2 New Trending Posts...</p>
                </div>
                <div className="trending__channel-images">
                    <div className="trending__channel-images-ctn">
                        <img className="trending__channel-images-ctn-indv" src={micImg} alt="" />
                    </div>
                    <div className="trending__channel-images-ctn">
                        <img className="trending__channel-images-ctn-indv" src={bellImg} alt="" />
                    </div>
                    <div className="trending__channel-images-ctn">
                        <img className="trending__channel-images-ctn-indv" src={moreImg} alt="" />
                    </div>
                </div>
            </div>
            <NewComment />
            <NewComment />
            <NewComment />
        </div>
    );
}