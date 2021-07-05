import {SET_COLOR_MODE} from '../types';
import {ISetColorMode, IColorMode} from '../models';

export const setColorMode = (colorMode: IColorMode): ISetColorMode => ({
  type: SET_COLOR_MODE,
  payload: colorMode,
});
