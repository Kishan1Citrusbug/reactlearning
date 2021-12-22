import React, {useContext} from 'react'
import { EmpContext } from '../App'
import { Link } from 'react-router-dom'


const FetchemployeeList = () => {
    const empContext = useContext(EmpContext)
    return (
        <div>
            <ul>
                {empContext.empState.loading ? "Loading" : empContext.empState.data.data.map( d => (
                    <li key={d.id}><Link to={`/update/${d.id}`}>{d.name}</Link></li>
                ))}
                {empContext.empState.error ? empContext.empState.error : null}
            </ul>
        </div>
    )
}

export default FetchemployeeList
