import React from "react";
import "./buttons.css";

class Button extends React.Component {
  addActive(e) {
    console.log(this);
    e.target.classList.add("btn-active");
  }

  removeActive(e) {
    e.target.classList.remove("btn-active");
  }

  render() {
    return (
      <button
        onClick={this.addActive.bind(this)}
        onAnimationEnd={this.removeActive}
        className="btn btn-rounded btn-info"
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
