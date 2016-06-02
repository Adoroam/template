##Anthony's MEAN stack workflow template
template includes: node, bower, express, mongoose, gulp, sass, css, angular (cookies, animate, routes), multer(for file uploads), and supports es6(babel)
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

###File locations
- ``` dist ``` main files for the website
  - ``` dist/bow ``` bower libraries
  - ``` dist/templates ``` html for each page (shows on first gulp run) Don't touch these, they update from the src folders.
  - ``` dist/all.min.js ``` concat/minified javascript/compiled javascript (shows on first gulp run)
  - ``` dist/style.css ``` concat css (shows on first gulp run)
- ``` node_modules ``` gulp and server stuff
- ``` src ``` places to put your custom libraries
  - ``` base.scss ``` main sass file (colors, mixins, fonts, etc.)
  - ``` index ``` angular modules, services, filters, and the global controller
    - ``` app.module.js ``` angular app
    - ``` index.ctrl.js ``` angular global controller
    - ``` db1.factory.js ``` angular service (has commented out database service)
    - ``` decode.filter.js ``` angular filter
  - ``` navigation ``` persistent nav bar
    - ``` navigation.html ``` html for nav bar
    - ``` _navigation.scss ``` sass partial for nav
    - ``` nav.ctrl.js ``` angular controller for nav
    - ``` nav.dir.js ``` angular directive for nav
    - ``` nav.routes.js ``` angular routes
  - ``` home ``` homepage folder
    - ``` home.html ``` html for homepage
    - ``` home.ctrl.js ``` angular controller for homepage
    - ``` _home.scss ``` sass partial for homepage
  - ``` aa/ab ``` generic extra pages (see above)

To add another page simple create a new folder in  ``` src ``` create an html file, partial sass file, and controller (if needed). Add the partial to the base.scss file under IMPORTS. You can use the other pages as an example (folder name/partial name). Then add it to the nav.routes.js file. Lastly append it to the nav.list array in nav.ctrl.js with the title you want to show up on the nav menu, the path you added in the routes, and give it the the active property set to false.




#####Questions, Comments, Whatever:
AStabile.Design@gmail.com
