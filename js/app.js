/*-------------------------------- Constants --------------------------------*/
const questions = [
    {
        question: "You come across a river. what do you do?",
        answers: ["Build a raft", "Swim across", "Wait for help"],
        correct: 0
    },
    {
        question: "A wild animal blocks your path. how do you react?",
        answers: ["Run away", "Climb a tree", "Make loud noises"],
        correct: 1
    },
    {
        question: "You're lost deep in the jungle. What's your best option?",
        answers: ["Follow the sun", "Walk aimlessly", "Stay put"],
        correct: 0
    },
    {
        question: "You need to build an emergency shelter. What's most important?",
        answers: ["Protection from rain", "Visibility to rescuers", "Comfortable sleeping surface"],
        correct: 0
      },
      {
        question: "You find a still pond of water. How can you make it safe to drink?",
        answers: ["Boil it for 5 minutes", "Strain it through cloth", "Add salt to purify"],
        correct: 0
      },
      {
        question: "At night, you hear growling near your camp. What's your best action?",
        answers: ["Make loud noises", "Stay quiet and still", "Throw rocks in the direction of the sound"],
        correct: 1
      },
      {
        question: "You see dark storm clouds approaching. What should you do first?",
        answers: ["Find high ground", "Build a shelter", "Collect rainwater"],
        correct: 1
      },
      {
        question: "You encounter quicksand. What's the proper way to escape?",
        answers: ["Swim motions with arms", "Lie flat to distribute weight", "Grab nearby vegetation"],
        correct: 1
      },
      {
        question: "You need to signal for help. What's most effective during daytime?",
        answers: ["Shouting loudly", "Creating smoke signals", "Waving bright clothing"],
        correct: 2
      },
      {
        question: "A leech attaches to your leg. How should you remove it?",
        answers: ["Pull it off quickly", "Apply salt to it", "Slide fingernail under its mouth"],
        correct: 2
      },
      {
        question: "You find berries you don't recognize. What should you do?",
        answers: ["Eat only ripe ones", "Rub on skin first to test", "Avoid eating them completely"],
        correct: 2
      },
      {
        question: "You encounter a beehive. What's the safest approach?",
        answers: ["Collect honey for food", "Mark its location and avoid", "Smoke them out to get honey"],
        correct: 1
      }
];
const maxHealth = 10;
const healthLoss = 3;

/*---------------------------- Variables (state) ----------------------------*/
let currentQuestion = 0;
let health = maxHealth;

/*------------------------ Cached Element References ------------------------*/
const questionText = document.querySelector("#question");
const buttons = document.querySelectorAll(".answer-btn");
const healthText = document.querySelector("#health");
const messageText = document.querySelector("#message");
const resetBtn = document.querySelector("#reset");

/*-------------------------------- Functions --------------------------------*/
function startGame() {
    currentQuestion = 0;
    health = maxHealth;
    resetBtn.style.display = "none";
    healthText.textContent = "Health: " + health;
    messageText.textContent = "You are lost in the jungle. Try to find your way out";
    showQuestion();
}

startGame();

function showQuestion() {
    let q = questions[currentQuestion];
    questionText.textContent = q.question;
    buttons.forEach((btn, i) => {
        btn.textContent = q.answers[i];
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        currentQuestion++;
        messageText.textContent = "Correct answer. Next question";
        if (currentQuestion === questions.length) {
            endGame("Congratulations! You found your way out of the jungle!");
            return;
        }
    } else {
        health -= healthLoss;
        healthText.textContent = "Heath: " + health;
        messageText.textContent = "Wrong answer. 3 points lost";
        if (health <= 0) {
            endGame("You're dead! You lost")
            return;
        }
    }
    showQuestion();
}

function endGame(message) {
    messageText.textContent = message;
    resetBtn.style.display = "block";
}


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => checkAnswer(index));
});

resetBtn.addEventListener("click", startGame);

