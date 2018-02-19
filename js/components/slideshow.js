var display = require('./display')

var control = require('./counter') // Closure function to contol array index

var imgContainer = $('.img-container')

function slideshow(array) 
{
	var index = control.current()	

	display(imgContainer, array[index]) //Initialise slideshow with first image

	console.log(array)
	 // Sets index variable to 0

	this.next =  function() // Bind the index methods to the navigation buttons
	{
		
		control.increment() // Increments the index variables control and returns its value

		index = control.current() // Set index to 0 (initial value of control.current)
		
		if(index == array.length)
		{ 
			
			control.setCounter(0) // If the end of the array is reached, reset counter variable to 0
			index = control.current() // Set index to control.current
		}
	
	}

	this.prev = function()
	{
		
		control.decrement()
		index = control.current()

		if(index < 0)
		{
			control.setCounter(array.length - 1)
			index = control.current()
		}		
	
	}

	this.getImageObj = function()
	{
		return array[index]
	}

	this.setImageSlide = function()
	{
		var imageObj = getImageObj()

		return "<img id='slide' src='" + imageObj.url + "' alt=''></div>" +
								"<div><h3>"+ imageObj.title + "</h3></div>"
	}

	this.showImage = function()
	{
		var imageSlide = setImageSlide()

		imgContainer.html(imageSlide)

	}

	this.testing = function()
	{
		control.test()
	}

}
module.exports = slideshow

