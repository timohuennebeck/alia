import "./ButtonElement.scss";
import React = require("react");

interface ButtonElementProps {
    img: string;
    name: string;
    onClick?: () => void;
}

export default function ButtonElement({ img, name, onClick }: ButtonElementProps) {
    return (
        <div className="button" onClick={onClick}>
            <img className="button__img" src={img} alt="" />
            <p className="button__text">{name}</p>
        </div>
    );
}
