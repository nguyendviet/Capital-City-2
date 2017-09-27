var cities = [
"Abu Dhabi","Abuja","Accra","Addis Ababa","Aden","Algiers","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo","Apia","Ashgabat","Asmara","Astana","Asuncion","Athens",
"Baghdad","Baku","Bamako","Bandar Seri Begawan","Bangkok","Bangui","Banjul","Basseterre","Beijing","Beirut","Belgrade","Belmopan","Berlin","Bern","Bishkek","Bissau","Bogota","Brasilia","Bratislava","Brazzaville","Bridgetown","Brussels","Bucharest","Budapest","Buenos Aires","Bujumbura",
"Cairo","Canberra","Cape Town","Caracas","Castries","Chisinau","Conakry","Copenhagen",
"Dakar","Damascus","Dhaka","Dili","Djibouti","Dodoma","Doha","Dublin","Dushanbe",
"Freetown","Funafuti",
"Gaborone","Georgetown","Grozny","Guatemala City",
"Hanoi","Harare","Havana","Helsinki",
"Islamabad",
"Jakarta","Jerusalem","Juba",
"Kabul","Kampala","Kathmandu","Khartoum","Kiev","Kigali","Kingston","Kingstown","Kinshasa","Kuala Lumpur","Kuwait City",
"La Paz","Libreville","Lilongwe","Lima","Lisbon","Ljubljana","Lome","London","Luanda","Lusaka","Luxembourg",
"Madrid","Malabo","Male","Managua","Manama","Manila","Maputo","Maseru","Mbabane","Mexico City","Minsk","Mogadishu","Monaco","Monrovia","Montevideo","Moroni","Moscow","Muscat","Nairobi","Nassau","Naypyitaw","N Djamena","New Delhi","Niamey","Nicosia","Nouakchott","Nukualofa",
"Oslo","Ottawa","Ouagadougou",
"Panama City","Paramaribo","Paris","Phnom Penh","Podgorica","Port Louis","Port Moresby","Port Vila","Port au Prince","Port of Spain","Porto Novo","Prague","Praia","Pyongyang",
"Quito",
"Rabat","Ramallah","Reykjavik","Riga","Riyadh","Rome","Roseau",
"San Jose","San Marino","San Salvador","Santiago","Santo Domingo","Sao Tome","Sarajevo","Seoul","Singapore","Skopje","Sofia","Sri Jayawardenepura Kotte","St Georges","St Johns","Stockholm","Suva",
"Tallinn","Tarawa","Tashkent","Tbilisi","Tegucigalpa","Tehran","Thimphu","Tirana","Tokyo","Tripoli","Tunis",
"Ulaanbaatar",
"Vaduz","Valletta","Vatican City","Victoria","Vienna","Vientiane","Vilnius",
"Warsaw","Washington DC","Wellington","Windhoek",
"Yamoussoukro","Yaounde","Yaren","Yerevan",
"Zagreb"];

var chosenCity = "";
var attempt;
var chosenCityArray = [];
var hiddenCity = [];
var shownCity = [];

//keyboard rows
var row1 = ['P', 'Y', 'F', 'G', 'C', 'R', 'L'];
var row2 = ['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S'];
var row3 = ['Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'];
var row4 = [' '];
var keyPressed = false;
var win = 0;
var loss = 0;

//print 1st row of keyboard
for (var i = 0; i < row1.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row1[i]);
	letterBtn.text(row1[i]);

	$(".row1").append(letterBtn);
}

//print 2nd row of keyboard
for (var i = 0; i < row2.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row2[i]);
	letterBtn.text(row2[i]);

	$(".row2").append(letterBtn);
}

//print 3rd row of keyboard
for (var i = 0; i < row3.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row3[i]);
	letterBtn.text(row3[i]);

	$(".row3").append(letterBtn);
}
//print 4th row of keyboard (space button)
function printSpaceButton() {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1 btnSpace");
	letterBtn.attr("data-letter", row4);
	letterBtn.text('Space');

	$(".row4").append(letterBtn);
}

function startGame() {
	chosenCity = cities[Math.floor(Math.random() * cities.length)];
	attempt = Math.floor(chosenCity.length * 2 / 3) + Math.floor((Math.random() * 5) + 1);
	chosenCityArray = chosenCity.split("");
	hiddenCity = [];

	for (var i = 0; i < chosenCityArray.length; i++) {
		hiddenCity.push('_');
	}

	shownCity = hiddenCity.join(' ');
	$('.word').html(shownCity);
	$('.attempt').html('Attempt(s) remaining: <b>' + attempt + '</b>');
	$('.scoreBoard').html('Cities visited: ' + win + ' & Cities missed: ' + loss);
	$('.alert').attr('class', 'alert text-center').html('');
	$('.btnLetter').removeClass('clicked');
	$('.keyboard').show();
	$('.map').html('');
}

function checkLetters(letter) {
	var match = false;

	for (var i = 0; i < chosenCityArray.length; i++) {

		if (chosenCity[i].toLowerCase() == letter) {
			match = true;
		}
	}

	if (match) {

		for (var j = 0; j < chosenCityArray.length; j++) {

			if (chosenCity[j].toLowerCase() == letter) {

				if (chosenCity[j] === ' ') {
					hiddenCity[j] = '&nbsp;';
				}
				else {
					hiddenCity[j] = chosenCity[j];
				}
			}
		}

		shownCity = hiddenCity.join(' ');
		$('.word').html(shownCity);
	}
	else {
		attempt--;
	}
	updateScore();
}

function updateScore() {
	$('.attempt').html('Attempt(s) remaining: <b>' + attempt + '</b>');

	var hiddenLetter = shownCity.includes('_');

	if (!hiddenLetter) {
		$('.alert').addClass('alert-success').html('Well done!');
		$('.keyboard').hide();
		showMap();
		win++;
		$('.scoreBoard').html('Cities visited: ' + win + ' & Cities missed: ' + loss);
	}
	else if (attempt < 1) {
		$('.alert').addClass('alert-danger').html('Sorry... It\'s <b>' + chosenCity + '</b>');
		$('.keyboard').hide();
		showMap();
		loss++;
		$('.scoreBoard').html('Cities visited: ' + win + ' & Cities missed: ' + loss);
	}
}

function showMap() {
	$('.map').html('<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDAikSQuBsWZtyn6OZOOEWR6XFGHrok-6E&q=' + chosenCity + '+capital+city" allowfullscreen></iframe>');
}

printSpaceButton();
startGame();

//click on letter
$('.btnLetter').on("click", function() {

	if (!($(this).hasClass('clicked'))) {
		var keyClicked = $(this).attr("data-letter").toLowerCase();

		checkLetters(keyClicked);

		$(this).addClass('clicked');
	}
	else {
		return;
	}
});

$(".btnNewGame").on("click", function() {
	startGame();
});