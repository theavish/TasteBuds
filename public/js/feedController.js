angular.module('tastebuds', [])

.controller('feedController', function($scope, $http) {
  var postPicture = $http({
    method: 'GET',
    url: '/posts'
  }).then(function(response) {
    // when the response is available
    if (response.image) {
      console.log($scope.image);
      $scope.image = response.data.image;
    }

  }, function errorCallback(error) {
    // or server returns response with an error status.
    //run error
    if (error) {
      console.log('feedController error!');
    }


  });


  // .controller('profileController', function($scope, $http) {
  //     $scope.profile = {
  //         username: users.username,
  //         posts: [],
  //         wantToEat: []
  //     };
  //     $scope.getPosts = $http.get({
  //         method: 'GET',
  //         url: '/posts'
  //     }).then(function(posts) {
  //         return posts;
  //     });
  //     $scope.getEats = $http.get({
  //         method: 'GET',
  //         // can this url be directed at the getEats row in the posts table?
  //         url: '/posts'
  //     }).then(function(eat) {
  //         wantToEat.push(eat);
  //     });
  // });


});
