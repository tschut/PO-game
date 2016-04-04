var poGameControllers = angular.module('poGameControllers', []);

poGameControllers.controller('OverviewCtrl', function ($scope, game) {
	$scope.weeksleft = game.state.weeksleft;
});

poGameControllers.controller('BacklogCtrl', function ($scope, game) {
	$scope.backlog = game.backlog.stories;
});

poGameControllers.controller('SprintParamCtrl', function ($scope, game) {
	$scope.sprintparams = game.sprintparams;

	$scope.startSprint = function() {
		game.runSprint();
	}
});

poGameControllers.controller('SprintReviewCtrl', function ($scope, game) {
	$scope.sprintresults = game.sprintresults;
});