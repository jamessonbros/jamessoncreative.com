jamessoncreative.com
====================

A static, single-pager site for JC.

## Developing Locally

1. Clone the repo
2. `cd` into the project and run `npm install`
3. Run `node server.js` from the root to start up a local server at [localhost:3000](http://localhost:3000/)
4. `CTRL-C` to stop the local server

## Deploying

We're using Grunt to deploy. It loads a `.gitignore`d file in the project root, `secrets.json`.

Place deployment info in `secrets.json`, like this:

    {
      "rsync": {
        "prod": {
          "host": "hostname",
          "dest": "path/to/dest"
        }
      }
    }

## ToDo

* Compile Less
* Import only needed bootstrap less files
* Concat bootstrap and app scripts (usemin)
* Determine need for jQuery/BtSt scripts?

## Changelog

### 2013.11.13

* Introduce Grunt
* Grunt-rsync for deployment
* Introduce imagemin into Gruntfile
* Move files into `app/` dir
* Local server for development, using `node-static` and a simple `server.js` script
