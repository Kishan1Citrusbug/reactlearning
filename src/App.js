import React, { useCallback, useState} from 'react';


const App = () => {
  const [salary, setSalary] = useState(0);
  const [efsalary,setEfsalary] = useState(0);
  // const [ans,setAns]=useState(null)

  const without_increase = () =>{
  console.log("without",efsalary)
   return setEfsalary(efsalary+1000)
  }
  const without_decrease = () =>{
    console.log("without",efsalary)
    return setEfsalary(efsalary-1000)
   }

  const increase = useCallback(() => {
      console.log('calculate', salary);
      setSalary(salary+1000)
  }, [salary]);

  const decrease = useCallback(() => {
    console.log('calculate', salary);
    setSalary(salary-1000)
}, [salary]);

  console.log('rendering');
  return (
    <div>
      <div>with callback salaryis: <span>{salary}</span></div>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <div>(without call back)salaryis: <span>{efsalary}</span></div>
      <div>
        <button onClick={without_decrease}>-</button>
        <button onClick={without_increase}>+</button>
      </div>
    </div>
  );
};

export default App;
