import "./HomePage.scss";

// icons

// images
import profileImg from "../../assets/images/melanie-perkins.jpg";

// components
import MobileHeader from "../../components/MobileHeader/MobileHeader";
import InputField from "../../components/InputField/InputField";

export default function HomePage() {
    return (
        <div className="home">
            <MobileHeader />
            <div className="home__explore">
                <input className="home__explore-input" placeholder="# Explore" />
            </div>
            <div className="home__share">
                <img className="home__share-img" src={profileImg} alt="" />
                <InputField placeholder="What's happening?" />
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}
