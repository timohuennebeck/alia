import "./InputField.scss";
import React from "react";

interface InputFieldProps {
    placeholder: string;
}

export default function InputField({ placeholder }: InputFieldProps) {
    return (
        <div className="input">
            <input className="input__placeholder" placeholder={placeholder} />
        </div>
    );
}
