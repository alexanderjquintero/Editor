	var editor =CodeMirror.fromTextArea(document.getElementById("html"), {
		mode : "text/html",
		mode: {name: "jade", alignCDATA: true},
		mode :"text/x-haml",
		mode: 'markdown',
		styleActiveLine: true,
		lineNumbers: true,
		lineWrapping: true,
		profile: 'html' /* define Emmet output profile */

	});

		var editor =CodeMirror.fromTextArea(document.getElementById("css"), {
		mode : "text/css",		
		mode: "text/x-scss",
		mode: "text/x-less",
		styleActiveLine: true,
		lineNumbers: true,
		lineWrapping: true,
		profile: 'css' /* define Emmet output profile */

	});