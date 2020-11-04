import "./App.css";
import Section from "./components/Section";
import Input from "./components/Input";
import Form from "./components/Form";

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
      <Form>
        <Input label="name" type="text" />
        <Input label="email" type="email" />
        <Input label="phone" type="phone" />
        <Input label="date" type="date" />
      </Form>
    </div>
  );
}

export default App;
