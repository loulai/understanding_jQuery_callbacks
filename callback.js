function mySandwich(param1, param2, callback) {
	alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
	var sandwich = {toppings: [param1, param2]},
		madeCorrectly = (typeof(param1) === "string" && typeof(param2) === "string") ? true : false;
	if (callback && typeof(callback) === "function") {  
        callback.apply(sandwich, [madeCorrectly]);  
	}  
}  
  
mySandwich('ham', 'cheese', function(correct) {
	if(correct) {
		alert("Finished eating my " + this.toppings[0] + " and " + this.toppings[1] + " sandwich.");
	} else {
		alert("Gross!  Why would I eat a " + this.toppings[0] + " and " + this.toppings[1] + " sandwich?");
	}
});