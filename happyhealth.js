function start(){
	localStorage.setItem("mood", -1);
	localStorage.setItem("energy", -1);
	localStorage.setItem("stress", -1);
	localStorage.setItem("snack", -1);
	localStorage.setItem("breakfast", -1);
	localStorage.setItem("lunch", -1);
	localStorage.setItem("dinner", -1);
}

/*var dataSet = [
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
];*/

var dataSet = [
	["name", "mood", "energy", "stress", "snack","breakfast","lunch","dinner", "description"],
	["Brazil Nuts", "yes", "no", "yes", "yes", "no", "no", "no", "A great source of mineral selenium. Decreases rate of depression, irritability, anxiety and tiredness. Great to have as a mid day snack or with a salad."],
	["Oily Fish", "yes", "no", "yes", "no", "yes", "yes", "yes", "Omega-3 fatty acid are great for low mood and depression as it is 30% of our brain. Keeping brain cells flexible.One serving a week. Try mackerel on bread for brain-boosting breakfast. Or baked salmon for lunch or diner"],
	["Oats","yes", "no", "no", "yes", "yes", "no", "no", "The low glycemic index are great mood booster as it slowly release energy into the bloodstream, keeping blood sugar and mood stable. Mineral selenium are also mood boosting.Half a cup of oats is an amazing way to start the day or keep you going throughout the day. Add some nuts or yogurt for more protein."],
	["Bananas", "yes", "no", "yes", "yes", "yes", "no", "no", "Contain amino acid tryptophan, Vitamins A, B6, C fibre and potassium… Helps boost your mood and aids sleepEat a banana as a mid day snack everyday or add it to your morning oats."],
	["Spinach", "no", "no", "yes", "no", "yes", "yes", "yes", "Deficiencies in Vitamins B can lead to depression. Leafy greens are a great source of Vitamins B2, B6, B2, and folate. Add a cup of cooked spinach to your stir-fry or soups. Raw salad with other healthy food are also great source of energy."],
	["Dark Chocolate", "yes", "yes", "yes", "yes", "no", "no", "no", "Dark chocolate causes the brain to release endorphins and boost serotonin levels. Producing less stress hormones and anxiety levels decreases. A small dark square of chocolate is all you need."],
	["Oysters", "yes", "yes", "yes", "no", "no", "yes", "yes", "High in Zinc for energy production and brain health. Zinc is deficient for depression sufferers. Rich in amino acid tyrosine which enhance mental function and elevate your mood.Three oyster is enough for your dose of zinc."],
	["Berries", "yes", "no", "yes", "yes", "yes", "no", "no", "Chemical similar to valproic acid which is in mood-stabilizing drug. Reduces inflammation which is associated with depression. Add to your breakfast or eat it as a snack."],
	["Quinoa", "yes", "yes", "yes", "no", "no", "yes", "yes", "Flavonoid found in quinoa, quercetin, has anti-depressant effects. Try black quinoa with avocado, almonds and honey. Can be your replacement for rice."],
	["Apples", "yes", "yes", "no", "yes", "yes", "no", "no", "An apple a day really keeps the doctor away. Produces a calming effect, creates more energy, and increases overall happiness."]

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
