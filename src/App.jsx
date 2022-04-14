import "./App.css";
import Errbound from "./components/errBoundary/errBoundary";
import { Counter } from "./components/errBoundary/Counter";
import { Decreement } from "./components/errBoundary/Decreement";

function App() {
  return (
    <div className="App">
      <Errbound>
        <Decreement />
      </Errbound>
      <Errbound>
        <Counter />
      </Errbound>
    </div>
  );
}

export default App;
