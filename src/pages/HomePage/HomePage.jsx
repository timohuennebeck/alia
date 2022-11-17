import "./HomePage.scss";

// icons
import paperImg from "../../assets/icons/paperclip.svg";
import imagesImg from "../../assets/icons/image-gallery.svg";
import liveImg from "../../assets/icons/cast.svg";
import clockImg from "../../assets/icons/clock.svg";
import usersImg from "../../assets/icons/users.svg";

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

// components
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import InputField from "../../components/InputField/InputField";
import NewComment from "../../components/NewComment/NewComment";

export default function HomePage() {
    return (
        <div className="home">
            <MobileHeader />
            <div className="home__explore">
                <input className="home__explore-input" placeholder="# Explore" />
            </div>
            <div className="home__share">
                <img className="home__share-img" src={profileImg} alt="" />
                <div className="home__share-ctn">
                    <InputField placeholder="What's happening?" />
                    <div className="home__share-ctn-images">
                        <div className="home__share-ctn-images-indv">
                            <img className="home__share-ctn-images-indv-icon" src={paperImg} alt="" />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img className="home__share-ctn-images-indv-icon" src={imagesImg} alt="" />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img className="home__share-ctn-images-indv-icon" src={liveImg} alt="" />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img className="home__share-ctn-images-indv-icon" src={clockImg} alt="" />
                        </div>
                        <div className="home__share-ctn-images-indv">
                            <img className="home__share-ctn-images-indv-icon" src={usersImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <NewComment />
            <NewComment />
            <NewComment />
        </div>
    );
}
