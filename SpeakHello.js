// Prints "Hello Name" for names that do not start with J or j.
(function (global) {
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // Make the speaker available to the other script files.
  global.helloSpeaker = helloSpeaker;
})(window);
