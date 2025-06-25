module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // if you ever add nativewind, it would go here:
      // 'nativewind/babel',
      // and reanimated must always be last:
      'react-native-reanimated/plugin',
    ],
  };
};
