

var poGame = angular.module('poGame', [
  'ui.router',
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
  var game = new Game();
  game.state = {};

  game.state.weeksleft = 26;

  game.backlog = BACKLOG;
  game.sprintresults = {};

  game.sprintparams = {'duration': '2'}
  game.velocity = 10; // storypoints/week

  game.runSprint = function() {
    storypointsCompleted = game.sprintparams.duration * game.velocity;
    completedStories = [];

    spcount = 0;
    completedIndexes = [];
    for (i = 0; i < game.backlog.length; ++i) {
      spcount += game.backlog[i].estimate;
      if (spcount > storypointsCompleted) {
        break;
      };

      newStory = jQuery.extend(true, {}, game.backlog[i]);
      console.log(newStory);
      completedStories.push(newStory);
    }

    storypointsCompleted = 0;
    valueDelivered = 0;
    completedStories.forEach(function (story) {
      storypointsCompleted += story.estimate;
      valueDelivered += story.value;

      console.log('filter', game.backlog.filter(function(backlog_story) {return backlog_story.id != story.id}));
      game.backlog = game.backlog.filter(function(backlog_story) {return backlog_story.id != story.id});
    });
    game.sprintresults.storypoints = storypointsCompleted;
    game.sprintresults.valueDelivered = valueDelivered;
    game.sprintresults.completedStories = completedStories;

    console.log('backlog', game.backlog)
    console.log('completed', game.sprintresults.completedStories)
  }

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
