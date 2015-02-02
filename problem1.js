var numArray = [];
var sum = 0;


var findNumbers = function(){
 
    for(var x = 0; x < 1000; x++)
    {
        if( x % 3 === 0 || x % 5 === 0)
        {
            numArray.push(x);
        }
        
    }
       for(var s = 0; s < numArray.length; s++)
    {
        sum += numArray[s];
    }

    
};






findNumbers();

console.log(sum);