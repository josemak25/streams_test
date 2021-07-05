import React from 'react';
import {axiosInstance} from '@app/config';
import {PAGINATION_DEFAULT} from '@app/constants';
import {IUser} from '../models/interfaces';
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../types';
import {
  IGetUsersFailure,
  IGetUsersRequest,
  IGetUsersSuccess,
  UsersActionTypes,
} from '../models';

const getUsersRequest = (): IGetUsersRequest => ({
  type: GET_USERS_REQUEST,
});

const getUsersSuccess = (users: IUser[]): IGetUsersSuccess => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = (error: string): IGetUsersFailure => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const getUsers = (page: number = PAGINATION_DEFAULT) => {
  return async (dispatch: React.Dispatch<UsersActionTypes>) => {
    dispatch(getUsersRequest());

    try {
      const {data} = await axiosInstance.get<{results: IUser[]}>(
        `/api?results=${page}`,
      );
      dispatch(getUsersSuccess(data.results));
    } catch (error) {
      dispatch(getUsersFailure(`${error}`));
    }
  };
};
