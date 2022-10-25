console.log("hello world")

//write function to return random string

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    let choice = '';
    console.log(random);
    if (random === 0) {
        choice = "Scissors"
    } else if (random === 1) {
        choice = "Rock"
    } else {
        choice = "Paper"
    }
    console.log(choice);
    return choice;
}

getComputerChoice();