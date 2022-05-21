# React Native Navigation

## Drawer Navigation

- install packages
```
npm install @react-navigation/drawer
npm install react-native-reanimated
```
- `import 'react-native-gesture-handler'` wants to be first (index or App)
- edit `babel.config.js`:  add reanimated plugin as last item
```
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
```

- Create Drawer Navigator with screens
- Add Drawer Navigator to App
- may need to clear cache to start
`npm start -- --reset-cache`

https://reactnavigation.org/docs/drawer-based-navigation