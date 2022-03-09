const playGame=function(playerInput){
    clearMessages();
    const getMoveName=function(argMoveId){
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
    const displayResult=function(argComputerMove, argPlayerMove){
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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    const result = displayResult(computerMove, playerMove);
  
    printMessage('twoj ruch to ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Wynik: ' + result)

}
document.getElementById('kamien').addEventListener('click', function(){
    playGame("1")
});
document.getElementById('papier').addEventListener('click', function(){
    playGame('2');
});
document.getElementById('nozyce').addEventListener('click', function(){
    playGame('3');
});
