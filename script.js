var width = window.innerWidth;
var fibonacci = [1, 1];
var output = document.getElementById('output');
output.width = width;
function isNumber(e){
    e = e || window.event;
    var charCode = e.which ? e.which : e.keyCode;
    return /\d/.test(String.fromCharCode(charCode));
}
function fib() {
	var n = document.getElementById('positionFib').value;
	for (var i = 2; i < n; i ++) {
  		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	}
	document.getElementById('output').innerHTML = fibonacci.slice(0,n);
}