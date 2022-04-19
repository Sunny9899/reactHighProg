import "./App.css";
import Errorboundary from "./components/ErrorBoundary/ErrorBoundary";
import { Counter } from "./components/ErrorBoundary/Counter";
import { Decrement } from "./components/ErrorBoundary/Decrement";

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Decrement />
      </Errorboundary>
      <Errorboundary>
        <Counter />
      </Errorboundary>
    </div>
  );
}

export default App;
