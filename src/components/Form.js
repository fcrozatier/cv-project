import React from "react";
import Button from "./Button";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <form className="form">
          {this.props.children}
          <div className="submit-btn">
            <button className="btn btn-alt">Update</button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
