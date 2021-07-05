import {hexToRGB} from '../../src/utils';

/**
 * @format
 */

describe('testing hexToRGB function', () => {
  it('should return correctly converted font', () => {
    const whiteColor = '#FFFFFF';
    const rgbaWhite = hexToRGB(whiteColor);
    expect(rgbaWhite).toBe('rgb(255,255,255)');
  });
});
