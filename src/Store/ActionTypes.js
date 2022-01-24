export const CREATE_USER = 'CREATE_USER' 
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS' 
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR' 


//Read
export const GET_USERS = 'GET_USERS' 
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS' 
export const GET_USERS_ERROR = 'GET_USERS_ERROR' 


//Update
export const START_EDITING ='START_EDITING'
export const CANCEL_EDITING = 'CANCEL_EDITING'

export const UPDATE_USER = 'UPDATE_USER' 
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS' 
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR' 

export const COMPLETE_USER = 'COMPLETE_USER'


//Delete
export const DELETE_USER = 'DELETE_USER' 
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS' 
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR' 



export function CreateUserSuccess(user){
    console.log(user)
    return {
        type:CREATE_USER_SUCCESS,
        user
    }
}


export function GetUserSuccess(users){
    return {
        type:GET_USERS_SUCCESS,
        users
    }
}


//Update
export function StartEditing(id) {
    return {
        type: START_EDITING,
        id
    }
}
export function CancelEditing(id) {
    return {
        type: CANCEL_EDITING,
        id
    }
}


export function UpdateUserSuccess(user) {
    console.log(user)
    return {
        type: UPDATE_USER_SUCCESS,
        user
    }
}



export function DeleteUserSuccess(user) {
    return {
        type: DELETE_USER_SUCCESS,
        user,
        id: user.id
    }
}