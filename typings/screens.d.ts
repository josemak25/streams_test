/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type HomeStackParamList = {
  HomeScreen: undefined;
  NotFoundScreen: undefined;
};

// App Navigation prop types
export type RootStackParamList = HomeStackParamList;

export type RootStackScreensList = 'HomeScreen' | 'NotFoundScreen';
