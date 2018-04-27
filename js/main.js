const $ = require('jquery-browserify')
const slideshow = require('./components/slideshow-closure')()
const fetch = require('fetch').fetchUrl
const MotionUi = require('motion-ui')




// Add slide effect to sidebar
$('.sidebar-icon').click(function()
{
	$('.sidebar').toggleClass('open')
	// if($('.sidebar').data('active') == 'false')
	// {
		
	// 	$('.sidebar').addClass('slide-in')
	// }
	// else
	// {

	// 	$('.sidebar').removeClass('slide-in').addClass('slide-Out')
		
	// }
	
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

// Show web content

$('#web-dev-link').click(()=>
{
	fetch(' http://localhost/projects/my_portfolio/web-dev.html', 
		(err,meta,body)=>
		{
			$('#loaded-content').html(body.toString())
			$('.web-dev-link-item > a').click(function()
			{
				var url = this.dataset.url
				var iframe = $('.iframe-container > iframe')
				console.log(iframe, url)
				$('.iframe-container > iframe').attr('src', url)

		
			})
		})


	
})

$('#about').click(()=>
{
	fetch(' http://localhost/projects/my_portfolio/about.html', 
		(err,meta,body)=>
		{
			$('#loaded-content').html(body.toString())
			iframeSelect()
		})
	
})

function showContent()
{
	$('#img-container').attr('src', 'http://mariamagichand.ie')
}

// Set the URL src of the iframe to the data-url of the link

function iframeSelect()
{
	$('.iframe-src').click(function()
	{
		
		var url = $(this).data('url')

		$('#iframe-container > iframe').attr('src', url)
	})
}






















