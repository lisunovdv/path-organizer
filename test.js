(function () {
	const getAppPaths = require('./index');
	const sampleConfig = require('./paths-sample');
	const myPaths = getAppPaths(sampleConfig);
	require('fs').writeFileSync('test-paths.json', JSON.stringify(myPaths));
	console.log('Verify test-paths.json file.');
})();