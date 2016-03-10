var poGame = angular.module('poGame', [
  'ngRoute',
  'poGameControllers',
  'ng-sortable',
  'rzModule'
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
    when('/sprint-review', {
      templateUrl: 'partials/sprint-review.html',
      controller: 'SprintReviewCtrl'
    }).
    otherwise({
      redirectTo: '/product-backlog'
    });
  }]);