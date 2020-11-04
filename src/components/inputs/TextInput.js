import React from "react";
import "./inputs.css";

class TextInput extends React.Component {
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
    const errorDiv = document.querySelector(
      `[name="${this.props.label}"] + .errorMessage`
    );
    if (e.target.value !== "") {
      e.target.classList.remove("invalid");
      e.target.classList.add("valid");
      errorDiv.style.display = "none";
      errorDiv.textContent = "";
    } else {
      e.target.classList.remove("valid");
      e.target.classList.add("invalid");
      errorDiv.style.display = "block";
      errorDiv.textContent = "This field is required";
    }
  };

  render() {
    const label = this.props.label;
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          type="text"
          name={label}
          id={label}
          value={this.state[label]}
          className="field"
          onChange={this.handleChange}
          onBlur={this.validate}
        />
        <div className="errorMessage"></div>
      </div>
    );
  }
}

export default TextInput;
