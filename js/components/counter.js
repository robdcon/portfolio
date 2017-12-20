// Closure function to increment or decrement a counter variable

module.exports = function()
{
	var counter = 0 // initialise the array position variable

	function changeCounter(n) // Increment the counter by a specified amount
	{
		counter += n
	}

	return { 

		increment:function() // Increase the value of counter by 1
		{
			changeCounter(1)
		},
		decrement:function() // Decrease the value of counter by 1
		{
			changeCounter(-1)
		},
		setCounter:function(n) // Set the value of counter
		{
			counter = n
		},
		current:function() // Return the current value of counter
		{
			return counter
		}

	}

}