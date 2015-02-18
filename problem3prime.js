//array to store prime numbers
//var primeArray = [];
var largePrimeFactor = 0;
var prime = 0;

var primeNumbers = function(number){
    // run the calculation for sequence until input number is reached 
    for(var x=2; x <= number; x++){
        
        //determine if given number is divisble by X
        if(number % x === 0){
            //check every number and see if given number is divisible 
            for(var y = 2; y < Math.sqrt(x); y++){
              //  console.log(x);
            if(number % y === 0){
                //console.log(x);
            //basic return if number is not prime factor
            return false;
             }  
             else 
             {
             largePrimeFactor = x;
            }
            }
            
        
        }
    }

};
//call the function
primeNumbers(600851475143);
//log the result 
console.log(largePrimeFactor);