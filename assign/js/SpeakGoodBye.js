(function (window) {
	var byeSpeaker = new Object();
    // byeSpeaker.names = ["Shivam", "Mittal", "Jena", "Jennifer", "Joana", "Jessy", "Thomas", "Gnat"];
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
    	// for (var i = 0; i < byeSpeaker.names.length; i++) {
    	
        console.log(speakWord + " " + name);
        
    
    // }


	
};
window.byeSpeaker = byeSpeaker;
})(window);