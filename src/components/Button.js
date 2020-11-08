import React from "react";
import "./buttons.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, symbol: "+" };
    this.content = ["+", "×"];
    this.classes = this.props.className || "";
  }

  handleClick = (e) => {
    if (this.props.stateless) {
      e.target.classList.add("btn-pops");
    } else {
      e.target.classList.add("btn-pops-and-turns");
      this.state.open ? this.props.onClose(e) : this.props.onOpen(e);
      this.setState({ open: !this.state.open });
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  removeActive = (e) => {
    if (this.props.stateless) {
      e.target.classList.remove("btn-pops");
    } else {
      e.target.classList.remove("btn-pops-and-turns");
      this.setState({ symbol: this.content[+this.state.open] });
    }
    if (this.props.onAnimationEnd) {
      this.props.onAnimationEnd(e);
    }
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        onAnimationEnd={this.removeActive}
        className={"btn btn-rounded btn-info " + this.classes}
      >
        {this.state.symbol}
      </button>
    );
  }
}

export default Button;
