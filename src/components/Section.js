import React from "react";
import "./Section.css";
import "./buttons.css";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initializeState(this.props.fields);
  }

  initializeState(fields) {
    const entries = fields.map((item) => [item[0], ""]);
    return Object.fromEntries(entries);
  }

  displayForm = () => {};

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="card">Hey there !</div>
        <button onClick={this.displayForm} className="btn btn-rounded btn-info">
          +
        </button>
      </div>
    );
  }
}

export default Section;
