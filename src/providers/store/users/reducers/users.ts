import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../types';
import {IUsersState, UsersActionTypes} from '../models';

export const initialState: IUsersState = {
  data: null,
  isFetching: false,
  error: null,
};

export default (
  state: IUsersState = initialState,
  action: UsersActionTypes,
): IUsersState => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
