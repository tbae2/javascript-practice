var numArray = [];
var sum = 0;

//function to do calculations under 1000 
var findNumbers = function(){
 
    for(var x = 0; x < 1000; x++)
    {
        // applies logic to numbers produced and if is divisble by 3 or 5 is added to the sum.
        if( x % 3 === 0 || x % 5 === 0)
        {
            //adds value to the sum 
            sum += x;
        }
        
    }

    
};






findNumbers();

console.log(sum);