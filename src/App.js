import "./App.css";
import Section from "./components/Section";
import "./components/inputs/TextInput";
import TextInput from "./components/inputs/TextInput";

function App() {
  return (
    <div className="App">
      <header>CV App</header>
      <Section
        fields={[
          ["name", "text"],
          ["email", "email"],
          ["phone", "phone"],
        ]}
      />
      <TextInput label="Name" />
    </div>
  );
}

export default App;
