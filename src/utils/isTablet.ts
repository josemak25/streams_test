import {TABLET_DIMENSION} from '@app/constants';
import {Dimensions} from 'react-native';

/**
 *
 * @description scale a method for scaling app fonts based off the pixel density of the users phone
 * @function isTablet
 * @returns boolean
 */
const isTablet = () => {
  const {width, height} = Dimensions.get('window');
  return Math.min(width, height) > TABLET_DIMENSION;
};

export default isTablet;
