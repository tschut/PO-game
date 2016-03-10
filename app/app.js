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
    when('/sprint-parameters', {
      templateUrl: 'partials/sprint-parameters.html',
      controller: 'SprintParamCtrl'
    }).
    otherwise({
      redirectTo: '/product-backlog'
    });
  }]);