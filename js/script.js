

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}else if(randomNumber == '2'){
    computerMove = 'papier';
}else if(randomNumber == '3'){
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('wybierz swój ruch! 1: kamień 2:papier 3:nozyce');
console.log('Gracz wpisał'+ playerInput);
let playerMove = 'nieznany ruch';
if(playerInput == '1'){
    playerMove = 'kamień';
}else if(playerInput == '2'){
    playerMove = 'papier';
}else if(playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('twoj ruch to ' +playerMove)

let result = 'niewiadoma';


if(playerMove == computerMove){
    result = 'Remis';
}else if( computerMove == 'kamień' && playerMove == 'papier'){
    result = 'Ty wygrywasz';
}else if( computerMove == 'papier' && playerMove == 'nożyce'){
    result = 'Ty wygrywasz';
}else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    result = 'Ty wygrywasz';
}else if( computerMove == 'papier' && playerMove == 'kamień'){
    result = 'Przegrywasz';
}else if( computerMove == 'nożyce' && playerMove == 'papier'){
    result = 'Przegrywasz';
}else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    result = 'Przegrywasz';
}else{result = "niema takiego ruchu miałeś wpisac 1,2,3" }
printMessage('Wynik: ' + result)