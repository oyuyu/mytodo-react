module.exports={
    presets:["module:metro-react-native-bable-preset"],
    plugins: [

        ['@babel/plugin-proposal-decorators',
         {'legacy': true}
        ]   
    ]
}