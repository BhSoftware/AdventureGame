var ButtonOne = document.getElementById("button1");
var ButtonTwo = document.getElementById("button2");
var ButtonThree = document.getElementById("button3");
var description = document.getElementById("description");
var image = document.getElementById("")

ButtonOne.addEventListener("click", function start(){
	document.body.style.backgroundImage = "url(img/uitzendbureau.jpg)";
	description.innerText = "Je bent bij het uitzendbureau, je vraagt of er werk is. Zij zeggen dat het afhankelijk is van je diploma."
    ButtonOne.innerText = "Ik heb een diploma";
    ButtonTwo.innerText = "Ik heb geen diploma";
    ButtonThree.hidden = true;
});	

ButtonTwo.addEventListener("click", function store(){
	document.body.style.backgroundImage = "url(img/kassa.jpg)";
	description.innerText = "Je hebt alles gekocht voor thuis en staat aan de kassa, je wilt betalen met je pinpas maar je staat in de min"
    ButtonOne.innerText = "Terug brengen";
    ButtonTwo.innerText = "je rent weg met de spullen";
    ButtonThree.hidden = true;

});	

ButtonThree.addEventListener("click", function store(){
	document.body.style.backgroundImage = "url(img/chill.jpg)";
	description.innerText = "Je chilt met vrienden en komt een andere groep tegen, 1 van hun begint een beetje de held uit te hangen. Er is een woordwisseling, er wordt dan een steekwapen getrokken"
    ButtonOne.innerText = "je gaat bemoeien";
    ButtonTwo.innerText = "je vraag voor hulp";
    ButtonThree.hidden = true;

});