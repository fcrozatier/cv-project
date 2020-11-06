import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>CV App</header>
      <Section
        title="Profile"
        fields={[
          ["name", "text"],
          ["email", "email"],
          ["phone", "phone"],
        ]}
      />
      <Section
        title="Education"
        fields={[
          ["institution", "text"],
          ["degree", "text"],
          ["date", "date"],
        ]}
      />
      <Section
        title="Work"
        fields={[
          ["company", "text"],
          ["position", "text"],
          ["description", "text"],
          ["date", "date"],
        ]}
      />
    </div>
  );
}

export default App;
