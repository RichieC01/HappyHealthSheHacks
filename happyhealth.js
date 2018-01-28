function start(){
	localStorage.setItem("mood", -1);
	localStorage.setItem("energy", -1);
	localStorage.setItem("stress", -1);
	localStorage.setItem("snack", -1);
	localStorage.setItem("breakfast", -1);
	localStorage.setItem("lunch", -1);
	localStorage.setItem("dinner", -1);
}

var dataSet = [
	["name", "mood", "energy", "stress", "snack", "breakfast", "lunch", "dinner"],
	["Brazil Nuts", "yes", "no", "yes", "yes", "no", "no", "no"],
	["Oily Fish", "yes", "no", "yes", "no", "yes", "yes", "yes"],
	["Oats", "yes", "no", "no", "yes", "yes", "no", "no"],
	["Bananas", "yes", "no", "yes", "yes", "yes", "no", "no"],
	["Spinach", "no", "no", "yes", "no", "yes", "yes", "yes"],
	["Dark Chocolate", "yes", "yes", "yes", "yes", "no", "no", "no"],
	["Oysters", "yes", "yes", "yes", "no", "no", "yes", "yes"],
	["Berries", "yes", "no", "yes", "yes", "yes", "no", "no"],
	["Quinoa", "yes", "yes", "yes", "no", "no", "yes", "yes"],
	["Apples", "yes", "yes", "no", "yes", "yes", "no", "no"]
];



var foodScores = {};
for (i = 1; i < dataSet[0].length; i++){
	var key = dataSet[i][0];
	foodScores[key] = 0;
}

function time(){
	var d = new Date();
	alert(d.getTime());
}

function addScore(element, score){
	var questionID = element.parentNode.id;
	localStorage.setItem(questionID, score);
	console.log(questionID, score);
};

function submitAnswers(){
	// alert(localStorage.getItem("mood") + " " + localStorage.getItem("energy") + " " + localStorage.getItem("stress"));

	if (localStorage.getItem("mood") < 2){
		for (i = 1; i < dataSet[i].length; i ++){
			if (dataSet[i][1] == "yes"){
				foodScores[dataSet[i][0]] += 1;
			}
		}
	}if (localStorage.getItem("energy") < 2) {
		for (i = 1; i < dataSet[i].length; i ++){
			if (dataSet[i][2] == "yes"){
				foodScores[dataSet[i][0]] += 1;
			}
		}
	}if (localStorage.getItem("stress") < 2) {
		for (i = 1; i < dataSet[i].length; i ++){
			if (dataSet[i][3] == "yes"){
				foodScores[dataSet[i][0]] += 1;
			}
		}
	}

	console.log(localStorage.getItem("mood"));
	console.log(localStorage.getItem("energy"));
	console.log(localStorage.getItem("stress"));

	var recFoods = [];
	var recFoodsString = "";

	for(var key in foodScores){
		var value = foodScores[key];
		if (value > foodScores[recFoods[0]]){
			recFoods.unshift(key);
		}else{
			recFoods.push(key);
		}
	}

	console.log(JSON.stringify(foodScores));
	console.log(JSON.stringify(recFoods));

	localStorage.setItem("rec1", recFoods[0]);
		console.log(JSON.stringify(recFoods[0]));
	localStorage.setItem("rec2", recFoods[1]);
	localStorage.setItem("rec3", recFoods[2]);

}

function inputRecs(){
		document.getElementById("sugg1").innerHTML = localStorage.getItem("rec1");
		document.getElementById("sugg2").innerHTML = localStorage.getItem("rec2");
		document.getElementById("sugg3").innerHTML = localStorage.getItem("rec3");
}
