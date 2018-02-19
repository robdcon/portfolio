// var request = require('superagent') // Include AJAX API

// var slideshow = require('./slideshow-setup')

// console.log(slideshow)
// // Initialise the Slideshow API

// module.exports = function(url, key)
// {
// 	request(url, function(err, res)
// 	{
// 		if(res.ok)
// 		{

// 			$.each(res.body.images, function(index)
// 				{
// 					if(res.body.images[index].category == key)
// 					{
// 						array = res.body.images[index].array
// 						slideshow(res.body.images[index].array)
// 					}
						
// 				}
// 			)
			
// 		}
// 		else if(err)
// 		{
// 	        throw new Error('An AJAX error occured: ' + err.text);
// 	    }
// 	})
// }