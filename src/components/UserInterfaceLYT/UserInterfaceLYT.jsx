import "./UserInterfaceLYT.scss";

import MobileHeader from "../MobileHeader/MobileHeader";
import { Outlet } from "react-router-dom";

export default function UserInterfaceLYT() {
    return (
        <div className="interface">
            <MobileHeader />
            <div className="interface__explore">
                <input className="interface__explore-input" placeholder="# Explore" />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
