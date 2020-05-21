import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
// this file will replace all the expected.js files with their _actual
// equivalents. Only use it when you're sure that you haven't
// broken anything!
const svelte = (function loadSvelte(test) {
	process.env.TEST = test ? 'true' : '';
	const resolved = require.resolve('../../compiler.js');
	delete require.cache[resolved];
	return require(resolved);
})(false);
function loadConfig(file) {
	try {
		const resolved = require.resolve(file);
		delete require.cache[resolved];

		const config = require(resolved);
		return config.default || config;
	} catch (err) {
		if (err.code === 'MODULE_NOT_FOUND') {
			return {};
		}

		throw err;
	}
}
require(resolve(__dirname, '../tiny-glob.ts'))
	.glob('samples/*/_actual.js', { cwd: __dirname })
	.forEach((file) => {
		writeFileSync(
			`${__dirname}/${file.replace('_actual.js', 'expected.js')}`,
			svelte
				.compile(
					readFileSync(`${__dirname}/${file.replace('_actual.js', 'input.svelte')}`, 'utf-8').replace(/\s+$/, ''),
					loadConfig(`${__dirname}/${file.replace('_actual.js', '_config.js')}`).options
				)
				.js.code.replace(/generated by Svelte v\d+\.\d+\.\d+(-\w+\.\d+)?/, 'generated by Svelte vX.Y.Z')
		);
	});