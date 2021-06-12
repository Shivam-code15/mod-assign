// (function () {
// 	var names = ["Shivam", "Mittal", "John", "Jessie", "Jena", "Jonathan", "Jaadu", "Samanatha", "Guddu"];
// 	for (var i = 0; i < names.length; i++) {
// 		console.log("hello: " + names[i]);
		(function (window) {
			var byeSpeaker = {};
			byeSpeaker.name = "Shivam";
			var speakWord = "Good Bye";
			byeSpeaker.sayBye = function () {
				console.log(speakWord + " " + byeSpeaker.name);
			}
			window.byeSpeaker = byeSpeaker;

		})(window);
		byeSpeaker.sayBye();
// 	}



// })();