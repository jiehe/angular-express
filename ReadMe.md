GM_WMS
=========

var env = process.env.host || 'local';

var prd = process.env.NODE_ENV ;


var HOST = config.host[env];

if(prd) {
  HOST = prd;
}


File Structrue
--------------

Biz detail handling files and global tools' config files are ignored.

```text
|-- README.md                       # current file
|-- api                             # for http api controllers
|-- app.js                          # node service main processor
|-- bin                             # binary files
|   `-- www                         # web service entry
|-- bower.json                      # requrement of bower package for frontend
|-- bower_components                # bower package storage for frontend
|-- controllers                     # view controllers
|-- env                             # environment configs, for overriding `gm-open-api`
|-- gulpfile.js                     # gulp taskss
|-- logs                            # file logs
|-- node_modules                    # node package storage for backend
|-- public                          # frontend statics
|   |-- .tmp                        # in processing temp files
|   |-- dist                        # deployed statics, client accessible
|   `-- src                         # source statics, client inaccessible
|       |-- image                   # images and icons
|       |-- requirement.js          # config of `require.js`
|       |-- script                  # javascripts
|       |   |-- app.js              # main
|       |   |-- controllers         # front end controlers
|       |   `-- partials            # reuseable partials
|       `-- style                   # sheetstyles (less)
|           |-- content             # content of each theme
|           |   |-- app.less        # main
|           |   |-- controllers     # unreusable styles for each page
|           |   |-- partials        # reuseable partials
|           |   `-- theme.less      # default theme config
|           `-- theme               # theme configs
|-- utils                           # utils for backend
|   |-- cache-theme-types.js        # cache theme types for checking is theme exists
|   |-- config.js                   # this module is for override the config at `gm-open-api`, and can also require it as the truly config after once init
|   |-- enum                        # enums
|   |-- express                     # express middlewares with biz-logics
|   |-- gulp                        # gulp modules
|   |-- routers.js                  # routers
|   |-- runtime                     # runtime temp files, only generates while the service runing. files under this dir must use `~` as filename prefix
|   `-- url-mgr.js                  # url manager, it might be a module on `cnpm`
`-- views                           # backend rendering views
```