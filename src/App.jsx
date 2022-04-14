import './App.css';
import Errbound from './components/errBoundary';
import {Counter} from './components/Counter';
import {Decreement} from './components/Decreement';

function App() {
  return (
    <div className="App">
      <Errbound>
        <Decreement/>
      </Errbound>
    <Errbound>
      <Counter/>
    </Errbound >  
    </div>
  );
}

export default App;
