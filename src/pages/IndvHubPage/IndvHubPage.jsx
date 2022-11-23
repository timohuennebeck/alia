import "./IndvHubPage.scss";

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
import profileImg from "../../assets/images/melanie-perkins.jpg";

// components
import InputField from "../../components/InputField/InputField";
import CommentElement from "../../components/CommentElement/CommentElement";

// libraries
import { Link, useParams } from "react-router-dom";

// api calls
import { useEffect, useState } from "react";
import { getHubsId, getPosts } from "../../utils/api";

export default function IndvHubPage() {
    const [postsData, setPostsData] = useState();
    const [hubsData, setHubsData] = useState();

    const { id } = useParams();

    useEffect(() => {
        getPosts().then(({ data }) => {
            setPostsData(data.filter((posts) => posts.hubs_id === Number(id)));
        });
        getHubsId({ id }).then(({ data }) => {
            setHubsData(data[0]);
        });
    }, [id]);

    if (!postsData || !hubsData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="indv-hub">
            <div className="indv-hub__channel">
                <div className="indv-hub__channel-ctn">
                    <div className="indv-hub__channel-ctn-emblem"></div>
                    <div className="indv-hub__channel-ctn-content">
                        <h4 className="indv-hub__channel-ctn-content-header">
                            You are exploring "{hubsData.name}"!
                        </h4>
                        <p className="indv-hub__channel-ctn-content-text">
                            2 Participants In a Huddle...
                        </p>
                    </div>
                </div>
                <div className="indv-hub__channel-images">
                    <Link to="/huddle" className="indv-hub__channel-images-ctn">
                        <img className="indv-hub__channel-images-ctn-indv" src={micImg} alt="" />
                    </Link>
                    <Link className="indv-hub__channel-images-ctn">
                        <img className="indv-hub__channel-images-ctn-indv" src={bellImg} alt="" />
                    </Link>
                    <Link className="indv-hub__channel-images-ctn">
                        <img className="indv-hub__channel-images-ctn-indv" src={moreImg} alt="" />
                    </Link>
                </div>
            </div>
            <div className="indv-hub__share">
                <img className="indv-hub__share-img" src={profileImg} alt="" />
                <div className="indv-hub__share-ctn">
                    <div className="indv-hub__share-ctn-publish">
                        <InputField placeholder="What's happening?" />
                        <div className="indv-hub__share-ctn-publish-ctn">
                            <img
                                className="indv-hub__share-ctn-publish-ctn-img"
                                src={postImg}
                                alt=""
                            />
                            <p className="indv-hub__share-ctn-publish-ctn-text">Publish</p>
                        </div>
                    </div>
                    <div className="indv-hub__share-ctn-images">
                        <div className="indv-hub__share-ctn-images-indv">
                            <img
                                className="indv-hub__share-ctn-images-indv-icon"
                                src={paperImg}
                                alt=""
                            />
                            <p className="indv-hub__share-ctn-images-indv-text">Attachments</p>
                        </div>
                        <div className="indv-hub__share-ctn-images-indv">
                            <img
                                className="indv-hub__share-ctn-images-indv-icon"
                                src={imagesImg}
                                alt=""
                            />
                            <p className="indv-hub__share-ctn-images-indv-text">Image</p>
                        </div>
                        <div className="indv-hub__share-ctn-images-indv">
                            <img
                                className="indv-hub__share-ctn-images-indv-icon"
                                src={clockImg}
                                alt=""
                            />
                            <p className="indv-hub__share-ctn-images-indv-text">Poll</p>
                        </div>
                        <div className="indv-hub__share-ctn-images-indv">
                            <img
                                className="indv-hub__share-ctn-images-indv-icon"
                                src={usersImg}
                                alt=""
                            />
                            <p className="indv-hub__share-ctn-images-indv-text">Meeting</p>
                        </div>
                    </div>
                </div>
            </div>
            {postsData?.map((item) => {
                return <CommentElement postsData={item} key={item.id} />;
            })}
        </div>
    );
}
