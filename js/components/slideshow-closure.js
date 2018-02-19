// Closure function returns an object with next and prev methods
// These methods can access the private data and functions
// next & prev can increment & decrement the index, respectively
// They then call the function to set slide & display the  in the DOM


var imgContainer = $('#img-container')
var imgUrl = 'json/images.json'

// Display content in container element as set above

function displaySlide(container,content)
{

	$('#img-container').html(content)
}





module.exports = slideshow

function slideshow() 
{
	var targetUrl = imgUrl

	var container = imgContainer

	var arrayKey = ""

	var arrayLength = 0 // Private variable will be set to length of the array returned from a GET request

	var slide = "" // Private variable slide will be set by the getImage() function

	var index = 0 // Private variable can be accessed by the 'next' and 'prev' closure methods

	// Ajax function to GET an image data object from a JSON file
	// The function uses the retieved data to create an image slide for use in the DOM

	function getImages()
	{
		var ajaxCall = $.get(targetUrl)

		ajaxCall
		.done(function(response)
		{	
			$.each(response.images, function(j)
			{
				
				if (response.images[j].category == arrayKey) 
				{
					arrayLength = response.images[j].array.length // Set array length to control continuous cycle through array
	 
	 				slide = "<img id='slide' src='" + response.images[j].array[index].url + "' alt=''></div>" +
	 								"<div><h3>"+ response.images[j].array[index].title + "</h3></div>"	
	 			}
	 			
	 		}) 

	 		displaySlide(container, slide) // Display the new image in the DOM
					
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

			getImages() // Call the static function to make an ajax call based on new index parameter
		
		},
	
		prev : function()
		{
			
			index -= 1 // Decrement private variable, index
	
			if(index < 0)
			{
				index = arrayLength - 1
			}

			getImages() // Call the static function to make an ajax call based on new index parameter
					
		},

		init:function(key)
		{
			arrayKey = key // Set the private variable of Slideshow to a key corresponding to a relative key in the image json file

			getImages() // Call the static function to make an ajax call based on new index parameter

		}

	
	}

}