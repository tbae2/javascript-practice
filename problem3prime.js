//array to store prime numbers
//var primeArray = [];
var largePrimeFactor = 0;
var prime = 0;

var primeNumbers = function(number){
    // run the calculation for sequence until input number is reached 
    for(var x=2; x <= number; x++){
        
        if(number % x === 0){
            //console.log(x);
            for(var y = 2; y < Math.sqrt(x); y++){
              //  console.log(x);
            if(number % y === 0){
                //console.log(x);
            
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

primeNumbers(600851475143);
console.log(largePrimeFactor);