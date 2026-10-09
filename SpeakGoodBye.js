// Prints "Goodbye Name" for names that start with J or j.
(function (global) {
  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  // Make the speaker available to the other script files.
  global.byeSpeaker = byeSpeaker;
})(window);
