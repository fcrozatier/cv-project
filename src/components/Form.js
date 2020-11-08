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
    const subsectionIndex = e.target.dataset.subsection;
    if (e.target.checkValidity()) {
      this.props.onSubmit(subsectionIndex, this.state);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form
          className="form"
          noValidate
          data-subsection={this.props.index}
          onSubmit={this.handleSubmit}
        >
          {this.createInputs(this.props.subsection)}
          <div className="btn-container">
            <button type="submit" className="btn btn-alt">
              Update
            </button>
            {this.props.clonable ? (
              <button
                type="button"
                className="btn btn-alt btn-danger"
                onClick={() => this.props.deleteSubsection(this.props.index)}
              >
                Delete
              </button>
            ) : null}
          </div>
        </form>
      </>
    );
  }
}

export default Form;
