//blank starting variables + 1 for begnning point
var num1 = 0;
var num2 = 1;
sum = 0;

var fibonnaciEven = function(maxNumber){
    // run the calculation for sequence until input number is reached 
	while(num2 <= maxNumber){
		num2 += num1;
		//faster way to set the previous number in the looped calculation
		num1 = num2 - num1;
	//determine if the number is even 
		if(num2 % 2 === 0){
			sum += num2;
		}
        
     
	}

};

fibonnaciEven(4000000);
console.log(sum);