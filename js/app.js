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
		    "url": "https://" + window.location.host + "/now-live/img/twitch.png",
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
