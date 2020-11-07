import React from "react";
import "./inputs.css";
// var uniqid = require("uniqid");

class Input extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.labelId = uniqid(this.props.label);
  // }

  handleChange = (e) => {
    if (e.target.validity.valid) {
      this.removeError(e);
      e.target.classList.add("valid");
    }
    this.props.onChange(e);
  };

  validate = (e) => {
    const validity = e.target.validity;
    if (validity.valueMissing) {
      this.displayError(e, "This field is required");
    } else if (validity.typeMismatch) {
      this.displayError(e, `This ${e.target.label} is not valid`);
    } else if (validity.patternMismatch) {
      this.displayError(e, `The ${e.target.label} must be 10 digits long`);
    } else if (validity.valid) {
      this.removeError(e);
    }
  };

  displayError(e, msg) {
    const errorDiv = document.querySelector(
      `[name="${this.props.name}"] + .errorMessage`
    );
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    errorDiv.style.display = "block";
    errorDiv.textContent = msg;
  }

  removeError(e) {
    const errorDiv = document.querySelector(
      `[name="${this.props.name}"] + .errorMessage`
    );
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  render() {
    const { name, label, type, value, subsection } = this.props;
    const phonePattern = type === "phone" ? "\\d{10}" : ".+";
    const params = {
      id: name,
      name: name,
      "data-subsection": subsection,
      type: type,
      value: value,
      autoComplete: "off",
      className: "field",
      onChange: this.handleChange,
      onBlur: this.validate,
      pattern: phonePattern,
      required: true,
    };

    return (
      <>
        <label className="field-label" htmlFor={name}>
          {this.capitalize(label)}
        </label>
        {type === "textarea" ? (
          <textarea {...params} className="field textarea" />
        ) : (
          <input {...params} />
        )}
        <div className="errorMessage"></div>
      </>
    );
  }
}

export default Input;
