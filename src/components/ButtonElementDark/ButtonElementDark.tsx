import "./ButtonElementDark.scss";
import React = require("react");

interface ButtonElementDarkProps {
    img: string;
    name: string;
    onClick: () => void;
}

export default function ButtonElementDark({ img, name, onClick }: ButtonElementDarkProps) {
    return (
        <div className="button-dark" onClick={onClick}>
            <img className="button-dark__img" src={img} alt="" />
            <p className="button-dark__text">{name}</p>
        </div>
    );
}
