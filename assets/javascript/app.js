var names = [
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
"Madrid","Malabo","Male","Managua","Manama","Manila","Maputo","Maseru","Mbabane","Mexico City","Minsk","Mogadishu","Monaco","Monrovia","Montevideo","Moroni","Moscow","Muscat","Nairobi","Nassau","Naypyidaw","N Djamena","New Delhi","Niamey","Nicosia","Nouakchott","Nukualofa",
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

var row1 = ['P', 'Y', 'F', 'G', 'C', 'R', 'L'];
var row2 = ['A', 'O', 'E', 'U', 'I', 'D', 'H', 'T', 'N', 'S'];
var row3 = ['Q', 'J', 'K', 'X', 'B', 'M', 'W', 'V', 'Z'];

for (var i = 0; i < row1.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row1[i]);
	letterBtn.text(row1[i]);

	$(".row1").append(letterBtn);
}

for (var i = 0; i < row2.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row2[i]);
	letterBtn.text(row2[i]);

	$(".row2").append(letterBtn);
}

for (var i = 0; i < row3.length; i++) {
	var letterBtn = $("<button>");

	letterBtn.addClass("btnLetter btn btn-warning btn-sm text-center mt-1");
	letterBtn.attr("data-letter", row3[i]);
	letterBtn.text(row3[i]);

	$(".row3").append(letterBtn);
}

$(".btnLetter").on("click", function() {

	var keyClicked = $(this).attr("data-letter").toLowerCase();

	/*checkLetters(keyClicked);*/

	console.log(keyClicked);
});