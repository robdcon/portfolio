// console.log('success')

// var getImages = require('./getimages')

// var url = 'json/images.json'



module.exports = function()
{

	$('#artwork').click(function()
	{
		var array = this.id
		getImages(url, array)
	})

	$('#graphic_design').click(function()
	{
		var array = this.id
		getImages(url, array)
	})

	$('#next').click(function()
	{
		next()
		showImage()
	})

	$('#prev').click(function()
	{
		prev()
		showImage()
	})
}
