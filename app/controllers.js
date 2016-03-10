var poGameControllers = angular.module('poGameControllers', []);

poGameControllers.controller('BacklogCtrl', function ($scope, game) {
	$scope.backlog = game.backlog;
});

poGameControllers.controller('SprintParamCtrl', function ($scope) {
	$scope.sprint = {duration: "2"}
});

poGameControllers.controller('SprintReviewCtrl', function ($scope) {
	
});