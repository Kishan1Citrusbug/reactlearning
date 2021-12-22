import React, {useReducer,useState, useEffect,useContext} from 'react'
import { EmpContext } from '../App'
import axios from 'axios'

const initformobject={
    name:'',
    email:''
}

const formreducer = (state,action) => {
    switch (action.type) {
        case 'HANDLE_TEXT':
            return 
        default:
            return state
    }
  }

const EmployeeUpdate = () => {
  const empContext = useContext(EmpContext)

const [formstate,formdispatch] = useReducer(formreducer,initformobject)
const [uname,setUname] = useState('')    
    const [email,setEmail] = useState('') 
  const formSubmitHandler = (e) => {
    e.preventdefault();
       
    axios({
        method: 'put',
        url: `https://gorest.co.in/public/v1/users/${empContext.empOnSingle}`,
        data: {
            name: formstate.name ,
            email: formstate.email
        }
      });
}

    return (
      <div>
        <div>
          <p> {empContext.empState.name} </p>
        </div>
      <form>
        <label>
          name:
          <input type="text"
            name="name"
            value={uname}
            onChange={(e) =>setUname(e.target.value) }
          />
        </label>
        <label>
          email:
          <input type="text"
          name='email'
          value={email}
          onChange={(e) =>setEmail(e.target.value) }
          />
        </label>
        <button onClick={(e) => formSubmitHandler(e)}>Update</button>
      </form>
    </div>
    )
}

export default EmployeeUpdate
