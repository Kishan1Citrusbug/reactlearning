import React, { useState } from 'react';
import 'material-icons/iconfont/material-icons.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteUserSuccess } from '../../Store/ActionTypes';

function List() {
  const users = useSelector((state) => state.users);
  const [delpop, setDelpop] = useState({conf:false,id:null,});
  
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(DeleteUserSuccess(delpop.id),setDelpop({conf:false,id:null}));
  };

  return (
    <div
      style={{
        marginTop: '50px',
      }}>
      {console.log(users)}
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    User <b>Details</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <Link to="/add" className="btn btn-info add-new">
                    <i className="fa fa-plus"></i> Add New
                  </Link>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Image</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0
                  ? users.map((user) => {
                      return (
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.dob}</td>
                          <td>
                            <img src={user.image} />
                          </td>
                          <td>{user.email}</td>
                          <td>
                            <Link
                              to={`/edit/${user.id}`}
                              className="edit"
                              title="Edit"
                              data-toggle="tooltip">
                              <i className="material-icons">&#xE254;</i>
                            </Link>
                            <button
                              style={{
                                border: 'none',
                                background: 'transparent',
                                color: 'blue',
                              }}
                              key={user.id}
                              onClick={(e) => {
                                setDelpop({
                                    conf:true,
                                    id:user
                                    
                                });
                              }}
                              className="delete">
                              <i className="material-icons">&#xE872;</i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
          <div
            className="modal"
            style={
              delpop.conf
                ? {
                    display: 'block',
                  }
                : {
                    display: 'none',
                  }
            }
            tabindex="-1"
            role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Warning</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close">
                    <span
                      onClick={(e) => {
                        setDelpop({conf:false,id:null});
                      }}
                      aria-hidden="true">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>make sure you want to delete </p>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                        setDelpop({conf:false,id:null});
                    }}
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal">
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      deleteHandler();
                    }}
                    className="btn btn-primary">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
