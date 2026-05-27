const quizData = [

{
    question: "Which is a common phishing sign?",

    answers: [
        "Urgent warning messages",
        "Verified official domain",
        "Trusted sender"
    ],

    correct: 0
},

{
    question: "What should you check in a website URL?",

    answers: [
        "Game graphics",
        "HTTPS security",
        "Wallpaper quality"
    ],

    correct: 1
},

{
    question: "What is social engineering?",

    answers: [
        "Website designing",
        "Psychological manipulation",
        "Coding language"
    ],

    correct: 1
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

    const questionEl =
    document.getElementById("question");

    const answersEl =
    document.getElementById("answers");

    questionEl.innerText =
    quizData[currentQuestion].question;

    answersEl.innerHTML = "";

    quizData[currentQuestion].answers.forEach(
    (answer,index)=>{

        const button =
        document.createElement("button");

        button.innerText = answer;

        button.onclick = ()=>checkAnswer(index);

        answersEl.appendChild(button);
    });
}

function checkAnswer(selected){

    if(selected === quizData[currentQuestion].correct){

        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizData.length){

        loadQuestion();
    }

    else{

        document.getElementById("quiz-container")
        .innerHTML = `

        <h2>Quiz Completed!</h2>

        <h3>Your Score: ${score}/${quizData.length}</h3>

        `;
    }
}

function scrollToQuiz(){

    document.getElementById("quiz")
    .scrollIntoView({
        behavior:"smooth"
    });
}

loadQuestion();