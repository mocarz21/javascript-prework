function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
    }else if(argMoveId == 3){
        return 'nożyce';
    }else
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == argPlayerMove){
       return 'Remis';
    }else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz';
    }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz';
    }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz';
    }else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Przegrywasz';
    }else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Przegrywasz';
    }else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Przegrywasz';
    }else{
        return "niema takiego ruchu miałeś wpisac 1,2,3";
    }
}  

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('wybierz swój ruch! 1: kamień 2:papier 3:nozyce');
let playerMove = getMoveName(playerInput);

printMessage('twoj ruch to ' + playerMove);
printMessage('Mój ruch to: ' + computerMove);

let result = displayResult(computerMove, playerMove);

printMessage('Wynik: ' + result)

