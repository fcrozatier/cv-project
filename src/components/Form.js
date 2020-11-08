import React from "react";
import "./buttons.css";
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
          <button type="submit" class="btn btn-alt">
            Update
          </button>
        </form>
      </>
    );
  }
}

export default Form;
