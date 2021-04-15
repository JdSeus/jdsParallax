# jdsParallax
A joyful, delightful and simple Parallax plugin using pure js and css.

#setup
To use the plugin all you need to do is import the jdsParallax.css and jdsParallax.js files to your html file.
'''html
<link rel="stylesheet" href="/jdsParallax/jdsParallax.css">
<script src="/jdsParallax/jdsParallax.js"></script>
'''

#usage
To create a Parallax Effect you simple need to create the next structure:
```html
<div class="parallax">
	<img src="yourImage">
</div>
```

Currently it creates a parallax effect with a background position on the center.

#effects
Currently there is only 1 effect available in the plugin. The delay on center effect. It makes the parallax slow down when it is on the middle of the page.
To use it you simple add the "parallax-delay-center" class to you parallax div. Like the following:
```html
<div class="parallax parallax-delay-center">
	<img src="yourImage">
</div>
```

