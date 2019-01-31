/*
	Рабочий файл, в котором указываются подключаемые файлы и т.д..

	Примеры подключения:
	import "./scripts.js"	- Поключение файлов JS
	import "./index.pug"	- Поключение файлов Pug
	import "./styles.styl"	- Поключение сами догадайтесь каких файлов

	Импорт статики в html просиходит через require ( <img src=require("./path/file") ).
	Импорт статики в CSS происходит как обычно.
	
	-whiteGloom
*/

import "./views/index.pug";

var cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context("./static/styles/", true, /\.styl$/));
importAll(require.context("./static/fonts/", true, /\.otf$|\.ttf$|\.woff$|\.svg$|\.eot$/));