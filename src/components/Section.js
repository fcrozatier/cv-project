import React from "react";
import Form from "./Form";
import Input from "./Input";
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  displayForm = () => {};

  render() {
    const inputs = this.props.fields.map((item, index) => (
      <Input
        key={index}
        label={item[0]}
        type={item[1]}
        value={this.state[item[0]]}
        onChange={this.handleChange}
      />
    ));

    const cardElems = this.props.fields.map((item, index) => (
      <div className={item[0]} key={index}>
        <span className="label">{item[0]}</span>
        {this.state[item[0]]}
      </div>
    ));

    return (
      <div>
        <div className="container">
          <div className="card">{cardElems}</div>
          <button
            onClick={this.displayForm}
            className="btn btn-rounded btn-info"
          >
            +
          </button>
        </div>
        <Form>{inputs}</Form>
      </div>
    );
  }
}

export default Section;
