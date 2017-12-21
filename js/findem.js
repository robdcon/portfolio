(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Display a given element in a given container element within the DOM

module.exports = function(container, element)
{
	container.innerHTML = element
}
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){


var getarray = require('./components/getarray')
var display = require('./components/display')


var slideContainer = window.document.getElementById('slide-container')
var slideImage = "<img src='' class='' alt='slide' />"

getarray('graphic_design')

display(slideContainer, "hello world")


},{"./components/display":1,"./components/getarray":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImpzL2NvbXBvbmVudHMvZGlzcGxheS5qcyIsImpzL2NvbXBvbmVudHMvZ2V0YXJyYXkuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBEaXNwbGF5IGEgZ2l2ZW4gZWxlbWVudCBpbiBhIGdpdmVuIGNvbnRhaW5lciBlbGVtZW50IHdpdGhpbiB0aGUgRE9NXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZWxlbWVudClcclxue1xyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSBlbGVtZW50XHJcbn0iLCIvLyBUYWtlIGEgY2F0ZWdvcnkgYXMgYSBwYXJhbWV0ZXIgKHRoZSBpZCBvZiB0aGUgY2xpY2tlZCBsaW5rLCB3aGljaCBjb3JyZXNwb25kcyB0byBhbiBvYmplY3QgaW4gdGhlIGpzb24gZmlsZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2F0ZWdvcnkpIFxyXG57XHJcblx0XHJcblx0dmFyIGFycmF5ID0gW10gLy8gRW1wdHkgYXJyYXkgdG8gc3RvcmUgcmV0cmlldmVkIGltYWdlc1xyXG5cclxuXHR2YXIgc2xpZGUgPSAkKCcjc2xpZGUnKSAvLyBcclxuXHJcblx0JC5hamF4KHtcclxuXHJcblx0XHR1cmw6J0M6L1VzZXJzL0JVQ0syRkFTVC9Eb2N1bWVudHMvd2ViLXJlc291cmNlcy9teXByb2plY3RzL215X3BvcnRmb2xpby9qc29uL2ltYWdlcy5qc29uJyxcclxuXHRcdHR5cGU6J0dFVCcsXHJcblx0XHRkYXRhVHlwZTonanNvbicsXHJcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlc3BvbnNlKVxyXG5cdFx0e1x0XHRcdFxyXG5cclxuXHRcdFx0JC5lYWNoKHJlc3BvbnNlLmltYWdlcywgZnVuY3Rpb24oaW5kZXgpIC8vIENoZWNrIHRoZSBhcnJheSBvZiBvYmplY3RzXHJcblx0XHQgICAgXHR7XHJcblxyXG5cdFx0ICAgIFx0XHRpZih0aGlzLmNhdGVnb3J5ID09IGNhdGVnb3J5KSAvLyBJZiB0aGUgY2F0ZWdvcnkga2V5IG9mIHRoZSBvYmplY3QgbWF0Y2hlcyB0aGUgY2F0ZWdvcnkgcGFyYW1ldGVyXHJcblx0XHQgICAgXHRcdHtcclxuXHRcdCAgICBcdFx0XHJcblx0XHQgICAgXHRcdGFycmF5ID0gdGhpcy5hcnJheVxyXG5cdFx0ICAgIFx0XHRjb25zb2xlLmxvZyhhcnJheSlcclxuXHRcdFx0ICAgIFx0XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFxyXG5cdFx0ICAgIFx0fSlcclxuXHJcblx0XHRcdC8vIHNsaWRlc2hvd1NldHVwKGFycmF5LCBzbGlkZSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdGVycm9yOmZ1bmN0aW9uKGVycilcclxuXHRcdHtcclxuXHRcdFx0XHJcblx0XHRcdHRocm93IGVyclxyXG5cclxuXHRcdH1cclxuXHJcblx0fSlcdFxyXG59IiwiXHJcblxyXG52YXIgZ2V0YXJyYXkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2V0YXJyYXknKVxyXG52YXIgZGlzcGxheSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kaXNwbGF5JylcclxuXHJcblxyXG52YXIgc2xpZGVDb250YWluZXIgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlLWNvbnRhaW5lcicpXHJcbnZhciBzbGlkZUltYWdlID0gXCI8aW1nIHNyYz0nJyBjbGFzcz0nJyBhbHQ9J3NsaWRlJyAvPlwiXHJcblxyXG5nZXRhcnJheSgnZ3JhcGhpY19kZXNpZ24nKVxyXG5cclxuZGlzcGxheShzbGlkZUNvbnRhaW5lciwgXCJoZWxsbyB3b3JsZFwiKVxyXG5cclxuIl19
