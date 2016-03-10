var poGame = angular.module('poGame', [
  'ngRoute',
  'poGameControllers',
  'ng-sortable',
  'rzModule'
  ]);

var BACKLOG = [
  {"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
  {"id": 2, "description": "suggestions based on previous purchases", "value": 3, "estimate": 3},
  {"id": 3, "description": "password reset", "value": 5, "estimate": 8}
];

angular.module('poGame').factory('game', function() {
  var game = {};

  game.backlog = BACKLOG;

  return game;
});

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