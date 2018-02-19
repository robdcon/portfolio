//This program makes an ajax request to an api to request live weather information
//The user can select a coutry from one select input, 
//select a county from another and view the latest weather information
//After a successful response the information is inserted into the DOM

// Country select area to load cities from a chosen country
console.log('updated')
function loadCities() 
{
	
	$('#countries').change(function() // When the option changes, execute the function to load the relevant cities
	{
		var countryName = ($(this).val());
		$('#cities').load((countryName + '-cities.html'));

	})
}

// Country select area to load info for a chosen city

function loadWeatherResults() // When the option changes, execute the function to load the relevant city info
{
	$('#cities').change(function()
	{
		var cityName = $(this).val();
		getWeatherResults(cityName);		

	})
}

//Call functions on document load

$(document).ready(function()
{
	loadCities();
	loadWeatherResults();
});

// Function to convert angle degrees into textual format

function convertWindDirection(degrees)
{
	var x = degrees;
	var direction = "";
	console.log(x) // Check degrees against output using the console
	switch(true)
	{
		case (x > 315):
		direction = 'Northerly to North Westerly';
		break;
		case (x == 315):
		direction = 'North Westerly';
		break;
		case(x > 270):
		direction = 'Westerly to North Westerly';
		break;
		case(x == 270):
		direction = 'Westerly to South Westerly';
		break;
		case(x > 225):
		direction = 'Southerly';
		break;
		case(x == 225):
		direction = 'South Westerly';	
		break;
		case(x > 180):
		direction = 'Southerly to South Westerly';	
		break;
		case(x == 180):
		direction = 'Southerly';
		break;
		case (x  > 135):
		direction = 'Southerly to South Easterly';
		break;
		case(x == 135): 
		direction = 'South Easterly';
		break;
		case(x > 90): 
		direction = 'Easterly to South Easterly';
		break;
		case(x == 90): 
		direction = 'Easterly';
		break;
		case(x > 45): 
		direction = 'Easterly to North Easterly';
		break;
		case(x == 45): 
		direction = 'North Easterly';
		break;
		case(x > 0): 
		direction = 'Northerly to North Easterly';
		break;
		case(x == 0): 
		direction = 'Northerly';
		break;
		default:
		direction = "Not available";
		break;
		// This was added because some of the requests for wind direction were returning as undefined from the API			
	}	
	return direction;
}

function DayDate() // Create an object whose properties are a day and date in suitable display format
{
	var dateobj = new Date();
	var day = dateobj.getDay();
	var date = dateobj.getDate();
	var month = dateobj.getMonth();
	var year = dateobj.getFullYear();

	month++; // Account for 0 indexing

	if (date < 10) 
	{
		date = "0" + date; // Add a preceding 0 if less han 9
	};

	if (month < 10) 
	{
		month = "0" + month; // Add a preceding 0 if less han 9
	};

	date = date + "/" + month + "/" + year;

	switch(day)
	{
		case 0:
		day = "Sunday";
		break;
		case 1:
		day = "Monday";
		break
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednsday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
	}

	this.day = day;
	this.date = date;
	
	this.getDayText = function(){return this.day};
	this.getDateText = function(){return this.date};
	
}

//Make a request to the API for the desired infromation and build a table to hold that information
//Then display the table in the DOM

function getWeatherResults(cityName)
{
	var cityName = cityName;
	var api_key = '3083a4c848a08b93aec8cb4fda2c25ff';
	$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',uk' + '&units=metric&appid=' + api_key, function(response)
	{

		// Create new DayDate object, access its properties and display in the DOM
		var date = new DayDate(); 
		var daytext = date.getDayText();
		var datetext = date.getDateText();
		$('#day').html(daytext);
		$('#date').html(datetext);
		
		var txt = ""; // Empty string for adding text to build html table


		console.log('Successful connection');
		//Convert wind direction for basic textual description
		var direction = convertWindDirection(response.wind.deg);
		//Create a new string from description with first letter capitalised for presentation purposes
		var conditions = response.weather[0].description;
		var firstletter = conditions.slice(0,1).toUpperCase();
		var restofstring = conditions.slice(1);
		conditions = firstletter + restofstring;

		// Build the html format within which information is placed
		
		txt += 
			 '<tr><td class="cityname">' + response.name + '</td><td>' + '<img class="icon" src="' + 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png"> </i>' + '</td></tr>' 
			+ '<tr><td>Current Conditions</td><td id="weather-section-currentconditions">' + conditions + '</td></tr>' 				
			+ '<tr><td>Temperature</td><td id="weather-section-temperature">' + response.main.temp + '&#176;C' +'</td>'  
			+ '<tr><td>Wind Direction</td><td id="weather-section-winddir">' + direction  + '</td>'+'</tr>' 
			// + '<tr><td>Wind Chill Factor</td><td id="weather-section-windchill">' + response.cities[index].windChillFactor.temp + response.cities[index].windChillFactor.unit + '</td></tr>'
			$('#weather-results table').html(txt);


	})
	// Make another request to get the wind speed in imperial units, i.e. mph, and add it to the relevant section
	// (This conversion could be made within the ajax request success function, 
	// however it may be more accurate to retrieve it from the source of the output)
	$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',uk' + '&units=imperial&appid=' + api_key, function(response)
	{

		$('#weather-section-windspeed').html(response.wind.speed + "mph");
		
	})
		
}
