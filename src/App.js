import './App.css';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <header>CV App</header>
      <Section fields={[
                ["name", "text"], 
                ["email", "email"], 
                ["phone", "phone"]]}/>
    </div>  
  )
}

export default App;
