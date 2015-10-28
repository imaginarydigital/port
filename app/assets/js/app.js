angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngMessages'
]);


// Routing configuration
angular.module('app').config(['$routeProvider', function ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainCtrl'
    })
    .when('/skills', {
      templateUrl: 'partials/skills.html',
      controller: 'MainCtrl'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'MainCtrl'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);







// Controller for application
angular.module('app').controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'];

function MainCtrl ($scope) {
  $scope.ext = "working";
}