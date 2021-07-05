import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../types';
import {IUser} from '../models';

export interface IGetUsersRequest {
  type: typeof GET_USERS_REQUEST;
}

export interface IGetUsersSuccess {
  type: typeof GET_USERS_SUCCESS;
  payload: IUser[];
}

export interface IGetUsersFailure {
  type: typeof GET_USERS_FAILURE;
  payload: string;
}

export type UsersActionTypes =
  | IGetUsersRequest
  | IGetUsersSuccess
  | IGetUsersFailure;
