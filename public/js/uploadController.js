angular.module('tastebuds', [])

.factory('uploadFactory', function($http) {
  return {
    sendData: function() {
      return $http({
        url: '/posts',
        method: "POST",
        data: {
          'username': 'username',
          'picture': 'picture url',
          'comment': 'user\'s comment',
          'reccomendation': true
        }
      });
    }

  };
})

.controller('uploadController', function($scope, $http, uploadFactory) {
  var self = this;
  self.bullshit = 'ricky';
  self.postData = function() {
    console.log('postData fires');
    uploadFactory.sendData()
    .then(function(res) {
      console.log(res.data);
    });
  };
});
