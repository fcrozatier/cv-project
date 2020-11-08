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

  createForms = () => {
    return this.state.subsections.map((subsection, index) => {
      return (
        <Form
          key={uniqid()}
          index={index}
          subsection={subsection}
          onSubmit={this.handleSubmit}
        >
          {/* {this.createInputs(subsection)} */}
        </Form>
      );
    });
  };

  // createInputs = (subsection) => {
  //   return subsection.map((field) => {
  //     return (
  //       <Input
  //         key={field.name}
  //         name={field.name}
  //         label={field.label}
  //         type={field.type}
  //         value={field.value}
  //       />
  //     );
  //   });
  // };

  handleSubmit = (e) => {
    console.log("Section -> e", e.target);
    // let subsections = [...this.state.subsections];
    // const subsectionIndex = e.target.dataset.subsection;
    // subsections[subsectionIndex].forEach((field) => {
    //   if (field.name === e.target.name) {
    //     field.value = e.target.value;
    //   }
    // });
    // this.setState({ subsections });
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

    // const cardElems = this.props.fields.map((item, index) => (
    //   <div className={item[0]} key={index}>
    //     <span className="label">{item[0]}</span>
    //     {item[0] === "date"
    //       ? this.formatDate(this.state[item[0]])
    //       : this.state[item[0]]}
    //   </div>
    // ));

    const addSubsectionBtn = this.props.clonable ? (
      <Button
        className="btn-addSubsection"
        stateless={true}
        onAnimationEnd={this.animationEnd}
      ></Button>
    ) : null;

    return (
      <div className="overflow-container">
        <div name={this.props.title} className="container">
          <div className="card">
            <div className="card_content">
              <h2 className="section-title">{this.props.title}</h2>
              {/* {cardElems} */}
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
