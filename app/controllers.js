var poGame = angular.module('poGame', ['ng-sortable']);

var BACKLOG = [
	{"id": 1, "description": "1-click checkout"},
	{"id": 2, "description": "suggestions based on previous purchases"},
	{"id": 3, "description": "password reset"}
];

poGame.controller('BacklogCtrl', function ($scope) {
	$scope.backlog = BACKLOG;
});