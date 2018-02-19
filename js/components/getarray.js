// Take a category as a parameter (the id of the clicked link, which corresponds to an object in the json file)
var display = require('./display')

var array = [] // Empty array to store retrieved images

var slide = $('#slide') // 

module.exports = function(category) 
{
	$.ajax({

		url:'http://localhost/projects/my_portfolio/json/images.json',
		type:'GET',
		dataType:'json',
		success:function(response)
		{			

			$.each(response.images, function(index) // Check the array of objects
	    	{

	    		if(this.category == category) // If the category key of the object matches the category parameter
	    		{
	    		
	    			array = this.array
	    			display(window.document.getElementById('slide-container'), array[0].title)
		    	
			    }
	
	    	})
					
		},
		error:function(err)
		{
			
			throw err

		}

	})	
}