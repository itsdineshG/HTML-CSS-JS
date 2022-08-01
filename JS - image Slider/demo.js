var x = 1;
setInterval(function (){
	document.getElementById('radio' + x).checked = true;
	x = x + 1;
},1500);

