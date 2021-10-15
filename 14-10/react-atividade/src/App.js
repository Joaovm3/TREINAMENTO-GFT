import React, { useEffect, useState } from 'react';

import { Button } from '@material-ui/core'
import Header from './components/Header';
import Footer from './components/Footer';
 
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  
  const incrementCount = () => setCount(++count); 
  
  const decrementCount = () => setCount(count <= 0 ? count : --count); 
  
  useEffect(() => {
    console.log('O botão foi apertado');
  }, [count]);

  return (
    <div className="App"> 
      <Header />

      <div className="App-body">
        <Button 
          className="Button-count"
          variant="contained" 
          color="warning"
          onClick={incrementCount}
        >
          Adicionar
        </Button>

        <Button 
          className="Button-count"
          variant="contained" 
          color="success"
          onClick={decrementCount}
        >
          Subtrair
        </Button>

      </div>

      <p value={count}> Contador: {count} </p>
      <Footer/> 
    </div>
  );
}

export default App;
