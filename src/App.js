import React, { useMemo, useState ,useEffect} from 'react';

function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const App = () => {
  const [counter, setCounter] = useState(1);
  const [efcounter,setEfcounter] = useState(1);
  const [ans,setAns]=useState(null)
  const result = useMemo(() => {
      console.log('calculate', counter);
      return factorial(counter);
  }, [counter]);

  useEffect(() => {
    console.log("witout memo",efcounter)
    if (efcounter < 0) {
        setAns(-1);
      }
      if (efcounter === 0) {
        setAns(1);
      }
      setAns(efcounter * factorial(efcounter - 1));
    },[efcounter])
  console.log('render', { counter });
  return (
    <div>
      <div>Factorial of {counter} is: <span>{result}</span></div>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div>(without memo)Factorial of {efcounter} is: <span>{ans}</span></div>
      <div>
        <button onClick={() => setEfcounter(efcounter - 1)}>-</button>
        <button onClick={() => setEfcounter(efcounter + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
