// Closure function returns an object with next and prev methods
// These methods can access the private data and functions
// next & prev can increment & decrement the index, respectively
// They then call the function to set the slide & display it in the DOM


var imgContainer = $('#img-container') 
var imgUrl = 'json/images.json'

function displaySlide(container,content)
{

	container.hide().html(content).fadeIn()
	
}

// Display content in container element as set above

module.exports = slideshow

function slideshow() 
{
	var imgContainer = $('#img-container')

	var targetUrl = imgUrl

	var container = imgContainer

	var arrayKey = ""

	var arrayLength = 0 // Private variable will be set to length of the array returned from a GET request

	var slide = "" // Private variable slide will be set by the getImage() function

	var index = 0 // Private variable can be accessed by the 'next' and 'prev' closure methods

	var arr = []


	// Ajax function to GET an image data object from a JSON file
	// The function uses the retieved data to create an image slide for use in the DOM

	function getImages()
	{
		console.log('getImages')
		arr = []
		var ajaxCall = $.get(targetUrl)

		ajaxCall
		.done(function(response)
		{	
			$.each(response.images, function(j)
			{
				$.each(response.images[j].array, (i)=>
				{
					
					let tagArr = response.images[j].array[i].tag
					let found = $.inArray(arrayKey, tagArr)
					//console.log(arrayKey, tagArr, found)
					if(found != -1)
					{
		 				arr.push(response.images[j].array[i])
		 				slide = "<img id='slide' src='" + arr[index].url + "' alt=''>" +
		 				"<div class='img-title'><h3>"+ arr[index].title + "</h3></div>"
		 			}
		 			
				})
				
	 		}) 
			displaySlide($('#img-container'), slide)
	 		arrayLength = arr.length;
					
		})
		.fail(function(err)
		{				
			throw err
		})

	}

	// Return a object which contains methods which can access the private data
	return  {

		next :  function() 
		{
			
			index += 1 // Increment private variable, index 
			
			if(index == arrayLength)
			{ 
				index = 0
			}
			
			displaySlide($('#img-container'), "<img id='slide' src='" + arr[index].url + "' alt=''></div>" +
		 				"<div class='img-title'><h3>"+ arr[index].title + "</h3></div>")
			
			//console.log(index)
			//getImages() // Call the static function to make an ajax call based on new index parameter
		
		},
	
		prev : function()
		{
			
			index -= 1 // Decrement private variable, index
	
			if(index < 0)
			{
				index = arrayLength - 1
			}
			displaySlide($('#img-container'), "<img id='slide' src='" + arr[index].url + "' alt=''></div>" +
		 				"<div class='img-title'><h3>"+ arr[index].title + "</h3></div>")
			
			//getImages() // Call the static function to make an ajax call based on new index parameter
					
		},

		init:function(key)
		{
			index = 0
			arrayKey = key // Set the private variable of Slideshow to a key corresponding to a relative key in the image json file

			getImages() // Call the static function to make an ajax call based on new index parameter

		}

	
	}

}