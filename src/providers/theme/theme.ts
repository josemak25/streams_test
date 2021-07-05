// import original module declarations
import 'styled-components';

// All app colors
export enum LIGHT_MODE_COLORS {
  WHITE = '#FFFFFF',
  BACKGROUND = '#FAFBFD',
  RED = '#F26651',
  BLUE = '#18355E',
  GREEN = '#49B8A9',
  BLACK = '#171717',
  GRAY_ZERO = '#333333',
  GRAY_ONE = '#666666',
  GRAY_TWO = '#B8B8B8',
  GRAY_THREE = '#AFAFAF',
  GRAY_FOUR = '#848484',
  GRAY_FIVE = '#E0E0E0',
  GRAY_SIX = '#E8E8E8',
  TRANSPARENT = 'transparent',
}

export enum DARK_MODE_COLORS {
  WHITE = '#161B23',
  BACKGROUND = '#161B23',
  RED = '#F26651',
  BLUE = '#FFFFFF',
  GREEN = '#49B8A9',
  BLACK = '#FFFFFF',
  GRAY_ZERO = '#EFEFEF',
  GRAY_ONE = '#E8E8E8',
  GRAY_TWO = '#666666',
  GRAY_THREE = '#AFAFAF',
  GRAY_FOUR = '#AFAFAF',
  GRAY_FIVE = '#E0E0E0',
  GRAY_SIX = '#333333',
  TRANSPARENT = 'transparent',
}

// All app font
export enum FONTS {
  ROBOTO_BOLD = 'robotoBold',
  ROBOTO_LIGHT = 'robotoLight',
  ROBOTO_MEDIUM = 'robotoMedium',
  ROBOTO_REGULAR = 'robotoRegular',
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors typings
    colors: typeof DARK_MODE_COLORS | typeof LIGHT_MODE_COLORS;
    // All Global App Font typings
    fonts: typeof FONTS;
    // App dark mode condition
    isDarkMode: boolean;
    // Toggle between light and dark mode
    toggleTheme: () => void;
    // Scale app fonts
    scale: (value: number) => number;
    // App color converter
    hexToRGB: (hexColor: string, alpha?: number | undefined) => string;
  }
}
