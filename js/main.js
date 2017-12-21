

var getarray = require('./components/getarray')
var display = require('./components/display')


var slideContainer = window.document.getElementById('slide-container')
var slideImage = "<img src='' class='' alt='slide' />"

getarray('graphic_design')

display(slideContainer, "hello world")

