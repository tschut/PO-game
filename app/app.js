

var poGame = angular.module('poGame', [
  'ui.router',
  'poGameControllers',
  'ng-sortable'
  ]);

angular.module('poGame').factory('game', function() {
  var game = new Game();

  return game;
});

poGame.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/initial-product-backlog");

  $stateProvider.
    state('/initial-product-backlog', {
      url: '/initial-product-backlog',
      templateUrl: 'partials/initial-product-backlog.html',
      controller: 'BacklogCtrl'
    }).
    state('/sprint-parameters', {
      url: '/sprint-parameters',
      templateUrl: 'partials/sprint-parameters.html',
      controller: 'SprintParamCtrl'
    }).
    state('/sprint-review', {
      url: '/sprint-review',
      templateUrl: 'partials/sprint-review.html',
      controller: 'SprintReviewCtrl'
    }).
    state('/sprint-planning', {
      url: '/sprint-planning',
      templateUrl: 'partials/sprint-planning.html',
      controller: 'BacklogCtrl'
    });
});
