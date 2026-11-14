
import "./Input.css";

const Input = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    error,
    required = false,
}) => {
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={name}>
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className={error ? "input-error" : ""}
            />

            {error && (
                <span className="error-message">{error}</span>
            )}
        </div>
    );
};

export default Input;
