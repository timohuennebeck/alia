import "./HomePage.scss";

// icons
import paperImg from "../../assets/icons/paperclip.svg";
import imagesImg from "../../assets/icons/image-gallery.svg";
import clockImg from "../../assets/icons/clock.svg";
import usersImg from "../../assets/icons/users.svg";
import micImg from "../../assets/icons/microphone.svg";
import bellImg from "../../assets/icons/bell-slash.svg";
import moreImg from "../../assets/icons/more-h.svg";
import postImg from "../../assets/icons/chat.svg";

// images
import profileImg from "../../assets/images/portrait.jpg";

// components
import InputField from "../../components/InputField/InputField";
import PostElement from "../../components/PostElement/PostElement";

// libraries
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// api calls
import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";

export default function HomePage() {
    const [postsData, setPostsData] = useState();

    const {user} = useAuth0();

    useEffect(() => {
        getPosts().then(({ data }) => {
            setPostsData(data.filter((posts) => posts.hubs_id === 1));
        });
    }, []);

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
                    <Link to="/huddle" className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={micImg} alt="" />
                    </Link>
                    <Link className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={bellImg} alt="" />
                    </Link>
                    <Link className="home__channel-images-ctn">
                        <img className="home__channel-images-ctn-indv" src={moreImg} alt="" />
                    </Link>
                </div>
            </div>
            <div className="home__share">
                <img className="home__share-img" src={user.picture} alt="" />
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
                            <p className="home__share-ctn-images-indv-text">Image</p>
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
            {postsData?.map((item) => {
                return <PostElement postsData={item} key={item.id} />;
            })}
        </div>
    );
}
