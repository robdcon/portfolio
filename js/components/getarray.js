// Take a category as a parameter (the id of the clicked link, which corresponds to an object in the json file)

module.exports = function(category) 
{
	
	var array = [] // Empty array to store retrieved images

	var slide = $('#slide') // 

	$.ajax({

		url:'C:/Users/BUCK2FAST/Documents/web-resources/myprojects/my_portfolio/json/images.json',
		type:'GET',
		dataType:'json',
		success:function(response)
		{			

			$.each(response.images, function(index) // Check the array of objects
		    	{

		    		if(this.category == category) // If the category key of the object matches the category parameter
		    		{
		    		
		    		array = this.array
		    		console.log(array)
			    	
				    }
		
		    	})

			// slideshowSetup(array, slide)
					
		},
		error:function(err)
		{
			
			throw err

		}

	})	
}