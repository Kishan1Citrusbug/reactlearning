import React, {useEffect,useReducer, useState} from 'react';
import axios from 'axios';
import FetchemployeeList from './components/fetchemployee';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import SingleEmployee from './components/SingleEmployee';
import EmployeeUpdate from './components/EmployeeUpdate';
export const EmpContext = React.createContext()

const initialState = {
  loading:true,
  error:'',
  data:null
}

const reducer = (state,action) => {
  switch (action.type) {
      case 'FETCH_SUCCESS':
          return {
          loading:false,
          error:'',
          data:action.payload
          }
      case 'FETCH_ERROR':
          return{
              loading:false,
              error:'something went wrong',
              data:null
          }
      default:
          return state
  }

}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [singlestate,singleDispatch] = useReducer(reducer, initialState)
  const [onSingle,setOnsingle] = useState(0)  
    useEffect(()=>{
        axios.get("https://gorest.co.in/public/v1/users")
        .then( resp => {dispatch({type:"FETCH_SUCCESS",payload:resp.data})})
        .catch( err => {dispatch({type:"FETCH_ERROR"})})
    },[])

    const values={empState: state, empDispatch: dispatch , singleEmpState:singlestate,singleEmpDispatch:singleDispatch,
    empOnSingle:onSingle,empSetOnSingle:setOnsingle
    }
  return (
    <EmpContext.Provider value={values}>
    <div className='APP'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<FetchemployeeList />} ></Route>
       <Route path='/detail' element={<SingleEmployee />} ></Route>
       <Route path='/update/:id' element={<EmployeeUpdate />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </EmpContext.Provider>
  );
};

export default App;
