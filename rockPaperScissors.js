console.log("hello world")

//write function to return random string

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
    if (playerSelection === computerSelection) {
        console.log(`Tie ${playerSelection} does not beat ${computerSelection}`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `Computer loses ${playerSelection} beats ${computerSelection}`
    } else {
        return `Player loses ${playerSelection} does NOT beat ${computerSelection}`
    }
}

console.log(playRound(getRandomChoice(), getRandomChoice()));

