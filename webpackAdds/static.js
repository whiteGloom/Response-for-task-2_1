/*
    Файл с инструкциями для обработки статики ( изображений, векторов, шрифтов и т.п. ).
    Добавляет в список обработчиков лоадер сборщика для статики и папку для неё ( по умолчанию выводится по пути, указанном в output ).
*/

module.exports = function(paths) {
    return {
        module: {
            rules: [
				{
					test:  /\.(jpe?g|gif|png|svg)/,
					loader: "file-loader",
				    options: {
				      	outputPath: 'static/images',
				      	name: '[name].[ext]'
				    },
					exclude: /node_modules/
				},
				{
					test:  /\.(woff|otf|ttf|eot)/,
					loader: "file-loader",
				    options: {
				      	outputPath: 'static/fonts',
				      	name: '[name].[ext]'
				    },
					exclude: /node_modules/
				}
            ]
        }
    }
};

// -whiteGloom
