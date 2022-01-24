import * as UserActions from '../Store/ActionTypes';
import UserData from '../Static/UserData.json';

const initialState = UserData;

export function UserListReducer(state = initialState.user, action) {
    console.log(state,action,"lllllll")
  switch (action.type) {
    // Create
    case UserActions.CREATE_USER_SUCCESS: {
      return [...state, action.user];
    }

    //Read
    case UserActions.GET_USERS_SUCCESS: {
      return action.users;
    }

    //Update
    case UserActions.START_EDITING: {
      return state.map((s) => user(s, action));
    }
    case UserActions.CANCEL_EDITING: {
      return state.map((s) => user(s, action));
    }
    case UserActions.UPDATE_USER: {
      return state.map((s) => user(s, action));
    }
    case UserActions.UPDATE_USER_SUCCESS: {
      return state.map((s) => user(s, action));
    }

    //Delete
    case UserActions.DELETE_USER: {
      return state.map((s) => user(s, action));
    }
    case UserActions.DELETE_USER_SUCCESS: {
      return state.filter((s) => user(s, action));
    }

    default:
      return state;
  }
}

const user = (state, action) => {
  if (state.id != (action.id || action.user.id)) {
      console.log(state.id,typeof(state.id))
      console.log(action)
    return state;
  }

  switch (action.type) {
    case UserActions.START_EDITING: {
      return {
        ...state,
        editing: true,
      };
    }

    case UserActions.CANCEL_EDITING: {
      return {
        ...state,
        editing: false,
      };
    }

  
    case UserActions.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        ...action.user,
      };
    }

    case UserActions.DELETE_USER: {
      return {
        ...state,
        deleting: true,
      };
    }

    case UserActions.DELETE_USER_SUCCESS: {
      return false;
    }

    default: {
      return state;
    }
  }
};
