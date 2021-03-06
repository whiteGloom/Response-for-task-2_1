// External modules
const path  = require('path');								// Плагин для упрощения работы с путями
const merge = require('webpack-merge');						// Плагин для соединения модулей конфига

//
var folder = path.join(__dirname);							// Переменная, хранящая абсолютный путь до рабочего каталога

// Local modules
const base   = require(folder + "/webpackAdds/base.js");	// Файл с основной информацией
const babel  = require(folder + "/webpackAdds/babel.js");	// Файл с инструкциями для обработки JS файлов
const pug 	 = require(folder + "/webpackAdds/pug.js");		// Файл с инструкциями для обработки Pug файлов (препроцессор для HTML)
const stylus = require(folder + "/webpackAdds/stylus.js");  // Файл с инструкциями для обработки stylus файлов (препроцессор для CSS)
const static = require(folder + "/webpackAdds/static.js");  // Файл с инструкциями для обработки статики

// Configuration
module.exports = function() {								// Функция, собирающая модули 
	return merge([
		base({base: folder}),
		babel(),
		pug({base: folder}),
		stylus(),
		static()
	])
}

// -whiteGloom
