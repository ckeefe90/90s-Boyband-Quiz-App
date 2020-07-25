const questions = [{ //1
        question: "Which boy band was one of the first & most popular?",
        options: [
            "NSYNC",
            "98 DEGREES",
            "BACKSTREET BOYS",
            "NEW KIDS ON THE BLOCK"
        ],
        answer: "NEW KIDS ON THE BLOCK",
        img: "NKOTB.jpg",
        alt: "New Kids on the Block"
    },
    { //2 
        question: "Who were the members of BACKSTREET BOYS?",
        options: [
            "Kevin Richardson, Jordan Knight, Joey McIntyre, Nick Carter, Jesse McCartney",
            "AJ McLean, Joey McIntyre, Brian Litrell, Lance Bass, Justin Jeffre",
            "Howie Dorough, Nick Carter, AJ McLean, Kevin Richardson, Brian Litrell",
            "Jordan Knight, Jeff Timons, Kevin Richardson, Justin Jeffre, Drew Lachey"
        ],
        answer: "Howie Dorough, Nick Carter, AJ McLean, Kevin Richardson, Brian Litrell",
        img: "backstreetboys.jpg",
        alt: "Backstreet Boys"
    },
    { //3
        question: "Who sang “New Kids on the Block had a bunch of hits, Chinese food makes me sick, And I think it’s fly when girls stop by, For the summer, for the summer”?",
        options: [
            "98 DEGREES",
            "BACKSTREET BOYS",
            "LFO",
            "O-TOWN"
        ],
        answer: "LFO",
        img: "SummerGirlsLFO.jpg",
        alt: "LFO"
    },
    { //4
        question: "Who were the members of NSYNC?",
        options: [
            "Chris Kirkpatrick, Jesse McCartney, Joey Fatone, Lance Bass, AJ McLean",
            "Chris Kirkpatrick, JC Chasez, Joey Fatone, Lance Bass, Justin Timberlake",
            "Brian Litrell, Justin Timberlake, Kevin Richardson, Joey Fatone, JC Chasez",
            "Jordan Knight, JC Chasez, Howie Dorough, Chris Kirkpatrick,Justin Timberlake"
        ],
        answer: "Chris Kirkpatrick, JC Chasez, Joey Fatone, Lance Bass, Justin Timberlake",
        img: "nsync2.jpg",
        alt: "Nsync"
    },
    { //5
        question: 'Who sang “Tell me why, Ain’t nothin’ but a heartache, Tell me why, Ain’t nothin’ but a mistake, Tell me why, I never want to hear you say, I want it that way”?',
        options: [
            "O-TOWN",
            "NEW KIDS ON THE BLOCK",
            "BACKSTREET BOYS",
            "DREAM STREET"
        ],
        answer: "BACKSTREET BOYS",
        img: "bsb.jpg",
        alt: "Backstreet Boys"
    },
    { //6
        question: "Who were the members of 98 Degrees?",
        options: [
            "Jason Orange, Howie Dorough,Jeff Timmons, Brian Litrell",
            "Drew Lachey, Nick Lachey, Justin Jeffre, Jeff Timmons",
            "Kevin Richardson, Jeff Timmons, Chris Kirkpatrick, Justin Jeffre",
            "Nick Lachey, Drew Lachey, Joey McIntyre, Jordan Knight"
        ],
        answer: "Drew Lachey, Nick Lachey, Justin Jeffre, Jeff Timmons",
        img: "98degrees2.jpg",
        alt: "98 Degrees"
    },
    { //7
        question: "Who sang the hit song “Bye Bye Bye”?",
        options: [
            "BACKSTREET BOYS",
            "NSYNC",
            "DREAM STREET",
            "NEW KIDS ON THE BLOCK"
        ],
        answer: "NSYNC",
        img: "nsync.jpg",
        alt: "Nsync"
    },
    { //8
        question: "Who were the members of New Kids on The Block?",
        options: [
            "Mark Wahlberg, Jordan Knight, Jonathan Knight, Howie Dorough, Justin Jeffre",
            "Donnie Wahlberg, Justin Jeffre, Joey McIntyre, Lance Bass, Ralph Tresvant",
            "Jordan Knight, Danny Wood, Joey McIntyre, Jonathan Knight, Donnie Wahlberg",
            "Danny Wood, Lance Bass, Kevin Richardson, Jesse McCartney, Matt Ballinger"
        ],
        answer: "Jordan Knight, Danny Wood, Joey McIntyre, Jonathan Knight, Donnie Wahlberg",
        img: "newkids.jpg",
        alt: "New Kids on the Block"
    },
    { //9
        question: "Who sang “It’s the hardest thing I’ll ever have to do, To look you in the eye and tell you I don’t love you”?",
        options: [
            "DREAM STREET",
            "LFO",
            "98 DEGREES",
            "BACKSTREET BOYS"
        ],
        answer: "98 DEGREES",
        img: "98Degrees.jpg",
        alt: "98 Degrees"
    },
    { //10
        question: "Which boy band member famously dated Britney Spears then later wrote a hit song about their breakup for his debut solo album?",
        options: [
            "Kevin Richardson, BACKSTREET BOYS",
            "JC Chasez, NSYNC",
            "Ashley Parker Angel, O-TOWN",
            "Justin Timberlake, NSYNC"
        ],
        answer: "Justin Timberlake, NSYNC",
        img: "jtbritney.jpg",
        alt: "Justin & Britney"
    },
];

//variables for update-box
let score = 0;
let questionNumber = 0;

//function for keeping score
function updateScore() {
    score++;
    $('.score').text(score);
}

//function for updating which question quiz is on
function updateNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}

//function clear main box
function clearMain() {
    $('main').children().remove();
}

//function to start quiz
function startQuiz() {
    score = 0;
    questionNumber = 0;
    $('.questionNumber').text(questionNumber + 1);
    generateQuestion();
}

//function to generate question
function generateQuestion() {
    clearMain();
    let question = questions[questionNumber];
    $('main').append(`
        <p>${question.question}</p>
        <form>
            <div id="options">
                <input type="radio" name="question" value="${question.options[0]}" required>${question.options[0]}
                <br/>
                <input type="radio" name="question" value="${question.options[1]}" required>${question.options[1]}
                <br/>
                <input type="radio" name="question" value="${question.options[2]}" required>${question.options[2]}
                <br/>
                <input type="radio" name="question" value="${question.options[3]}" required>${question.options[3]}
            </div>
            <button type="submit" id="submit-answer">SUBMIT</button>
        </form>
     `);
}

//function to submit answer
function submitAnswer(event) {
    event.preventDefault();
    let selected = $('input:checked').val();
    let correctAnswer = questions[questionNumber].answer;
    let isCorrect = checkAnswer(selected, correctAnswer);
    if (isCorrect)
        showPicture();
    else
        showCorrect();
}

//function to check answer
function checkAnswer(submit, correct) {
    return submit === correct;
}

//function for correct answers
function showPicture() {
    clearMain();
    updateScore();
    $('main').append(`
        <p>CORRECT!</p>
        <img src="images/${questions[questionNumber].img}" alt="${questions[questionNumber].alt}">
        <button id="next-question">NEXT</button>
    `);
}

//function for incorrect answers
function showCorrect() {
    clearMain()
    $('main').append(`
        <p>Oops! The answer was: 
        <br/>${questions[questionNumber].answer}</p>
        <img src="images/whoops.jpg" alt="Whoops">
        <button id="next-question">NEXT</button>
    `)
}

//function for next question
function nextQuestion() {
    if (questionNumber < 9) {
        updateNumber();
        generateQuestion();
    } else
        showResults();
}

//function for final results
function showResults() {
    clearMain();
    let response;
    let img;
    let alt;
    if (score >= 7) {
        response = "Did you have VIP passes??<br/>You are a SUPERFAN!";
        img = "nsyncsuperfan.jpg";
        alt = "Nsync Superfan"
    } else if (score >= 4) {
        response = "You probably went to a few concerts, or at least watched them on TV.";
        img = "bsb3.jpg";
        alt = "Backstreet Boys"
    } else {
        response = "Did you prefer 90s TV?";
        img = "tv.jpg";
        alt = "TV show 90210"
    }
    $('main').append(`
        <p>${response}</p>
        <img src="images/${img}" alt="${alt}">
        <button id="restart-quiz">RESTART</button>
    `);
}

//function to restart quiz
function restartQuiz() {
    clearMain();
    $('main').append(`
        <p>Are you ready to test your knowledge of 90s boy bands?!</p>
        <img src="images/boybands.jpg" alt="Boy bands">
        <button id="start-button" type="button">LET'S GET STARTED</button>
    `);
}

function event() {
    $('main').on('click', '#start-button', startQuiz);
    $('main').on('submit', submitAnswer);
    $('main').on('click', '#next-question', nextQuestion);
    $('main').on('click', '#restart-quiz', restartQuiz);
}
$(event);