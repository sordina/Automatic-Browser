(function(){
	var s = document.createElement('script')
	document.body.appendChild(s)
	s.src='http://code.jquery.com/jquery-1.4.2.min.js';
	s.onload = main
})()

function main() {
	var b = $('body')
	var points = $("body,html")
	var y = points.scrollTop()
	var w = $(window).height()
	var h = b.height() - w

	var r = Math.random

	points.animate({scrollTop: 0}, 0);

	function scroller() {
		if(y < h) {
			var delta = r() * r() * 400 + r() * 100 + 50
			y += delta
			var time = r() * r() * 800 + delta * 7
			points.animate({scrollTop: y}, time);
			setTimeout(scroller, time + r() * r() * r() * 1000)
		} else {
			$.get(window.location,function(content,code){
				var c = content.match(RegExp("<body[^>]+>((.|\\n|\\r)*)</body>","m"))[1]
				b.get(0).innerHTML = c
				main()
			})
		}
	}

	scroller()
}
