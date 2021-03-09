# React Boilerplate [![Build Status](https://travis-ci.org/andrewtyl/react-boilerplate.svg?branch=master)](https://travis-ci.org/andrewtyl/react-boilerplate)
## Boilerplate
This is a boilerplate template bootstrapped and then modified with [Create React App](https://github.com/facebook/create-react-app). The modifications were made to better suit my needs compared to the standard Create React App, and hopefully they suit yours as well.

This boilerplate is setup to use HTTPS and redirect any HTTP requests to HTTPS. This will not show up locally when ran, but should function on Heroku and with Heroku's ACM.

## Set Up
1. Open a terminal and `cd` to where you want the new project folder to be.
2. In terminal, run `git clone https://github.com/andrewtyl/react-boilerplate.git NEW-PROJECT-NAME ; cd NEW-PROJECT-NAME`
3. Delete `.git` folder using a file exploring program or run `rm -rf .git` in terminal. (The folder/files may be hidden from your file explorer.)
4. In terminal, run `git init ; npm i .`
5. Create a 512x512 png of what will become your icons on browsers and mobile devices.
6. Upload that image to https://favicon.io/favicon-converter/ and download the zip file. Extract the zip file and save and replace ONLY the favicon.ico file to the repo in `./public/`
7. Upload that image again, this time to https://app-manifest.firebaseapp.com/. Fill out all the information too, and then download the zip. Extract all contents of that zip file to `./public/`
8. Update `./public/index.html`. The lines in question have comments next to them.
9. Edit `LICENSE` to include your name, the year if maintaining an MIT license. Otherwise, replace the `LICENSE` file with your own license.
10. Edit `name`, `description`, and `repository` in `package.json`
11. Edit `version`, `author`, `keywords`, and `license` in `package.json` if needed.
12. In terminal, run `npm i --package-lock`. This will automatically update the package-lock.json file to match the edited values from package.json.
13. Edit this file to include your app's name and description. It is reccomended to keep a backup of this file before altering it and add it to .gitignore or to reference the readme at https://github.com/andrewtyl/react-boilerplate/blob/master/README.md for additional information about Scripts and Deploying.

## Scripts
* `npm start` - starts the react server locally
* `npm test` - runs all test files
* `npm run build` - creates a build of the web app for deployment
* `npm run predeploy` - Updates the package-lock.json to match values on package.json, creates a build of the web app for deployment, and runs a server of the build locally

## Reccomended File Organization
* Components should be created in `./src/components/`
* Test files for components should be in `./src/components/__tests__/`
* CSS styling should be in `./src/styles/`
* Images, videos, and other loadable assets should be in `./src/assets/`

## Deployment for Heroku
1. Install the Heroku CLI using instructions from https://devcenter.heroku.com/articles/heroku-cli 
2. Create an app on Heroku. You can do this with the Heroku CLI or at https://dashboard.heroku.com/
3. Edit the settings of the newly created app to include `https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz` as a buildpack. IF THIS IS NOT DONE, THE APP WILL NOT RUN ON HEROKU.
4. Install the Travis-CI CLI using instructions from https://github.com/travis-ci/travis.rb#readme. This requires installing Ruby Version 1.9.3 or greater (2.0.0 or greater is reccomended).
5. Setup Travis-CI to automatically build pushed branches. Make sure to use travis-ci.com and not .org.
6. Edit `.travis.yml`. You can get the secure API code by running `travis encrypt $(heroku auth:token) --pro` in terminal. See the file and https://docs.travis-ci.com/user/customizing-the-build for more details.
7. Any future pushes to the master branch should automatically trigger a build to Heroku. NOTE: There is currently a bug that may show your build fails due to an incorrect API key. The deployment to Heroku should still trigger regardless, but your build will show as failing, even if every test passed. Also, any email notifications from `.travis.yml` will not trigger. Follow this issue at: https://travis-ci.community/t/heroku-deployment-fails-but-doesnt/8145/

###### License
MIT License

Copyright (c) 2020 AJessen and Andrew Jessen-Tyler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR I
