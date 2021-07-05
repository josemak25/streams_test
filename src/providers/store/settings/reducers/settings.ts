import {Appearance} from 'react-native';
import {SET_COLOR_MODE} from '../types';
import {SettingsActionTypes, IColorMode, ISettingsState} from '../models';

export const initialState: ISettingsState = {
  colorMode: Appearance.getColorScheme() as IColorMode,
};

export default (
  state: ISettingsState = initialState,
  action: SettingsActionTypes,
): ISettingsState => {
  switch (action.type) {
    case SET_COLOR_MODE:
      return {...state, colorMode: action.payload};

    default:
      return state;
  }
};
