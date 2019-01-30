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
import "./BEM/base.styl";
import "./BEM/site-content/site-content.styl";
import "./BEM/wrap/wrap.styl";

//require.context(directory, useSubdirectories = false, regExp = /^\.\//);