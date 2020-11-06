import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>CV App</header>
      <Section
        title="Profile"
        clonable={false}
        fields={[
          ["name", "text"],
          ["email", "email"],
          ["phone", "phone"],
        ]}
      />
      <Section
        title="Education"
        clonable={false}
        fields={[
          ["institution", "text"],
          ["degree", "text"],
          ["date", "date"],
        ]}
      />
      <Section
        title="Work"
        clonable={false}
        fields={[
          ["company", "text"],
          ["position", "text"],
          ["description", "textarea"],
          ["date", "date"],
        ]}
      />
    </div>
  );
}

export default App;
