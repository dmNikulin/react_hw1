import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
  <div className="App">
    <Message name="world"/>
    <Message name="user"/>
  </div>);
}

function Message(props) {
  return (
    <h1 className="firstEl" >Hello {props.name}</h1>
  );
}


export default App;
