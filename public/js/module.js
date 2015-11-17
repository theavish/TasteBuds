angular.module('tastebuds', [
  'ui.router',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('upload', {
      url: '/upload',
      templateUrl: '../views/upload-page.html',
      controller: 'uploadController'
    })
    .state('home', {
      url: '/home',
      templateUrl: '../views/landing-page.html',
      controller: 'landingController'
    })
    .state('feed', {
      url: '/feed',
      templateUrl: '../views/feed.html',
      controller: 'feedController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '../views/user-profile.html',
      controller: 'profileController'
    });
    // .state('wantToTry', {
    //   url: '/wantToTry',
    //   templateUrl: '../views/want-to-try.html'
    //   contr
    // });
}]);
