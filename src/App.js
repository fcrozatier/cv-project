import React from "react";
import Section from "./components/Section";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {
        title: "Profile",
        clonable: false,
        fields: [
          ["name", "text"],
          ["email", "email"],
          ["phone", "phone"],
        ],
      },
      1: {
        title: "Education",
        clonable: true,
        fields: [
          ["institution", "text"],
          ["degree", "text"],
          ["date", "date"],
        ],
      },
      2: {
        title: "Work",
        clonable: true,
        fields: [
          ["company", "text"],
          ["position", "text"],
          ["description", "textarea"],
          ["date", "date"],
        ],
      },
    };
  }

  render() {
    const sections = Object.keys(this.state).map((index) => {
      return <Section key={+index} {...this.state[+index]} />;
    });
    console.log(sections);
    return (
      <div className="App">
        <header>CV App</header>
        {sections}
      </div>
    );
  }
}

export default App;
