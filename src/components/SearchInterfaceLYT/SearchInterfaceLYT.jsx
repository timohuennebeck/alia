import "./SearchInterfaceLYT.scss";

import MobileHeader from "../MobileHeader/MobileHeader";
import { Outlet } from "react-router-dom";
import searchImg from "../../assets/icons/search.svg"

export default function SearchInterfaceLYT() {
    return (
        <div className="search">
            <MobileHeader />
            <div className="search__input">
                <img className="search__input-img" src={searchImg} alt="" />
                <input className="search__input-input" placeholder="Search..." />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
