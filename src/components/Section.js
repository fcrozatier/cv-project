import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import "./section.css";
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
    this.setState(() => {
      return { [e.target.name]: e.target.value };
    });
  };

  formatDate(date) {
    if (date === "") return "";
    const formattedDate = new Date(date).toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }

  openForm = () => {
    this.formContainer.classList.add("slide-in");
    this.formContainer.classList.add("show");
    if (this.addSubsectionBtn) {
      this.addSubsectionBtn.classList.add("full-opacity");
      this.addSubsectionBtn.classList.add("btn-pops-delayed");
    }
  };

  closeForm = () => {
    this.formContainer.classList.remove("slide-in");
    this.formContainer.classList.remove("show");
    if (this.addSubsectionBtn) {
      this.addSubsectionBtn.classList.remove("full-opacity");
    }
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
        {item[0] === "date"
          ? this.formatDate(this.state[item[0]])
          : this.state[item[0]]}
      </div>
    ));

    const addSubsectionBtn = this.props.clonable ? (
      <Button className="btn-addSubsection" stateless={true}></Button>
    ) : null;

    return (
      <div className="overflow-container">
        <div name={this.props.title} className="container">
          <div className="card">
            <div className="card_content">
              <h2 className="section-title">{this.props.title}</h2>
              {cardElems}
            </div>
            <div className="edit-section">
              <Button
                onOpen={this.openForm}
                onClose={this.closeForm}
                stateless={false}
              ></Button>
            </div>
          </div>
          <div className="form-displayer">
            <div className="form-container">
              <Form>{inputs}</Form>
              <Form>{inputs}</Form>
              <Form>{inputs}</Form>
            </div>
            {addSubsectionBtn}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.formContainer = document.querySelector(
      `[name="${this.props.title}"] .form-container`
    );

    this.addSubsectionBtn = document.querySelector(
      `[name="${this.props.title}"] .btn-addSubsection`
    );
  }
}

export default Section;
