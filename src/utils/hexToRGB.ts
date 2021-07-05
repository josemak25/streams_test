/**
 *
 * @description hexToRGB a method for converting hex colors to rgb and rgba colors
 * @function hexToRGB
 * @property hexColor {string}
 * @property alpha {number}
 * @returns string
 */

export default function hexToRGB(hexColor: string, alpha?: number): string {
  //@ts-ignore
  const [r, g, b] = hexColor.match(/\w\w/g).map(x => parseInt(x, 16));
  return alpha ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
}
