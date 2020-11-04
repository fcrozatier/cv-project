import React from "react";
import Input from "./Input";

class Form extends React.Component {
  render() {
    return <form>{this.props.children}</form>;
  }
}

export default Form;
