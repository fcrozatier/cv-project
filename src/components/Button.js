import React from "react";
import "./buttons.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, symbol: "+" };
    this.content = ["+", "×"];
  }

  handleClick = (e) => {
    this.addActive(e);
    this.setState({ open: !this.state.open });
    this.props.onClick(e);
  };

  addActive(e) {
    e.target.classList.add("btn-active");
  }

  removeActive = (e) => {
    e.target.classList.remove("btn-active");
    this.setState({ symbol: this.content[Number(this.state.open)] });
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        onAnimationEnd={this.removeActive}
        className="btn btn-rounded btn-info"
        value="+"
      >
        {this.state.symbol}
      </button>
    );
  }
}

export default Button;
