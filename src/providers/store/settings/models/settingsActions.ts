import {SET_COLOR_MODE} from '../types';
import {IColorMode} from '../models';

export interface ISetColorMode {
  type: typeof SET_COLOR_MODE;
  payload: IColorMode;
}

export type SettingsActionTypes = ISetColorMode;
