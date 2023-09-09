import './App.css';
import Navigation from "./components/navigation/navigation"
import Mainbody from "./components/mainbody"

function App() {
  return (
    <div className="App">
      <div className="navigator">
        <Navigation />
      </div>
      <div className="mainbody">
        <Mainbody />
      </div>
    </div>
  );
}

export default App;
