import React from "react";
import "./form.css";
import "./buttons.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.children);
    return (
      <>
        <form className="form">
          {this.props.children}
          <button className="btn btn-rounded btn-valid">Ok</button>
        </form>
      </>
    );
  }
}

export default Form;
