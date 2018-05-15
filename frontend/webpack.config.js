//primeiro faz uma referência do webpack instalado
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//exporta o objeto que irá conter todas as configurações pro projeto
module.exports={
    //arquivo/página de entrada/inicialização do projeto
    entry: './src/index.jsx',
    //saída 
    output:{
        //__dirname é um comando do node do caminho atual
        path: __dirname +'/public',
        filename:'./app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    //Resolver as extensões solicitadas e aponta pra pasta do node
    resolve:{
        extensions:['', '.js', '.jsx'],
        alias: {
            modules: __dirname +'/node_modules'
        }
    },
    //CSS
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    //Module diz quais tipos de arquivos irá ler e que tipos de preset 
    //irão ser aplicados
    module:{
        loaders:[{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}