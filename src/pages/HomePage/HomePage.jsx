import "./HomePage.scss";

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
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import InputField from "../../components/InputField/InputField";
import NewComment from "../../components/NewComment/NewComment";
import FriendsList from "../../components/FriendsList/FriendsList";
import HubsList from "../../components/HubsList/HubsList";
import MeetingsList from "../../components/MeetingsList/MeetingsList";
import EventsList from "../../components/EventsList/EventsList"

export default function HomePage() {
    return (
        <div className="home">
            <MobileHeader />
            <div className="home__explore">
                <input className="home__explore-input" placeholder="# Explore" />
            </div>
            <div className="home__channel">
                <div className="home__channel-content">
                    <h4 className="home__channel-content-header">You are exploring "News"!</h4>
                    <p className="home__channel-content-text">2 Participants In a Huddle...</p>
                </div>
                <div className="home__channel-images">
                    <div className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={micImg} alt="" />
                    </div>
                    <div className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={bellImg} alt="" />
                    </div>
                    <div className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={moreImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="home__share">
                <img className="home__share-img" src={profileImg} alt="" />
                <div className="home__share-ctn">
                    <InputField placeholder="What's happening?" />
                    <div className="home__share-ctn-images">
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={paperImg}
                                alt=""
                            />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={imagesImg}
                                alt=""
                            />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={liveImg}
                                alt=""
                            />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={clockImg}
                                alt=""
                            />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={usersImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <NewComment />
            <NewComment />
            <NewComment />
            <FriendsList />
            <HubsList />
            <MeetingsList />
            <EventsList />
        </div>
    );
}
