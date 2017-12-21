var counter = require('./counter')
var getarray = require('./getarray')
var arrayLength = 5

function slideshowControls(arrayLength) 
{	

	var index : counter.current
					 
	return function()
	{

		next:  function() // Bind the index methods to the navigation buttons
		{
			
			counter.increment() // Increments the index variables counter and returns its value
			index = counter.current()
			
			if(i == arrayLength)
			{ // If the end of the array is reached, restart at zero
				counter.setCounter(0)
				index = counter.current()
			}	
		},

		prev: function()
		{
			
			counter.decrement()
			index = counter.current()

			if(i < 0)
			{
				counter.setCounter(arrayLength - 1)
				index = counter.current()
			}		

		}
	}

}

function setSlideImg(imageUrl, title)
{
	return "<img id='slide' src='" + imageUrl + "' alt=''></div>" +
								"<div><h3>"+ title + "</h3></div>"
}