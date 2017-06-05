$(document).ready(function() {
    $("#form").submit(function(e) {
	e.preventDefault();
	var sdata = {
	    "embeds": [{
		"title": "https://twitch.tv/" + $("#username").val(),
		"url": "https://twitch.tv/" + $("#username").val(),
		"description": $("#title").val(),
		"color": 6570404,
		"thumbnail": {
		    "url": "https://pbs.twimg.com/profile_images/509073338191183872/fYdty6yd.png",
		},
		"fields": [
		    {"name": "Game", "value": $("#game").val(), "inline": true}
		],
		"image": {
		    "url": $("#image").val()
		}
	    }]
	};
	$.ajax({
	    url: $("#url").val(),
	    type: 'POST',
	    data: JSON.stringify(sdata),
	    contentType: "application/json"
	})
    });
});
