import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import "./Section.css";
import "./form.css";

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

  openForm = () => {
    this.formContainer.classList.add("slide-in");
    this.formContainer.classList.add("show");
  };

  closeForm = () => {
    this.formContainer.classList.remove("slide-in");
    this.formContainer.classList.remove("show");
  };

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
        <div name={this.props.name} className="container">
          <div className="card">
            {cardElems}
            <div className="edit-section">
              <Button onOpen={this.openForm} onClose={this.closeForm}></Button>
            </div>
          </div>
          <div className="form-container">
            <Form>{inputs}</Form>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.formContainer = document.querySelector(
      `[name="${this.props.name}"] .form-container`
    );
  }
}

export default Section;
