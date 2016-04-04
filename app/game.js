var BACKLOG = [
{"id": 1, "description": "1-click checkout", "value": 1, "estimate": 3},
{"id": 2, "description": "Suggestions based on previous purchases", "value": 3, "estimate": 3},
{"id": 3, "description": "Password reset", "value": 5, "estimate": 8},
{"id": 4, "description": "View basket", "value": 5, "estimate": 8},
{"id": 5, "description": "Remove items from basket", "value": 5, "estimate": 8},
{"id": 6, "description": "Title-based search", "value": 5, "estimate": 8},
];

function GameState() {
  this.weeksleft = 26;
  this.velocity = 10; // storypoints / week
}

function Backlog() {
  this.stories = BACKLOG;
}

function Game() {
  this.backlog = new Backlog();
  this.state = new GameState();

  this.sprintresults = {};

  this.sprintparams = {'duration': '2'}

  this.runSprint = function() {
    storypointsCompleted = this.sprintparams.duration * this.state.velocity;
    completedStories = [];

    spcount = 0;
    completedIndexes = [];
    for (i = 0; i < this.backlog.stories.length; ++i) {
      spcount += this.backlog.stories[i].estimate;
      if (spcount > storypointsCompleted) {
        break;
      };

      newStory = jQuery.extend(true, {}, this.backlog.stories[i]);
      console.log(newStory);
      completedStories.push(newStory);
    }

    storypointsCompleted = 0;
    valueDelivered = 0;
    completedStories.forEach(function (story) {
      storypointsCompleted += story.estimate;
      valueDelivered += story.value;

      console.log('filter', this.backlog.stories.filter(function(backlog_story) {return backlog_story.id != story.id}));
      this.backlog.stories = this.backlog.stories.filter(function(backlog_story) {return backlog_story.id != story.id});
    }, this);
    this.sprintresults.storypoints = storypointsCompleted;
    this.sprintresults.valueDelivered = valueDelivered;
    this.sprintresults.completedStories = completedStories;

    console.log('backlog', this.backlog.stories)
    console.log('completed', this.sprintresults.completedStories)
  }
}