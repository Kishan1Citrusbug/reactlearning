import React, {useContext} from 'react'
import { EmpContext } from '../App'
import { Link } from 'react-router-dom'


const FetchemployeeList = () => {
    const empContext = useContext(EmpContext)
    return (
        <div>
            <ul>
                {empContext.empState.loading ? "Loading" : empContext.empState.data.data.map( d => (
                    <li key={d.id}>{d.name}</li>
                ))}
                {empContext.empState.error ? empContext.empState.error : null}
            </ul>
        </div>
    )
}

export default FetchemployeeList
