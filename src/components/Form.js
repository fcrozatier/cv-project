import React from "react";
import Button from "./Button";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          {this.props.children}
        </form>
      </>
    );
  }
}

export default Form;
