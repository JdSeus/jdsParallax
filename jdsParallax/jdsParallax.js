(function() {

	let parallaxes = document.getElementsByClassName("parallax");

	for (let i=0; i<parallaxes.length; i++) {
		parallaxes[i].style.backgroundImage = "url(" + parallaxes[i].children[0].src + ")";
	}

	document.addEventListener('scroll', function(e) {
		let parallaxes = document.getElementsByClassName("parallax-delay-center");
		let windowMiddle = window.innerHeight/2;
		for (let i=0; i<parallaxes.length; i++) {
			let parallaxMiddle = (parallaxes[i].offsetHeight/2) + parallaxes[i].getBoundingClientRect().y;
			let distortion = parallaxMiddle - windowMiddle;
			distortion = distortion/window.innerHeight;
			distortion = distortion*100;
			distortion = Math.floor(distortion);
			distortion = distortion * -1;
			distortion = distortion + 50;
			if (distortion < 0) {
				distortion = 0;
			}
			if (distortion > 100) {
				distortion = 100;
			}
			distortion = "center " + distortion + "%";
			parallaxes[i].style.backgroundPosition = distortion;
		}
	});

	document.addEventListener('scroll', function(e) {
		
	});

	window.scrollTo(window.scrollX, window.scrollY - 1);
	window.scrollTo(window.scrollX, window.scrollY + 1);

})();
