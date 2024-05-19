var array = [12,5,20,7,3,14,11,8,19,1,18,10,13,16,9,4,17,6,2,15];
      
array.sort(function(a, b) {
  return a - b;
});
console.log("Sorted Array: " + array.join(", "));

