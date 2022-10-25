

function getRandomChoice() {
    const random = Math.floor(Math.random() * 3);
    let choice = '';
    // console.log(random);
    if (random === 0) {
        choice = "Scissors"
    } else if (random === 1) {
        choice = "Rock"
    } else {
        choice = "Paper"
    }
    // console.log(choice);
    return choice
}

function playRound(playerSelection, computerSelection) {
    let playerScore, computerScore;
    if (playerSelection === computerSelection) {
        console.log(`Tie ${playerSelection} does not beat ${computerSelection}`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore += 1;
        return `Player loses ${playerSelection} does NOT beat ${computerSelection}`
    }
}

// console.log(playRound(getRandomChoice(), getRandomChoice()));

function game(gamesToPlay) {
    for (let i = 0; i < gamesToPlay; i++) {
        console.log(playRound(getRandomChoice(), getRandomChoice()));
    }
}

console.log(game(10));
