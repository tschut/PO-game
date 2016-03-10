var poGame = angular.module('poGame', [
  'ngRoute',
  'poGameControllers',
  'ng-sortable',
  'rzModule'
  ]);

var BACKLOG = [
  {"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
  {"id": 2, "description": "Suggestions based on previous purchases", "value": 3, "estimate": 3},
  {"id": 3, "description": "Password reset", "value": 5, "estimate": 8},
  {"id": 4, "description": "View basket", "value": 5, "estimate": 8},
  {"id": 5, "description": "Remove items from basket", "value": 5, "estimate": 8},
  {"id": 6, "description": "Title-based search", "value": 5, "estimate": 8},
];

angular.module('poGame').factory('game', function() {
  var game = {};

  game.backlog = BACKLOG;
  game.sprintresults = {};

  game.sprintparams = {'duration': '2'}
  game.velocity = 10; // storypoints/week

  game.runSprint = function() {
    storypointsCompleted = game.sprintparams.duration * game.velocity;
    completedStories = [];

    spcount = 0;
    for (i = 0; i < game.backlog.length; ++i) {
      spcount += game.backlog[i].estimate;
      if (spcount > storypointsCompleted) {
        break;
      };

      completedStories.push(game.backlog[i]);
      game.backlog[i].completed = true;
    }

    storypointsCompleted = 0;
    valueDelivered = 0;
    completedStories.forEach(function (story) {
      storypointsCompleted += story.estimate;
      valueDelivered += story.value;
    });
    game.sprintresults.storypoints = storypointsCompleted;
    game.sprintresults.valueDelivered = valueDelivered;
    game.sprintresults.completedStories = completedStories;
  }

  return game;
});

poGame.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/initial-product-backlog', {
      templateUrl: 'partials/initial-product-backlog.html',
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
      redirectTo: '/initial-product-backlog'
    });
  }]);