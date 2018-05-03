const $ = require('jquery-browserify')
const slideshow = require('./slideshow')()
const fetch = require('fetch').fetchUrl


$(document).ready(()=>{console.log('updated')})

// Add slide effect to sidebar
$('.sidebar-icon, .sidebar nav ul li a').click(function()
{
	$('.sidebar').toggleClass('open')
	$('.sidebar-icon').toggleClass('sidebar-icon-active');
	
})

// Bind event handlers to set up slideshow

$('.slideshow-init').click(function()
{
	const key = (this.id)

	$('#loaded-content').load('slideshow.html', function()
	{
		slideshowDisplay(key)
		bindControls()

	})	
	
})

function bindControls()
{
	// Bind event handlers to provide the slideshow functionality
	
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

// Loads home page content

$('#home').click(()=>
{
	
	$('#loaded-content').load('home.html')
	setTimeout(()=>
	{
		$('.skill-icon').removeClass('hide')

	},500);
		
})

// Loads web dev content

$('#web-dev-link').click( ()=>
{
	$('#loaded-content').load('webdev.html')

	setTimeout(function()
	{
		$('#web-dev').fadeIn(250)
		$('.web-dev-item').removeClass('hide')
	}, 500)
	
})

// Loads graphic design content

$('#graphic-design-link').click( ()=>
{
	$('#loaded-content').load('graphic-design.html')
	
	setTimeout(function()
	{
		$('#graphic-design').fadeIn(250)
		$('.graphic-design-item').removeClass('hide')
	}, 500)
	
})

// Loads About page

$('#about').click(()=>
{
	
	$('#loaded-content').load('about.html')
	setTimeout(()=>
	{
		$('#about-content').fadeIn(500)

	},500);
		
})

// Load home page on page load

$(document).ready(()=>
{
	
	$('#loaded-content').load('home.html')

	setTimeout(()=>
	{
		$('.skill-icon').removeClass('hide')

	},500);
	setTimeout(()=>
	{
		$('.menu-icon').addClass('animate-menu-icon')

	},500);

	setTimeout(()=>
	{
		$('.graph').addClass('animate-graph')
	}, 660)
	setTimeout(()=>
	{
		$('.art').addClass('animate-art')
	}, 1600)
	setTimeout(()=>
	{
		$('.dev').addClass('animate-web')
	}, 2400)
		
})