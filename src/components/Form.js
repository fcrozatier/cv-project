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
          <div className="submit-btn">
            <button type="submit"></button>
            {/* <button className="btn btn-alt">Update</button>
            <button className="btn btn-alt">Add</button> */}
          </div>
        </form>
      </>
    );
  }
}

export default Form;
