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
  this.revenue = 0;
  this.velocity = 10; // storypoints / week
}

function Backlog() {
  var stories = BACKLOG;

  this.getStories = function() {
    return stories;
  }

  this.completeStoryPoints = function(points) {
    completedStories = [];
    spcount = 0;
    for (i = 0; i < stories.length; ++i) {
      spcount += stories[i].estimate;
      if (spcount > storypointsCompleted) {
        break;
      };

      newStory = jQuery.extend(true, {}, stories[i]);
      completedStories.push(newStory);
    }

    completedStories.forEach(function (story) {
      stories = stories.filter(function(backlog_story) {return backlog_story.id != story.id});
    });
    return completedStories;
  }
}

function SprintResults(stories) {
  this.stories = stories;

  this.sp = stories.reduce( (a, b) => a + b.estimate, 0);
  this.val = stories.reduce( (a, b) => a + b.value, 0);
}

function Game() {
  this.backlog = new Backlog();
  this.state = new GameState();

  this.sprintparams = {'duration': '2'}

  this.runSprint = function() {
    storypointsCompleted = this.sprintparams.duration * this.state.velocity;
    
    completedStories = this.backlog.completeStoryPoints(storypointsCompleted);

    this.sprintresults = new SprintResults(completedStories);

    this.state.weeksleft -= this.sprintparams.duration;
    this.state.revenue += (this.state.revenue * this.sprintparams.duration) + this.sprintresults.val;

    console.log('backlog', this.backlog.getStories())
    console.log('completed', this.sprintresults.stories)
  }
}