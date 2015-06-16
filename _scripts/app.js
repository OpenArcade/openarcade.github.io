var slick = require('slick-carousel');

var app = new (function App(win, doc, undefined) {

	this.init = function() {
		$('.slick').slick();
	};
	return this;

})(window, document);

$(document).ready(app.init);
