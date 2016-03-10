var poGameControllers = angular.module('poGameControllers', []);

var BACKLOG = [
	{"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
	{"id": 2, "description": "suggestions based on previous purchases", "value": 3, "estimate": 3},
	{"id": 3, "description": "password reset", "value": 5, "estimate": 8}
];

poGameControllers.controller('BacklogCtrl', function ($scope) {
	$scope.backlog = BACKLOG;
});

poGameControllers.controller('SprintParamCtrl', function ($scope) {
	
});