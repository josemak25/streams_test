import {EdgeInsets} from 'react-native-safe-area-context';

interface ViewEdgeInsets {
  insets: EdgeInsets;
}

declare global {
  /**
   * extending global app environment console object to inject custom tron logger
   * @interface Console global app console typings
   */
  interface Console {
    tron: (...args: any[]) => void;
  }
}
