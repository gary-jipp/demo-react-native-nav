module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {},
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
