declare module NodeJS {
  /**
   * extending global app environment console object to inject custom tron logger
   * @interface Console global app console typings
   */
  interface Console {
    tron: (...args: any[]) => void;
  }
}
