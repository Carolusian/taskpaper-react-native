// add settings for react-native-typescript-transformer
module.exports = {
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
        return ['ts', 'tsx']
    }
}