var poGame = angular.module('poGame', [
  'ngRoute',
  'poGameControllers',
  'ng-sortable'
  ]);

poGame.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/product-backlog', {
      templateUrl: 'partials/product-backlog.html',
      controller: 'BacklogCtrl'
    }).
    otherwise({
      redirectTo: '/product-backlog'
    });
  }]);