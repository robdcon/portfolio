const $ = require('jquery-browserify')
const slideshow = require('./components/slideshow')()
const fetch = require('fetch').fetchUrl

// Add slide effect to sidebar
$('.sidebar-icon, .sidebar nav ul li a').click(function()
{
	$('.sidebar').toggleClass('open')
	$('.sidebar-icon').toggleClass('sidebar-icon-active');
	
})


function preloader() 
{
    function doPreload(strImagePath) 
    {
        var heavyImage = new Image();
        heavyImage.src = strImagePath;
    }

    var arrImages = ["./img/aboutart_invert.jpg","./img/aboutweb_invert.jpg","./img/aboutgraph_invert.jpg"];
    for (var i = 0; i < arrImages.length; i++) {
        doPreload(arrImages[i]);
    }
}
// $('.sidebar-icon').on('mouseenter', function(ev)
// {
// 	$(ev.target).addClass('animate-icon')
// })
// $('.sidebar-icon').on('mouseout', function(ev)
// {
// 	$(ev.target).addClass('animate-icon')
// })

// Bind event handlers to set up slideshow

function initSlideshow()
{

	$('.slideshow-init').click(function(ev)
	{
		// console.log('initSlideshow')
		const key = ($(this).attr('rel'))

		$('#slide-content').load('slideshow.html', function()
		{
			$(this).fadeIn(500)
			
			slideshowDisplay(key)
			$('#slideshow').fadeIn(500)
			$('#slideshow').fadeIn(1000)
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
		$('#slide-content').fadeOut(500)
	})
}

function slideshowDisplay(key)
{
		
	$('#slideshow, #slide-container').fadeIn(500)
	//console.log('slideshowDisplay')
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

function displayContent(page)
{
	$(page).fadeIn(250)
	$(page).firstChild().removeClass('hide')
}

// Reveal web dev content
function revealWebContent()
{
	$('#web-dev').fadeIn(250)
	$('.web-dev-item').removeClass('hide')
}

// Reveal web design content
function revealWebDesignContent()
{
	$('#web-design').fadeIn(250)
	$('.web-design-item').removeClass('hide')
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

//Reveal grid content
function revealAboutContent()
{
	$('#grid').fadeIn(250)
	$('.grid-content').removeClass('hide')
}

// Bind click handlers to sidebar links once DOM elements have loaded by delaying with setTimeout function

$('#web-dev-link').click( ()=>
{
	$('#loaded-content').load('web.html')
	setTimeout(revealWebContent, 500)	
})

$('#web-design-link').click( ()=>
{
	console.log('hello!')
	$('#loaded-content').load('web-design.html')
	setTimeout(revealWebDesignContent, 500)	
})

$('#graphic-design-link').click( ()=>
{
	$('#loaded-content').load('graphic-design.html')
	setTimeout(revealGraphicsContent, 500)
	setTimeout(initSlideshow, 1000)
	
})

// Load about content
$('#about').click(()=>
{
	
	$('#loaded-content').load('about.html')
	setTimeout(revealAboutContent, 500);
		
})

// Load contact page
$('#contact').click(()=>
{
	
	$('#loaded-content').load('contact.html')
	setTimeout(revealContactContent, 500);
		
})

// Grid Layout Page
$('#grid').click(()=>
{
	
	$('#loaded-content').load('grid.html')
	setTimeout(revealGridContent, 500);
		
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
function iconAnimate()
{
	var $icons = $('.skill-icon')
	var $text = $('.about-text')
	
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
	preloader()

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

	setTimeout(animateGraph, 1000)
	setTimeout(animateArt, 1500)
	setTimeout(animateWeb, 2000)

	setTimeout(revealAboutText, 1000)
	
	//bind event to artwork link to display slideshow
	initSlideshow()
	

		
})

