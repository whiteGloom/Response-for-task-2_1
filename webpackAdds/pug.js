/*
    Файл с инструкциями для обработки Pug файлов.
*/

const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = function(options) {
    var options = options ? options : {};
    var base = options.base;
    return {
        module: {
            rules: [
				{
				    test: /\.(pug|html)/,
				    loader: 'pug-loader',
					exclude: /[\\/]node_modules[\\/]/
				}
            ]
        },
        plugins: [
			new HTMLWebpackPlugin({
				template: base + "/dev/views/index.pug",
				filename: 'index.html',
				inject: false,												// Параметр, отключающий включение в конечный HTML ссылок на собранные файлы CSS, JS и т.д.
				minify: false												// Параметр, отключающий минификацию конечного HTML
			}),
	        new HtmlBeautifyPlugin({
		        config: {
		            html: {
		                indent_with_tabs: true,								// Параметр, отвечающий за табуляцию отступов
		                inline: [],											// Параметр, обнуляющий массив инлайновых тэгов
		                unformatted: ['p', 'i', 'b', 'span']				// Параметр, содержащий массив необрабатываемых тегов ( по умолчанию содержит тэги, перечисленные в inline)
		            }
		        }
		    })
		]
    }
};

// -whiteGloom
