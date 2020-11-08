import React from "react";
import Input from "./Input";
import "./buttons.css";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initializeState();
  }

  initializeState = () => {
    let state = {};
    this.props.subsection.forEach((field) => {
      const name = field.name;
      state[name] = field.value;
    });

    return state;
  };

  createInputs = (subsection) => {
    return subsection.map((field) => {
      const name = field.name;
      return (
        <Input
          key={name}
          name={name}
          label={field.label}
          type={field.type}
          value={this.state[name].value}
          onChange={this.handleChange}
        />
      );
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form className="form" noValidate>
          {this.createInputs(this.props.subsection)}
          <button
            type="submit"
            className="btn btn-alt"
            data-subsection={this.props.index}
            onClick={this.handleSubmit}
          >
            Update
          </button>
        </form>
      </>
    );
  }
}

export default Form;
