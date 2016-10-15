angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  if (!Auth.isAuth()) {
    $location.path('/signin');  
  }

  $scope.data = {};

  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });

});
