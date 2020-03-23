let choices = ["Rock", "Paper", "Scissors"];
let winCounter = 0;
let loseCounter = 0;
let tieCounter = 0;

function RockPaperSci(userChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerAlert = 'The computer chose ' + computerChoice + '.';
    let userAlert;
    let winsAlert;

    if (userChoice == computerChoice) {
        userAlert = " It was a tie."
        tieCounter += 1;
    }
    else if (userChoice == 'Paper') {
        switch(computerChoice) {
            case 'Scissors':
                userAlert = ' You lose!';
                loseCounter += 1;
                break;
            case 'Rock':
                userAlert = ' You win!';
                winCounter += 1;
                break;
        }
    }
    else if (userChoice == 'Rock') {
        switch(computerChoice) {
            case 'Paper':
                userAlert = ' You lose!';
                loseCounter += 1;
                break;
            case 'Scissors':
                userAlert = ' You win!';
                winCounter += 1;
                break;
        }
    }
    else if (userChoice == 'Scissors') {
        switch(computerChoice) {
            case 'Rock':
                userAlert = ' You lose!';
                loseCounter += 1;
                break;
            case 'Paper':
                userAlert = ' You win!';
                winCounter += 1;
                break;
        }
    };

    winsAlert = " Wins: " + winCounter.toString();
    lossesAlert = " Losses: " + loseCounter.toString();
    tiesAlert = " Ties: " + tieCounter.toString();

    alert(computerAlert + userAlert + winsAlert + lossesAlert + tiesAlert);

}   



