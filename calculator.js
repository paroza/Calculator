//The calculator 
//source: http://www.teaching-materials.org/javascript/exercises/calculator.html
//the default return value of a funciton if you don't set one
//is undefined; 

function squareNumber(num) {
	
	 var squared = num * num; 
	 console.log("The result of squaring the number" + num + " is" + squared); 
	 return squared; 
}

function halfNumber(num) {
	var half = num / 2; 
	console.log("Half of " + num + " is" + half); 
	return half; 
}

function percentOf(num1, num2) {
	//figure out what percent the first number 
	//represents of the second number
	//var percent = num2/num1; 
	//make sure to multiply it by 100; 
	var percent = (num1/num2) * 100; 
	console.log(num1 +  " is " + percent + "% of " + num2 ); 
	return percent; 

}

function areaOfCircle(radius) {
	// var area = Math.round(Math.PI * (radius * radius)); 
	var area = Math.PI * (radius * radius); 
	//this is how you round your number to the two nearest decimals
	var roundArea = Math.round(area * 100)/100; 
	console.log("The area for a circle with radius " + radius + " is " + roundArea);
	//this is how you round the number; 
	return roundArea; 

}

function calculator(num) {
	var half = halfNumber(num); 
	var squared = squareNumber(half); 
	var area = areaOfCircle(squared); 
	//var percentage = Math.round(percentOf(squared,area));
	var percentage = percentOf(squared, area);  

	console.log("Half of " + num + " is " + half + "and squaring that result gives you " + squared + " which would give you the area of a circle with that radius as " + area + " and the percentage of that area of the squred result is " + percentage); 
	return half, squared, area, percentage; 


}

calculator(5); 
//percentOf(10,100); 
//areaOfCircle(5); 