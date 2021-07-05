import {PixelRatio} from 'react-native';
import {isTablet} from './isTablet';

/**
 *
 * @description scale a method for scaling app fonts based off the pixel density of the users phone
 * @function scale
 * @property size {number}
 * @returns number
 */
export const scale = (size: number) => {
  const density = isTablet() ? 1.2 : 1;
  return Math.round(PixelRatio.roundToNearestPixel(size * density));
};
