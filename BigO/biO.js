/*
fast to slow
- O(1) - constant (fastest)
- O(logn) - logarithmic
- O (n) - linear
- O(n^2) - quadratic
- O(k^n) - exponential(slowest) 
*/

var ray1 = [1, 2, 3];

ray1.forEach(); //Loop - O(n) -

// .pop()

ray1.pop(); // O(1) - constant - no matter what size array, always removes last one in array.

function strLength(str) {
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
  }
  return count;
} // This is O(n) linear since the number of loops depends on the length of string.

strLength('hello');
strLength('Verybigstringhere');
