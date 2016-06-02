app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        redirectTo: "/home"
      })
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl as home'
      })
     .when('/pagetwo', {
        templateUrl: 'templates/aa.html',
        controller: 'aaCtrl as aa'
     })
     .when('/pagethree', {
        templateUrl: 'templates/ab.html',
        controller: 'abCtrl as ab'
     })
      .otherwise({
        redirectTo: "/home"
      });
}]);
