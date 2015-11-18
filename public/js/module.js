angular.module('tastebuds', [
  'ui.router',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('upload', {
      url: '/upload',
      templateUrl: '../views/upload-page.html',
      controller: 'uploadController'
    })
    .state('home', {
      url: '/',
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
    })
    .state('profile.postList', {
      url: '/post-list',
      templateUrl: '../views/post-list.html',
      controller: function($scope) {
        $scope.dogs = ['fuck', 'poop', 'shit']
      }
    })
    .state('profile.eatList', {
      url: '/want-to-try',
      templateUrl: '../views/want-to-try.html'
    })
    // .state('wantToTry', {
    //   url: '/wantToTry',
    //   templateUrl: '../views/want-to-try.html'
    //   contr
    // });
}]);
