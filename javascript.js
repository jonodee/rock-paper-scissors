
// Define acceptable answers
answers = ["rock", "paper", "scissors"]

// define the variables 
playerChoice = ""
computerChoice = ""
playerScore = 0
computerScore = 0

function checkPlayerChoice(playerChoice){
    // checks the players choice is valid 
    if (answers.includes(playerChoice)){
        return true
    }
    else {
        return false
    }
}

function getPlayerChoice(){
    // Gets the players choice
    playerChoice = prompt("Please enter either rock, paper or scissors: ")
    playerChoice = playerChoice.toLowerCase()
    if (checkPlayerChoice(playerChoice)){
        console.log(`You chose ${playerChoice}`)
        return
    }
    else{
        alert("Please enter a valid option")
        getPlayerChoice()
    }
}

function generateComputerChoice(){
    // Picks a random choice for the computer 
    computerChoice = answers[Math.floor(Math.random()*answers.length)]
    console.log(`The computer chose ${computerChoice}`)
}

function didPlayerWin(playerChoice, computerChoice){
    // Checks who won
    if(playerChoice === computerChoice){
        console.log("It's a draw")
        return "draw"
    }
    else if(
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "rock")||
        (playerChoice === "paper" && computerChoice === "scissors")
    ){
        console.log("You lose")
        computerScore ++ 
        return "lose"
    }
    else {
        console.log("You win!")
        playerScore ++ 
        return "win"
    }
}

function game(){
    getPlayerChoice()
    generateComputerChoice()
    didPlayerWin(playerChoice, computerChoice)
    console.log(`The score is currently: Player = ${playerScore} Computer = ${computerScore}`)
    game()
}

game()