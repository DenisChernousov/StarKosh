GULP Guild mini version

Сборка без лишних модулей, для сборки простых сайтов

для установки модулей напишите
$ npm install del@6.1.1 sass gulp-sass gulp-autoprefixer gulp-group-css-media-queries gulp-include browser-sync
Состав сборки:
-del(npm i del@6.1.1 важно поставить именно эту версию, 7 уже на ES) чистим папку public
-sass & gulp-sass - подключаем SASS
-gulp-autoprefixer - вендорные префиксы
-gulp-group-css-media-queries - собираем медиа запросы в кучу
-gulp-include - компонентный подход
-browser-sync - локальный сервр

