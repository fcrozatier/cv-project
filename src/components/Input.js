import React from "react";
import "./inputs.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.label]: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      [this.props.label]: value,
    });
  };

  validate = (e) => {
    const validity = e.target.validity;
    console.log("Input -> validity", validity);
    if (validity.valueMissing) {
      this.displayError(e, "This field is required");
    } else if (validity.typeMismatch) {
      this.displayError(e, `This ${e.target.name} is not valid`);
    } else if (validity.patternMismatch) {
      this.displayError(e, `The ${e.target.name} must be 5 digits long`);
    } else if (validity.valid) {
    }
  };

  displayError(e, msg) {
    const errorDiv = document.querySelector(
      `[name="${this.props.label}"] + .errorMessage`
    );
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    errorDiv.style.display = "block";
    errorDiv.textContent = msg;
  }

  removeError(e) {
    const errorDiv = document.querySelector(
      `[name="${this.props.label}"] + .errorMessage`
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
    const { label, type } = this.props;
    const phonePattern = type === "phone" ? "\\d{5}" : ".+";
    return (
      <>
        <label htmlFor={label}>{this.capitalize(label)}</label>
        <input
          name={label}
          type={type}
          id={label}
          value={this.state[label]}
          autoComplete="off"
          className="field"
          onChange={this.handleChange}
          onBlur={this.validate}
          pattern={phonePattern}
          required
        />
        <div className="errorMessage"></div>
      </>
    );
  }
}

export default Input;
