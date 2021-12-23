import React, {useContext} from 'react'
import { EmpContext } from '../App'
import { Link,Outlet } from 'react-router-dom'


const FetchemployeeList = () => {
    const empContext = useContext(EmpContext)
    return (
        <div>
            <ul>
                {empContext.empState.loading ? "Loading" : empContext.empState.data.data.map( d => (
                    <li><Link to={`/detail/${d.id}`} key={d.id}> {d.name}</Link></li>
                ))}
                {empContext.empState.error ? empContext.empState.error : null}
            </ul>
            <Outlet/>
        </div>
    )
}

export default FetchemployeeList
