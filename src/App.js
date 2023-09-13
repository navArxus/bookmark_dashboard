import './App.css';
import Navigation from "./components/navigation/navigation"
import Mainbody from "./components/body/mainbody"
import CtxWrapper from "./store/wrapperContext"

function App() {
  return (
    <CtxWrapper>
      <div className="App">
        <div className="navigator">
          <Navigation />
        </div>
        <div className="mainbody">
          <Mainbody />
        </div>
      </div>
    </CtxWrapper>
  );
}

export default App;
