# path-organizer
Simple path organization system for your project

<hr>

You just need specify path-object in `argument`, `paths.{js|json}`-file or in `package.json` in `paths` property.

It can convert this:
<pre>
{
    config: 'config',
    src: {
        root: 'src',
        global: {
            root: 'global',
            templates: {
                root: 'templates',
                decorators: 'decorators',
                partials: 'partials',
                helpers: 'helpers',
                data: 'data'
            },
            shared: 'shared'
        },
        slides: 'slides'
    },
    dist: {
        root: 'dist',
        web: 'web',
        arch: 'arch',
        distributive: 'distributive',
        shared: 'shared'
    }
}
</pre>

into this (JSON format):

<pre>
  'paths': {
    'root': 'app',
    'config': 'app/config/',
    'src': {
      'root': 'app/src/',
      'global': {
        'root': 'app/src/global',
        'templates': {
          'root': 'app/src/global/templates/',
          'decorators': 'app/src/global/templates/decorators/',
          'partials': 'app/src/global/templates/partials/',
          'helpers': 'app/src/global/templates/helpers/',
          'data': 'app/src/global/templates/data/'
        },
        'shared': 'app/src/global/shared/'
      },
      'slides': 'app/src/slides/'
    },
    'dist': {
      'root': 'app/dist/',
      'web': 'app/dist/web',
      'arch': 'app/dist/arch/',
      'distributive': 'app/dist/distributive/',
      'assets': 'assets'
    }
  }
</pre>

## appPaths([pathsObj, rootTitle, rootFolderName])
### returns flat path object `{}`

 `pathsObj` - default is from `paths.js` (or `paths.json`) or `paths: {...}` property in `package.json`;
 
 `rootFolderName` - default is `app`;
 
 `rootTitle` - default is `root`. It is just helper for path splitting
