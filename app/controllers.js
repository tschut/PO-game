var poGame = angular.module('poGame', ['ng-sortable']);

var BACKLOG = [
	{"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
	{"id": 2, "description": "suggestions based on previous purchases", "value": 3, "estimate": 3},
	{"id": 3, "description": "password reset", "value": 5, "estimate": 8}
];

poGame.controller('BacklogCtrl', function ($scope) {
	$scope.backlog = BACKLOG;
});