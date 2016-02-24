/* DIRECTIVES */
app.directive('newElement', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/template.html'
    }
});
/* to add a new directive just copy/paste and rename the directive from template
 to something else and add the file to the templates folder and link to it
 templateUrl: 'templates/somethingnew.html' */
