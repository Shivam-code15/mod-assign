(function (window) {
	var helloSpeaker = new Object();
    // helloSpeaker.names =  ["Shivam", "Mittal", "Jena", "Jennifer", "Joana", "Jessy", "Thomas", "Gnat"];
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        //for (var i = 0; i < helloSpeaker.names.length; i++) {
        
        console.log(speakWord + " " + name);
        
    
    //}
	
};
window.helloSpeaker = helloSpeaker;
})(window);
