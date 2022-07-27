function clr(){
	document.getElementById("calc").value = "";
}
function dis(val){
	document.getElementById("calc").value = document.getElementById("calc").value + val;
}
function ans(){
 let x = document.getElementById("calc").value;
 let y = eval(x);
 document.getElementById("calc").value = y;
}
