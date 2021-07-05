import Reactotron from 'reactotron-react-native';
import {NativeModules} from 'react-native';
import axios from 'axios';
import {DEFAULT_BASE_URI} from '../constants';
import {reportError} from '../utils';

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];

  Reactotron.configure({host: scriptHostname}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  //@ts-ignore
  console.tron = Reactotron.log;
}

// Set config defaults when creating the instance
export const axiosInstance = axios.create({baseURL: DEFAULT_BASE_URI});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  response => response,
  error => {
    reportError(error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  response => response,
  error => {
    reportError(error);
    return Promise.reject(error);
  },
);
