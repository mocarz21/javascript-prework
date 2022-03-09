function printMessage(msg){
    
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
    

}

function pMe(msg){
    
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('result').appendChild(div);

}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}