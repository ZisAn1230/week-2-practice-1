
function findDivisibleNumbers() 
{
    var divisibleNumbers = []; 
  
    for (var i = 1; i <= 50; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        divisibleNumbers.push(i); 
      }
    }
  
    return divisibleNumbers; 
  }
  
  console.log("Print");
  console.log(findDivisibleNumbers());
  