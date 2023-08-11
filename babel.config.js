module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@smartface-generated': './.smartface/generated',
                    '@app': './app',
                },
            },
            'react-native-reanimated/plugin'
        ],
    ],
};
