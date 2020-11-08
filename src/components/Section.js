import React from "react";
import Form from "./Form";
// import Input from "./Input";
import Button from "./Button";
import "./section.css";
import "./form.css";
var uniqid = require("uniqid");

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subsections: [this.initializeSubsection()],
    };
  }

  initializeSubsection = () => {
    let subsection = [];
    this.props.fields.forEach((field) => {
      subsection.push({
        name: uniqid(field[0]),
        label: field[0],
        value: "",
        type: field[1],
      });
    });
    return subsection;
  };

  createSubsection = () => {
    let subsection = this.initializeSubsection();

    this.setState((prevState) => {
      const subsections = [...prevState.subsections, subsection];
      console.log("Section -> subsections", subsections);
      return { subsections };
    });
  };

  createForms = () => {
    return this.state.subsections.map((subsection, index) => {
      return (
        <Form
          key={uniqid()}
          index={index}
          subsection={subsection}
          onSubmit={this.handleSubmit}
        ></Form>
      );
    });
  };

  handleSubmit = (index, newState) => {
    let subsections = [...this.state.subsections];
    for (let key in newState) {
      subsections[index].forEach((field) => {
        if (field.name === key) {
          field.value = newState[key];
        }
      });
    }
    this.setState({ subsections });
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

  animationEnd = (e) => {
    e.target.classList.remove("btn-pops-delayed");
  };

  render() {
    const forms = this.createForms();

    const cardElems = this.state.subsections.map((subsection) => (
      <div className="subsection" key={uniqid()}>
        {subsection.map((item) => (
          <div className={item.label} key={uniqid()}>
            <span className="label">{item.label}</span>
            {item.label === "date" ? this.formatDate(item.value) : item.value}
          </div>
        ))}
      </div>
    ));

    const addSubsectionBtn = this.props.clonable ? (
      <Button
        className="btn-addSubsection"
        stateless={true}
        onAnimationEnd={this.animationEnd}
        onClick={this.createSubsection}
      ></Button>
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
            <div className="form-container">{forms}</div>
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
