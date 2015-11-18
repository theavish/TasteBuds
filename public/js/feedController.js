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

});
