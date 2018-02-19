var display = require('./display')

module.exports = slideshow

function slideshow(array, container) 
{
	container = container || "default"

	var index = 0

	var array = array || []	

	var slide = ""

	//Initialise slideshow with first image

	console.log(array[0])
	// Sets index variable to 0

	return {

		next :  function() // Bind the index methods to the navigation buttons
		{
			
			index += 1 // Increments the index 
			
			if(index == array.length)
			{ 
				index = 0
			}

			this.setSlideImage()
			this.showImage()
		
		},
	
		prev : function()
		{
			
			index -= 1
	
			if(index < 0)
			{
				index = array.length - 1
			}

			this.setSlideImage()
			this.showImage()				
		}

		// $('#img-container').html(slide)
	
	}

	function showImage()
	{
		$('#img-container').html(slide)
	}

	function setSlideImage()
	{

		var imageObj = getImageObj()

		slide = "<img id='slide' src='" + imageObj.url + "' alt=''></div>" +
								"<div><h3>"+ imageObj.title + "</h3></div>"
	}

	function getImageObj()
	{
		return array[index]
	}

}


