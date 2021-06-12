(function (window) {
	var helloSpeaker = {};
    var speakWord = "Hi ";
    helloSpeaker.name = "Mittal";
    helloSpeaker.sayHi = function () {
	console.log(speakWord + helloSpeaker.name);
}
window.helloSpeaker = helloSpeaker;
})(window);
