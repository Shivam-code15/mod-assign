
(function() {
    var names = ["Shivam", "Jena", "Joana", "Jonathan", "Mittal", "Rahul", "Jessie", "Elon", "MC", "Eminem"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();




