import path from 'path';
import { glob } from 'glob';
import mix from 'laravel-mix';
import autoprefixer from 'autoprefixer';

mix.setResourceRoot('/dist');
mix.setPublicPath('dist')
mix.disableNotifications();

glob.sync('src/scss/*.scss').forEach(file => {
	const fileName = path.basename(file, '.scss');
	mix.sass(file, 'dist/css/' + fileName + '.css');
});

glob.sync('dist/css/*.css').forEach(file => {
	const fileName = path.basename(file, '.css');
	mix.minify(`dist/css/${fileName}.css`);
});

mix.copyDirectory('src/js', 'dist/js');

mix.options({
	processCssUrls: false,
	postCss: [
		autoprefixer({
			overrideBrowserslist: [
				"> 1%",
				"last 2 versions",
				"not dead",
				"last 4 version"
			]
		})
	]
});
