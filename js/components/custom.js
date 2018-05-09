const $ = require('jquery-browserify')
const slideshow = require('./slideshow')()
const fetch = require('fetch').fetchUrl

// Add slide effect to sidebar
$('.sidebar-icon, .sidebar nav ul li a').click(function()
{
	$('.sidebar').toggleClass('open')
	$('.sidebar-icon').toggleClass('sidebar-icon-active');
	
})

// Bind event handlers to set up slideshow

function initSlideshow()
{
	$('.slideshow-init').click(function(ev)
	{
		const key = ($(this).attr('rel'))

		$('#loaded-content').load('slideshow.html', function()
		{
			slideshowDisplay(key)
			bindControls()

		})	
		
	})
}

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
		
	$('#slideshow, #slide-container').fadeIn(500)
		
	slideshow.init(key)
		
}

// Loads home page content

$('#home').click(()=>
{
	
	$('#loaded-content').load('home.html')
	setTimeout(()=>
	{
		$('.skill-icon').removeClass('hide')

	},500);
	setTimeout(revealAboutText, 1000) // Wait for DOM elements to load before binding events
		
})

// Reveal web dev content
function revealWebContent()
{
	$('#web-dev').fadeIn(250)
	$('.web-dev-item').removeClass('hide')
}

//Reveal Graphic design content
function revealGraphicsContent()
{
	$('#graphic-design').fadeIn(250)
	$('.graphic-design-item').removeClass('hide')
	
}

//Reveal Graphic design content
function revealAboutContent()
{
	$('#about-page').fadeIn(250)
	$('.about-content').removeClass('hide')
}

// Bind click handlers to sidebar links once DOM elements have loaded by delaying with setTimeout function

$('#web-dev-link').click( ()=>
{
	$('#loaded-content').load('webdev.html')
	setTimeout(revealWebContent, 500)	
})

$('#graphic-design-link').click( ()=>
{
	$('#loaded-content').load('graphic-design.html')
	setTimeout(revealGraphicsContent, 500)
	setTimeout(initSlideshow, 1000)
	
})

$('#about').click(()=>
{
	
	$('#loaded-content').load('about.html')
	setTimeout(revealAboutContent, 500);
		
})
// Icon animations
var animateGraph = () =>
{
	$('.graph').addClass('animate-graph')
}
var animateWeb = () =>
{
	$('.dev').addClass('animate-web')
}
var animateArt = () =>
{
	$('.art').addClass('animate-art')
}
// Reveal the corresponding text when an icon is hovered over
function revealAboutText()
{
	$('.skill-icon').on('hover', (ev)=>
	{
		var id = $(ev.target).attr('rel')

		var target = id + '-text'
		$('[rel='+target+']').toggleClass('hide')
	})
}
// Load home page on page load

$(document).ready(()=>
{

	$('#loaded-content').load('home.html')

	setTimeout(()=>
	{
		$('.skill-icon').removeClass('hide')

	},500);

	// // Apply animations to icons
	// setTimeout(()=>
	// {
	// 	$('.menu-icon').addClass('animate-menu-icon')

	// },500);

	// setTimeout(animateGraph, 250)
	// setTimeout(animateArt, 500)
	// setTimeout(animateWeb, 750)

	setTimeout(revealAboutText, 1000)
	
	//bind event to artwork link to display slideshow
	initSlideshow()
	

		
})