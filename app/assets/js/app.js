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
  $scope.projects = [
    {
      projectName: 'Panther Graphics',
      image: 'panther-graphics.png',
      githubPage: 'http://taylorjeii.github.io/Panther-Graphics-master/#/',
      code: 'https://github.com/taylorjeii/Panther-Graphics-master/tree/gh-pages',
      alt: 'Panther Graphics'
    },
    {
      projectName: 'Lottery Number Frequency',
      image: 'lottery.png',
      githubPage: 'http://taylorjeii.github.io/Lottery-Number-Frequency/',
      code: 'https://github.com/taylorjeii/Lottery-Number-Frequency',
      alt: 'Lottery-Number-Frequency'
    },
    // {
    //   projectName: 'Countries & Capitals',
    //   image: 'countries.png',
    //   githubPage: 'http://taylorjeii.github.io/countries-and-capitals/#/',
    //   code: 'https://github.com/taylorjeii/countries-and-capitals',
    //   alt: 'Countries and Capitals Application'
    // },
    {
      projectName: 'Instagram Searcher',
      image: 'igSearcher.png',
      githubPage: 'http://taylorjeii.github.io/Instagram-Searcher/',
      code: 'https://github.com/taylorjeii/Instagram-Searcher',
      alt: 'Instagram Search Application'
    },
    {
      projectName: 'NgMadLib',
      image: 'ngmadlib.png',
      githubPage: 'http://taylorjeii.github.io/ngMadLib/',
      code: 'https://github.com/taylorjeii/ngMadLib',
      alt: 'NgMadLib Application'
    }
  ];

  // Form Validation
  $scope.submit = function(contactform){
    if(contactform.$valid){
      console.log('form valid');
      $('#contactform :input').attr('disabled', 'disabled');
        $('#contactform').fadeTo( "slow", 0.15, function() {
            $(this).find(':input').attr('disabled', 'disabled');
            $(this).find('label').css('cursor','default');
            $('#success').fadeIn();
        });
    }else{
      $scope.valid = false;
    }
  };

}