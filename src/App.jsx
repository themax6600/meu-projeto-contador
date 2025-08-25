import {use, useState} from 'react';

function App(){
  const [count, setcount] = useState(0);

  const incrementCount = () => {
    setcount(count + 1);
  };

  const decrementCount = () => {
    setcount(count - 1);
  }

  const resetCount = () => {
    setcount(0);
  }

  return(
    <div className='contador-container'>
      <h1>Contador de Cliques</h1>
      <p>Cliques: {count}</p>
      <button className='btn-1' onClick={incrementCount}>+1</button>
      <button className='btn-2' onClick={decrementCount}>-1</button>
      <button className='btn-3' onClick={resetCount}>reset</button>
    </div>
  );
}

export default App;