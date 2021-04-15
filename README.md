# jdsParallax
A joyful, delightful and simple Parallax plugin using pure js and css.

### Setup
To use the plugin all you need to do is import the jdsParallax.css on the head of your html file and import the jdsParallax.js on the end of the body of your html file.
```html
<head>
	<!-- Your Head -->
	<link rel="stylesheet" href="/jdsParallax/jdsParallax.css">
</head>
```
```html
<body>
	<!-- Your Body -->
	<script src="/jdsParallax/jdsParallax.js"></script>
</body>
```


### Usage
To create a Parallax Effect you simple need to create the next structure:
```html
<div class="parallax">
	<img src="yourImage">
</div>
```

Currently it creates a parallax effect with a background position on the center and it will fullfil all of the first parent element with a relative position.
The following style of utilization is recommended:
```html
<div class="container">
	<div class="parallax">
		<img src="yourimage">
	</div>
	<h1>Title</h1>
	<p>Content</p>
</div>
```
With you "container" class being the following:
```css
.container {
	position: relative;
	height: 300px; //Here goes your wanted height.
}
```

### Effects
There is only 1 effect available in the plugin for now. The delay on center effect. It makes the parallax slow down when it is on the middle of the page.
To use it you simple add the "parallax-delay-center" class to you parallax div. Like the following:
```html
<div class="parallax parallax-delay-center">
	<img src="yourImage">
</div>
```

LICENSE
======= 

MIT License

Copyright (c) 2021 Juliano Duarte Seus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

