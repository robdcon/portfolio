var $ = require('jquery-browserify')
var slideshow = require('./components/slideshow-closure')()



// Bind event handlers to set up slideshow

$('.slideshow-init').click(function()
{
	var key = (this.id)

	$('#loaded-content').load('slideshow.html', function()
	{
		slideshowDisplay(key)
		bindControls()

	})
	
	
})

function bindControls()
{
	// Bind event handlers to provide the slideshow functionality
	console.log('success')
	$('#next').click(function()
	{
		slideshow.next()
	})

	$('#prev').click(function()
	{
		slideshow.prev()
	})

	// Fade in slideshow

	$('#slideshow-close').click(function()
	{
		$('#slideshow').fadeOut(500)
	})
}

function slideshowDisplay(key)
{
		
	$('#slideshow').fadeIn(500, function()
	{
		slideshow.init(key)
		$('#slide-container').fadeIn(500)
		
	})
}

// Show web content

$('#web-dev').click(function()
{
	$('#loaded-content').load('weather-frame.html')
})



















