import "./TrendingPage.scss";

// icons
import micImg from "../../assets/icons/microphone.svg";
import bellImg from "../../assets/icons/bell-slash.svg";
import moreImg from "../../assets/icons/more-h.svg";

// components
import NewComment from "../../components/NewComment/NewComment";

export default function TrendingPage() {
    return (
        <div className="trending">
            <div className="trending__channel">
                <div className="trending__channel-ctn">
                    <div className="trending__channel-ctn-emblem"></div>
                    <div className="trending__channel-ctn-content">
                        <h4 className="trending__channel-ctn-content-header">
                            You are exploring "Trending"!
                        </h4>
                        <p className="trending__channel-ctn-content-text">
                            2 Participants In a Huddle...
                        </p>
                    </div>
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
            <NewComment />
            <NewComment />
            <NewComment />
        </div>
    );
}
