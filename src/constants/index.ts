/*
 ****************************************************************
 ******************    ALL APP CONSTANTS   **********************
 ****************************************************************
 */

/**
 * extending app global constants for page loading
 * @constant PAGINATION_DEFAULT default value
 */
export const PAGINATION_DEFAULT: number = 20;

/**
 * extending app global constants
 * @constant CACHE_TIME default value
 */
export const CACHE_TIME: number = 1000 * 60; // 1 minute for testing;

/**
 * extending app global constants
 * @constant DEFAULT_BASE_URI default value
 * App api end point for testing, basically this usually should come from an environment variable
 */
export const DEFAULT_BASE_URI: string = 'https://randomuser.me';

/**
 * extending app global constants
 * @constant CACHE_VERSION default value
 */
export const CACHE_VERSION: number = 1; // version 1

/**
 * extending app global constants
 * @constant CACHE_KEY default value
 */
export const CACHE_KEY: string = '@CONTEXT_LOCAL_PERSISTANCE_KEY';

/**
 * extending app global constants
 * @constant TABLET_DIMENSION default value
 */
export const TABLET_DIMENSION: number = 450;
