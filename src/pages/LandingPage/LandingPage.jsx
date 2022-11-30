import "./LandingPage.scss";

// images
import aliaLogo from "../../assets/images/alia-logo.png";

// libraries
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing">
            <div className="landing__header">
                <div className="landing__header-buttons">
                    <button
                        onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                        className="landing__header-buttons-indv"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => loginWithRedirect()}
                        className="landing__header-buttons-indv"
                    >
                        Log In
                    </button>
                </div>
                <p className="landing__header-version">Alpha Version 1.0</p>
            </div>
            <div className="landing__img">
                <p className="landing__img-version">Alpha Version 1.0</p>
                <img className="landing__img-mobile" src={aliaLogo} alt="" />
            </div>
        </div>
    );
}
