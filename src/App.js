import React, { useReducer, useState } from "react";


export default function App() {
  const [desc, setDesc] = useState('')
  const itemReducer = (items, action) => {
    switch (action.type) {
      case "Add desc":
        return [...items, newItem(action.payload.desc)]
      case "delete desc":
        return items.filter(item => item.id !== action.payload.id)
      default:
        return items
    }
  }
  const newItem = (desc) => {
    return {
      id: Date.now(),
      desc: desc
    }
  }
  const [items, dispatch] = useReducer(itemReducer, []);

  const addBlock = (e) => {
    e.preventDefault()
    dispatch({
      type: "Add desc",
      payload: {
        desc: desc
      }
    })
    setDesc("")
  }
  console.log(items)
  return (
    <div>
      <form>
        <label>
          description:
          <input type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button onClick={(e) => addBlock(e)}>add</button>
      </form>
      {items.map(item => {
        return (
          <div>
            <h6>id: {item.id}</h6>
            <h1>Desc: {item.desc}</h1>
            <button onClick={() => dispatch({ type: "delete desc", payload: { id: item.id } })}>Delete</button>
          </div>)
      })}
    </div>
  )
}