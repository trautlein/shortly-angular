angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin');  
  }
  $scope.link = {};
  $scope.addLink = function (data) {
    Links.addOne(JSON.stringify({url: data}));
    console.log(data);
  };
});