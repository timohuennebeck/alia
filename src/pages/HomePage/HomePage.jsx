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
import postImg from "../../assets/icons/chat.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

// components
import InputField from "../../components/InputField/InputField";
import NewComment from "../../components/CommentElement/CommentElement";
import AddNewComment from "../../components/AddNewComment/AddNewComment";

export default function HomePage() {
    return (
        <div className="home">
            <div className="home__channel">
                <div className="home__channel-ctn">
                    <div className="home__channel-ctn-emblem"></div>
                    <div className="home__channel-ctn-content">
                        <h4 className="home__channel-ctn-content-header">
                            You are exploring "News"!
                        </h4>
                        <p className="home__channel-ctn-content-text">
                            2 Participants In a Huddle...
                        </p>
                    </div>
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
                    <div className="home__share-ctn-publish">
                        <InputField placeholder="What's happening?" />
                        <div className="home__share-ctn-publish-ctn">
                            <img className="home__share-ctn-publish-ctn-img" src={postImg} alt="" />
                            <p className="home__share-ctn-publish-ctn-text">Publish</p>
                        </div>
                    </div>
                    <div className="home__share-ctn-images">
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={paperImg}
                                alt=""
                            />
                            <p className="home__share-ctn-images-indv-text">Attachments</p>
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={imagesImg}
                                alt=""
                            />
                            <p className="home__share-ctn-images-indv-text">Media</p>
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={liveImg}
                                alt=""
                            />
                            <p className="home__share-ctn-images-indv-text">Live</p>
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={clockImg}
                                alt=""
                            />
                            <p className="home__share-ctn-images-indv-text">Poll</p>
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img
                                className="home__share-ctn-images-indv-icon"
                                src={usersImg}
                                alt=""
                            />
                            <p className="home__share-ctn-images-indv-text">Meeting</p>
                        </div>
                    </div>
                </div>
            </div>
            <AddNewComment />
            <NewComment />
            <NewComment />
            <NewComment />
            <NewComment />
            <NewComment />
            <NewComment />
        </div>
    );
}
