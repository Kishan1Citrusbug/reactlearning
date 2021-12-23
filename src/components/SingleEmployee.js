import React from 'react'
import { useContext,useEffect} from 'react'
import { EmpContext } from '../App'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios'


const SingleEmployee = () => {
    const empContext = useContext(EmpContext)
    const params = useParams();
   
    useEffect(()=>{
        axios.get(`https://gorest.co.in/public/v1/users/${params.userId}`)
        .then( resp => {empContext.sEmpDispatch({type:"FETCH_SUCCESS",payload:resp.data.data})})
        .catch( err => {empContext.sEmpDispatch({type:"FETCH_ERROR"})})
    },[])

    const user = empContext.semp.data
    const render_data= (user) => {
        return (<>
        <h1>Name: {user.name}</h1>
            <h3> Email: {user.email} </h3>
            <h3> Gender: {user.email} </h3>
            <Link to={'/'} > home </Link>
            <Link to={`/update/${user.id}`} key={user.id}> Update </Link>
        </>)
    }
    return (
        <div>
            {empContext.semp.loading ? "Loading" : render_data(user)}
                {empContext.empState.error ? empContext.empState.error : null}
        </div>
    )
}

export default SingleEmployee
