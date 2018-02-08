(function () {
    const flatten = require('flat');
    const unflatten = flatten.unflatten;

    const path = require('path');
    const __approotpath = require('app-root-path').path;

    function appPaths (pathsObj, rootFolderName, rootTitle) {
        let myPaths =   pathsObj ||
                        require( path.join(__approotpath, 'paths') ) ||
                        require( path.join(__approotpath,'package.json') ).paths;
        if (!myPaths) {
            throw "Error! paths Object isn\'t specified!" +
                "\nPlease specify it in argument, paths.{js|json}"+
                " or \'package.json\' in 'paths' property";
        }

        rootFolderName = rootFolderName || 'app';
        rootTitle = rootTitle || 'root';
        let flattenPaths = flatten(myPaths, {delimiter: '/'});

        if (flattenPaths.root) {
            rootFolderName = flattenPaths.root;
            delete flattenPaths.root;
        }


        for (singlePath in flattenPaths) {
            flattenPaths[singlePath] = './' + rootFolderName + '/' + singlePath.replace('/' + rootTitle,'');
        }

        let normalizedPaths = unflatten(flattenPaths, {
            object: true,
            delimiter: '/',
            overwrite: true
        });

        normalizedPaths.root = rootFolderName;

        return normalizedPaths;
    }

    module.exports = appPaths;
})();
