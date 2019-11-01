import React from 'react';
/* import CounterFn from './components/counterFn'; */
import Counter from './components/counter';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Licznik React</h1>
      </header>
    
      <Counter initValue="108"/>
      <Counter initValue="90"/>
    
    </div>
  );
}

export default App;
