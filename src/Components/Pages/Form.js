import React from 'react';
import { useReducer,useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as type from "../../Store/ActionTypes"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CreateUserSuccess,UpdateUserSuccess } from '../../Store/ActionTypes';

function Form(props) {
    const user = useSelector((state)=>state.users)
    const id = props.match.params.id
    const is_edit = props.match.path === "/edit/:id"
    console.log(is_edit,"is edit")
    console.log(user)

    const dispatch = useDispatch();

  const initialFormState = {
    id:is_edit?id:Date.now(),
    name: '',
    email: '',
    image: '',
    dob: '',
  };

  const formReducer = (state, action) => {
    console.log(state,action,"<--")
    switch (action.type) {
      case 'HANDLE_INPUT_TEXT':
        return { ...state, [action.field]: action.payload };
        case 'HANDLE_INPUT_ID':
        return { ...state, [action.field]: action.payload };
      default:
        return state;
    }
  };

  const [formState, dispatchform] = useReducer(formReducer, initialFormState);
  const [birthdate, setBirthdate] = useState(new Date());

  const handleChange = (date) => {
    dispatchform({
        type: 'HANDLE_INPUT_TEXT',
        field: "dob",
        payload: date.toLocaleDateString(),
      });
  }
  const handleInput = (e) => {
    dispatchform({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };


  const handleSave = (e) => {
    e.preventDefault();
    
    is_edit? dispatch(UpdateUserSuccess(formState)) :dispatch(CreateUserSuccess(formState));
    props.history.push('/')    
  }

  return (
    <div
      style={{
        marginTop: '50px',
      }}>
          <Link to ="/">list</Link>
      <div className="container">
          
        <h2>{id? "Edit user":"Create user"}</h2>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                value={formState.name}
                type="text"
                className="form-control"
                id="name"   
                placeholder="Enter name"
                name="name"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                value={formState.email}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">
              Date of birth:
            </label>
            <div className="col-sm-10">
              <DatePicker
              selected={birthdate}
              name="dob"
              dateFormat="MM/dd/yyyy"
              onSelect={(date)=>setBirthdate(date)}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">
              Image
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control form-control-file"
                id="image"
                name="image"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" onClick={(e)=>{handleSave(e)}} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
