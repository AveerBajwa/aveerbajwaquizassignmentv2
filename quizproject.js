let currentQuestion = 0;
let score = 0;
let numOfHints = 3;
let questions = [{
        "question": "Which of these exercises would be most affective at working the brachialis muscle?",
        "a": "Dumbell front raises",
        "b": "Overhead extensions",
        "c": "Reverse curls",
        "d": "Leg extensions",
        "image": "quizimages/q1.jpg",
        "hint": "It also works out your forearms.",
        "answer": "c"
    },
    {
        "question": "What year did Arnold Schwarzenegger first win the Mr. Olympia title?",
        "a": "1970",
        "b": "1972",
        "c": "1981",
        "d": "1980",
        "image": "quizimages/q2.jpg",
        "hint": "It was a long time ago.",
        "answer": "a"
    },
    {
        "question": "A balanced exercise regime is necessary for the development of muscle groups. Which of these is not a recognised exercise in bodybuilding?",
        "a": "Leg press",
        "b": "Chest pulls",
        "c": "Lat Pulldown",
        "d": "Bicep Curls",
        "image": "quizimages/q3.jpg",
        "hint": "Pulling motions work your back",
        "answer": "b"
    },
    {
        "question": "Dietary supplements are frequently used in sports. Which one of these supplements is illegal in professional bodybuilding?",
        "a": "Vitamin C",
        "b": "Anabolic steroids",
        "c": "Protein shakes",
        "d": "Multivitamins and minerals",
        "image": "quizimages/q4.jpg",
        "hint": "It stimulates muscle tissue to grow",
        "answer": "b"
    },
    {
        "question": "The major muscle groups in bodybuilding are generally referred to by shortened versions of their anatomical names. Which of these might a non-bodybuillatsder also call a 'six pack?'",
        "a": "Lats ",
        "b": "Pecs ",
        "c": "Abs",
        "d": "Quads ",
        "image": "quizimages/q5.jpg",
        "hint": "Crunches and Plank work out this muscle group",
        "answer": "c"
    },
    {
        "question": "What is the name of the most prestigious bodybuilding competition in the world?",
        "a": "Arnold Classic",
        "b": "Mr. Worldwide",
        "c": "Mr. America",
        "d": "Mr. Olympia",
        "image": "quizimages/q6.jpeg",
        "hint": "Chris Bumstead won last year",
        "answer": "d"
    },
    {
        "question": "If you are in the gym 'workin your lats', which bodypart would you be focusing on for your workout?",
        "a": "Quads",
        "b": "Chest",
        "c": "Back",
        "d": "Forearms",
        "image": "quizimages/q7.jpg",
        "hint": "You exercise in a pulling motion",
        "answer": "c"
    },
    {
        "question": "Which of the following exercises does NOT involve the deltoid muscles?",
        "a": "Bench press",
        "b": "One-arm dumbbell rows",
        "c": "Shrugs",
        "d": "Military press",
        "image": "quizimages/q8.jpg",
        "hint": "Deltoids are your shoulders",
        "answer": "b"
    },
    {
        "question": "Warm-up is:",
        "a": "A waste of valuable energy that should be saved for the weights.",
        "b": "Great for getting the body to burn extra calories during the following workout.",
        "c": "A neat trick for getting your body going so you can lift heavier weights.",
        "d": "A way to prepare your joints and muscles so that your risk of injury decreases.",
        "image": "quizimages/q9.jpg",
        "hint": "You can warmup with light cardio, stretching and Activation Exercises",
        "answer": "d"
    },
    {
        "question": "The benefit of cardiovascular training is:",
        "a": "Improved aerobic capacity for oxygen-intensive exercises like squats, deadlifts etc.",
        "b": "Bodyfat control.",
        "c": "Heart health.",
        "d": "All the above.",
        "image": "quizimages/q10.jpg",
        "hint": "Cardio is great for all age groups",
        "answer": "d"
    }
];

// // call the annonymous function every 1000 ms or 1 second
// let downloadTimer;

// let actualTimer = function() {

    // // update display
    // document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    // timeleft -= 1; // decrement time left


    // // if time runs out, end timer
    // if (timeleft <= 0) {
        // clearInterval(downloadTimer);

        // //first: display light box with message in it
        // document.getElementById("lightbox").style.display = "block";
        // document.getElementById("message").style.backgroundColor = "grey";
        // document.getElementById("message").innerHTML = "You took too much time, NEXT QUESTION!!!!";

        // //second: load next question with loadQuestion()

        // loadQuestion();
    // }
// };


function loadQuestion() {
	
	// clearInterval(downloadTimer);
    // timeleft = 15;
    // downloadTimer = setInterval(actualTimer, 1000);
	
    document.getElementById("restart").onclick = function() {
        location.reload();
    }
    closeEndBox();
    closeStartBox();
    // close light box for first question
    if (currentQuestion == 0) {
        closeLightBox();
    }

    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70%";
    img.style.maxHeight = "auto";

    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;


    let hintbutton = document.getElementById("hintbutton");
    hintbutton.addEventListener("click", showHint);
} // loadQuestion


function markIt(ans) {

    let message = "";
    let hintbutton = document.getElementById("hintbutton");

    if (ans == questions[currentQuestion].answer) {

        // add 1 to score
        score++;

        // display score
        document.getElementById("score").innerHTML = ": " + score + " / " + questions.length;
        document.getElementById("message").style.backgroundColor = "darkgreen";
        message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
        document.getElementById("message").style.backgroundColor = "red";
        document.getElementById("score").innerHTML = ": " + score + " / " + questions.length;
        message = "Incorrect :< Your score is " + score + " / " + questions.length;

    } // else


    let hintext = document.getElementById("hint");
    // move to the next question
    currentQuestion++;
    hintbutton.disabled = false;
    hintext.innerText = "You have " + numOfHints + " Hints remaining, Press 'Need Hint?' for a Hint!";
    hintbutton.innerText = "Need a Hint?";
    if (currentQuestion >= questions.length) {
        document.getElementById("endscreen").style.visibility = "visible";
		document.getElementById("endMessage").innerHTML = "You are a great person! Horses are amazing! Your score is: " + score + " / " + questions.length;
    } else {
        loadQuestion();
    }

    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;

} // markIt

function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
} // closeLightbox

function closeStartBox() {
    document.getElementById("startbox").style.display = "none";
} // closeLightbox

function closeEndBox() {
    document.getElementById("endscreen").style.visibility = "hidden";
} // closeLightbox


function showHint() {
    let hintbutton = document.getElementById("hintbutton");
    let hintext = document.getElementById("hint");
    if (numOfHints >= 1) {
        numOfHints--;
        hintbutton.disabled = true;
        hintbutton.innerText = numOfHints + " hints left";
        hintext.innerText = questions[currentQuestion].hint;
    } else {
        hintbutton.disabled = true;
        hintbutton.innerText = "You have no hints left :(";
    }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}   