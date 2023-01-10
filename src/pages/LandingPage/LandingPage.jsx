import "./LandingPage.scss";

// images
import aliaLogo from "../../assets/images/alia-logo.png";

// libraries
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing">
            <div className="landing__ctn">
                <div className="landing__ctn-access">
                    <p>Don't have an account? Log in using a sample account:</p>
                    <p>Email: beta@fuse.com and PW: !8n3MapQGt?7fYyQ</p>
                </div>
                <div className="landing__ctn-indv">
                    <p className="landing__ctn-indv-version">Alpha Version 1.0</p>
                    <img className="landing__ctn-indv-logo" src={aliaLogo} alt="" />
                    <p className="landing__ctn-indv-welcome">Welcome to Fuse!</p>
                    <p className="landing__ctn-indv-account">
                        Log in with a Google account or sign up using email to continue.
                    </p>
                </div>
                <div className="landing__ctn-login">
                    <button
                        onClick={() => loginWithRedirect({ screen_hint: "signup" })}
                        className="landing__ctn-login-buttons"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => loginWithRedirect()}
                        className="landing__ctn-login-buttons"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}
