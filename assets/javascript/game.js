var time = 30;
var intervalId;
var timerOn = false;
var questionCounter = 1;
var answerHolder = [];
var j = 0;
var l = 0;
var questionsObj = {questions : ["The Internet Meme 'All your base are belong to us' is based on the poorly translated English Version of which Video Game?",
"In 2012 the German-speaking microstate 'Liechtenstein' in Central Europe had a population of how many inhabitants?",
"What is the romanized Chinese word for 'airplane'?",
"What is the English title of the vaporwave track 'リサフランク420 / 現代のコンピュー' by Macintosh Plus (Vektroid)?",
"Which of these names was an actual codename for a cancelled Microsoft project?",
"The Battle of Hastings was fought in which year?",
"How many voice channels does the Nintendo Entertainment System support natively?",
"Which product did Nokia, the telecommunications company, originally sell?",
"Which year was the third Super Bowl held?",
"In Guild Wars 2, what is the name of the Hylek's sun god?"],
    answers: [
        ["Zero Wing", "F-Zero", "Wing Commander", "Star Wars: X-Wing"],
        ["36,600", "2,400", "90,000", "323,400"],
        ["Feiji", "Qiche", "Zongxian", "Huojian"],
        ["Lisa Frank 420 / Modern Computing", "Smoke Weed 420 / Everyday", "Make Your Move 420 / My Mind", "It's All In Your Head 420 / Understand"],
        ["Neptune", "Enceladus", "Pollux", "Saturn"],
        ["1066", "911", "1204", "1420"],
        ["5", "4", "6", "3"],
        ["Paper", "Phones", "Computers", "Processors"],
        ["1969", "1968", "1971", "1970"],
        ["Zintl", "Huelec", "Ameyalli", "Cueyatl"],

    ]
}

$(".answer-0").text(" ");
$(".answer-1").text(" ");
$(".answer-2").text(" ");
$(".answer-3").text(" ");

function shuffle(array) {

    var k = 0;
    var temp;

    for (var i = array.length - 1; i > -1; i--) {
        k = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[k];
        array[k] = temp;

    }

}

function timer() {

    timerOn = true;
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 200);

}

function countDown() {
    if (time > 0) {
        time--;
        $("#timer").text("Time remaining: " + time);

    } else {

        timerOn = false;
        clearInterval(intervalId);
        $(".question-holder").text("Time is up");
        $("#answer-0").text(" ");
        $("#answer-1").text(" ");
        $("#answer-2").text(" ");
        $("#answer-3").text(" ");

        if (j < 10) {
            setTimeout(function () {

                answerHolder = [];

                for (var i = 0; i < 4; i++) {

                    answerHolder.push(questionsObj.answers[j][i]);
                }
                j++;
                time = 30;
                questions();

// Need to make missed answers add to incorrect score 
// need to have it show a gif for this too

            }, 2000)
        }
    }
}

function questions() {

    var answerTracker = questionsObj.answers[l];
    shuffle(answerTracker);
    timer();
    $("#timer").text("Time remaining: " + time);
    $(".question-holder").text(questionsObj.questions[l]);
    $("#answer-0").text(answerTracker[0]);
    console.log(answerHolder[0])
    $("#answer-0").attr("value", answerHolder.indexOf(answerTracker[0]));
    $("#answer-1").text(answerTracker[1]);
    console.log(answerHolder[1])
    $("#answer-1").attr("value", answerHolder.indexOf(answerTracker[1]));
    $("#answer-2").text(answerTracker[2]);
    console.log(answerHolder[2])
    $("#answer-2").attr("value", answerHolder.indexOf(answerTracker[2]));
    $("#answer-3").text(answerTracker[3]);
    console.log(answerHolder[3])
    $("#answer-3").attr("value", answerHolder.indexOf(answerTracker[3]));

    l++;
}


$(".btn").click(function () {

    if (!timerOn && l < 10) {

        answerHolder = [];

        for (var i = 0; i < 4; i++) {

            answerHolder.push(questionsObj.answers[j][i]);
        }

        j++;
        time = 30;
        questions();
    }
});

$(".answer-btn").click(function () {

    if ($(this).text() == answerHolder[0]) {

        // Need to set time to 0 then give a correct answer gif
        // need to add correct answer counter
    

    } else {

        // need to set time to 0 then give a gif for the wrong answer

    }
});


// need to add end message and to give score
// need to make the button disappear when the game is started
// 