tastebuds = angular.module('tastebuds', [
  'ui.router',
  'feedController',
  'landingController',
  'profileController',
  'uploadController'
]);

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  ​
  $stateProvider
    .state('upload', {
      url: '/upload',
      templateUrl: 'views/upload-page.html',
      controller: 'uploadController'
    });
    .state('home', {
      url: '/home',
      templateUrl: 'views/feed.html',
      controller: 'feedController'
    })
    .state('posts', {
      url: '/profile',
      templateUrl: 'views/upload-page',
      controller: ''
    })
    .state('wantToTry', {
      url: '/wantToTry',
      templateUrl: 'views/want-to-try.html'
    })
}]);
