var BACKLOG = [
  {"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
  {"id": 2, "description": "Suggestions based on previous purchases", "value": 3, "estimate": 3},
  {"id": 3, "description": "Password reset", "value": 5, "estimate": 8},
  {"id": 4, "description": "View basket", "value": 5, "estimate": 8},
  {"id": 5, "description": "Remove items from basket", "value": 5, "estimate": 8},
  {"id": 6, "description": "Title-based search", "value": 5, "estimate": 8},
];

function Game() {
	this.backlog = BACKLOG;
}