import "./InputField.scss";

export default function InputField({ placeholder }) {
    return (
        <div className="input">
            <input className="input__placeholder" placeholder={placeholder} />
        </div>
    );
}
