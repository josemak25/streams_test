module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@app': ['./src'],
            '@assets': ['./assets'],
            '@typings': ['./typings'],
            '@utils': ['./src/utils'],
            '@config': ['./src/config'],
            '@screens': ['./src/screens'],
            '@constants': ['./src/constants'],
            '@providers': ['./src/providers'],
            '@navigation': ['./src/navigation'],
            '@components': ['./src/components'],
          },
        },
      ],
    ],
  };
};
