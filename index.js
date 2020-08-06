var a = 0;
var b = 1;
var s;
var num = 0;
while (a < 400000 ) {
  s = a + b;
  a = b;
  b = s;
if (b % 2 == 0) {
  num += b;
    }
} ;

console.log(num);
