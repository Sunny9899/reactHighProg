import "./App.css";
import Errbound from "./components/errBoundary/errBoundary";
import { Counter } from "./components/errBoundary/Counter";
import { Decreement } from "./components/errBoundary/Decreement";
import GetPost from "./components/HOC/posts";
import Comments from "./components/HOC/comments";

function App() {
  return (
    <div className="App">
      <Errbound>
        <Decreement />
      </Errbound>
      <Errbound>
        <Counter />      
      </Errbound>
      <hr/>
      <br/>
      <GetPost/>  
      <hr/>
     <Comments/>
    </div>
  );
}

export default App;
