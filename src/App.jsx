import "./App.css";
import Errboundary from "./components/ErrBoundary/ErrBoundary";
import { Counter } from "./components/ErrBoundary/Counter";
import { Decreement } from "./components/ErrBoundary/Decreement";

function App() {
  return (
    <div className="App">
      <Errboundary>
        <Decreement />
      </Errboundary>
      <Errboundary>
        <Counter />
      </Errboundary>
    </div>
  );
}

export default App;
