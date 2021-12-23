import React, {useState, useContext} from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { EmpContext } from '../App'
import axios from 'axios'
  
const EmployeeUpdate = () => {
const empContexts = useContext(EmpContext)
const [uname,setUname] = useState('')    
const [email,setEmail] = useState('') 
const params = useParams();
const navigation = useNavigate()

const FormSubmitHandler = (e,id) => {
  e.preventDefault(); 
  axios({
      method: 'put',
      url: `https://gorest.co.in/public/v1/users/${id}`,
      data: {
          name: uname,
          email: email
      },
      headers: {
        Authorization:"Bearer 087c306d60c38da4e513ac65feee126dfafa768c9ed3d7e646de52e573a89dd1",
      }
    })
    .then(resp => {empContexts.sEmpDispatch({type:"FETCH_SUCCESS",payload:resp.data})})
    .catch(err => console.log(err));
    navigation(`/detail/${id}`);
}
const user = empContexts.semp
console.log(empContexts.semp)

const render_data= (user) => {
  return (<>
  <h1>Name: {user.data.name}</h1>
      <h3> Email: {user.data.email} </h3>
      <h3> Gender: {user.data.gender} </h3>
      <Link to={'/'} > home </Link>
  </>)
}
    return (
      <div>
       <div>
            {empContexts.semp.loading ? "Loading" : render_data(user)}
                {empContexts.empState.error ? empContexts.empState.error : null}
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
        <button onClick= {(e) => FormSubmitHandler(e,params.userId)}>Update</button>
      </form>
    </div>
    )
}

export default EmployeeUpdate
