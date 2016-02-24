##Anthony's MEAN stack workflow template
template includes: node, bower, express, mongoose, gulp, sass, css, angular, angular-cookies template
###Things you will need installed
- git https://git-scm.com/downloads
- nodejs (and npm if you're running linux) https://nodejs.org/
- bower (npm install -g bower)
- gulp (npm install -g gulp)
- mongodb https://www.mongodb.org/

###How to set up
- clone to a folder 
  - ``` git clone https://github.com/Adoroam/template.git ```
- cd to that folder 
  - ``` cd template ```
- install node dependencies
  - ``` npm install ```
- install bower libraries (the .bowerrc file saves the modules to dist/bow for easier linking)
  - ``` bower install ```
- update name, description, and anything else in ``` package.json/bower.json ``` and the title in ``` dist/index.html ```
- start your mongodb (run mongod.exe in the directory where you installed mongodb for windows)
- open your terminal/emulator of choice in the root directory and run gulp
  - ``` gulp ``` or ``` gulp dev ``` if you want it to keep updating while you're working on it
- now you should be able to go to ``` localhost ``` in your browser and check it out. when you save any important files, it should auto reload in the browser

###File locations (out of date)
- ``` dist ``` main files for the website
  - ``` dist/bow ``` bower libraries
  - ``` dist/templates ``` individual templates for your views and navigation
  - ``` dist/all.min.js ``` concat/minified javascript/compiled javascript (shows on first gulp run)
  - ``` dist/style.css ``` concat css (shows on first gulp run)
- ``` node_modules ``` gulp and server stuff
- ``` src ``` places to put your custom libraries
  - ``` src/css ``` put css files here
    - ``` src/css/sass/sass.scss ``` starter sass file
  - ``` src/js ``` put javascript files here
    - ``` src/js/app.js ``` angular app
    - ``` src/js/controllers.js ``` angular controllers
    - ``` src/js/directives.js ``` angular directives
    - ``` src/js/filters.js ``` angular filters
    - ``` src/js/services.js ``` angular services


#####Questions, Comments, Whatever:
AStabile.Design@gmail.com
