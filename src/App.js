import "./App.css";
import Event from "./components/Event/Event";
import Nav from "./components/Navbar/Nav";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Event></Event>
      <Question></Question>
    </div>
  );
}

export default App;
