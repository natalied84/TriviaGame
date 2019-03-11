var time = 30;
var intervalId;
var timerOn = false;
// var questionCounter = 1;
var answerHolder = [];
var j = 0;
var l = 0;
var correctAnswers = 0;
var answered = false;
var correctGIFs = ["assets/images/correct/accurate.gif", "assets/images/correct/colbert.gif", "assets/images/correct/exactly.gif", "assets/images/correct/friends.gif", "assets/images/correct/horse.gif", "assets/images/correct/horse2.gif", "assets/images/correct/offerman.gif", "assets/images/correct/trueFact.gif", "assets/images/correct/vageta.gif", "assets/images/correct/yup.gif", "assets/images/correct/futurama.gif"];
var incorrectGIFs = ["assets/images/incorrect/archer.gif", "assets/images/incorrect/britney.gif", "assets/images/incorrect/luke.gif", "assets/images/incorrect/no.gif", "assets/images/incorrect/scrubs.gif", "assets/images/incorrect/snl.gif", "assets/images/incorrect/steelPanther.gif", "assets/images/incorrect/schitts.gif", "assets/images/incorrect/teachers.gif", "assets/images/incorrect/thumb.gif", "assets/images/incorrect/giphy.gif"];
var endGIFs = ["assets/images/end/attempt.gif", "assets/images/end/awesome.gif", "assets/images/end/badJob.gif"];
var timesUpGIFs = ["assets/images/timesUp/snake.gif", "assets/images/timesUp/soccer.gif", "assets/images/timesUp/timesUp-1.gif"]
var questionsObj = {
    questions: ["The Internet Meme 'All your base are belong to us' is based on the poorly translated English Version of which Video Game?",
        "In 2012 the German-speaking microstate 'Liechtenstein' in Central Europe had a population of how many inhabitants?",
        "What is the romanized Chinese word for 'airplane'?",
        "What is the English title of the vaporwave track 'リサフランク420 / 現代のコンピュー' by Macintosh Plus (Vektroid)?",
        "Which of these names was an actual codename for a cancelled Microsoft project?",
        "The Battle of Hastings was fought in which year?",
        "How many voice channels does the Nintendo Entertainment System support natively?",
        "Which product did Nokia, the telecommunications company, originally sell?",
        "Which year was the third Super Bowl held?",
        "In Guild Wars 2, what is the name of the Hylek's sun god?"
    ],
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

shuffle(correctGIFs);
shuffle(incorrectGIFs);

function timer() {

    timerOn = true;
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 800);

}

function countDown() {
    if (time > 0) {
        time--;
        $("#timer").html("<h2>Time remaining: " + time + "<h2>");
        
    } else {

        timerOn = false;
        clearInterval(intervalId);
        $("#answer-0").text(" ");
        $("#answer-1").text(" ");
        $("#answer-2").text(" ");
        $("#answer-3").text(" ");
        if (answered === false) {
        $(".question-holder").html("<p id='center'><strong>The answer was: " + answerHolder[0] + ".</strong></p>");
            var k = Math.floor(Math.random() * 3);
            $("#gif-spot").append("<img class='gif' src='" + timesUpGIFs[k] + "'>");
        }

        if (j < 10) {
            setTimeout(function () {

                answerHolder = [];
                for (var i = 0; i < 4; i++) {
                    answerHolder.push(questionsObj.answers[j][i]);
                }
                $("#gif-spot").empty();
                j++;
                time = 30;
                questions();
                $("#timer").html("<h2>Time remaining: " + time + "<h2>");

            }, 5000);
        }

        if (j === 10) {

            setTimeout(function () {
                                
                $(".question-holder").html("<p id='end'><strong>You got " + ((correctAnswers / 10) * 100) + "% correct.</strong></p>");
                $("#gif-spot").empty();
                end()
                if ((correctAnswers / 10) > .8) {
                $("#gif-spot").append("<img class='gif' src='" + endGIFs[1] + "'>");
            } else if ((correctAnswers / 10) > .6) {
                $("#gif-spot").append("<img class='gif' src='" + endGIFs[0] + "'>");
            } else  {
                $("#gif-spot").append("<img class='gif' src='" + endGIFs[2] + "'>");
            }

            }, 9000);
        }
    }
}

function questions() {

    var answerTracker = questionsObj.answers[l];
    answered = false;
    shuffle(answerTracker);
    timer();
    $(".question-holder").html("<p><strong>" + questionsObj.questions[l] + "</strong></p>");
    $("#answer-0").text(answerTracker[0]);
    $("#answer-0").attr("value", answerHolder.indexOf(answerTracker[0]));
    $("#answer-1").text(answerTracker[1]);
    $("#answer-1").attr("value", answerHolder.indexOf(answerTracker[1]));
    $("#answer-2").text(answerTracker[2]);
    $("#answer-2").attr("value", answerHolder.indexOf(answerTracker[2]));
    $("#answer-3").text(answerTracker[3]);
    $("#answer-3").attr("value", answerHolder.indexOf(answerTracker[3]));
    l++;
}

$("#start").click(function () {

    $(".btn-holder").empty();
    $("#timer").html("<h2>Time remaining: " + time + "<h2>");
    j++;
    time = 30;

        for (var i = 0; i < 4; i++) {

            answerHolder.push(questionsObj.answers[0][i]);
        }

        questions();

});

function end() {

    j = 0;
    l = 0;
    correctAnswers = 0; 
    answered = false;
    answerHolder = [];
    timerOn = false;
    $(".btn-holder").html('<button type="button" id="restart" class="btn btn-primary btn-lg">Start Game!</button>')
    console.log(j, l, answerHolder)
}

$("restart").on("click", function () {
    
    gameover = true
    alert("test")
    clearInterval(intervalId);
    $(".btn-holder").empty();
    $("#gif-spot").empty();
    $("#timer").html("<h2>Time remaining: " + time + "<h2>");
    j++;
    time = 30;
        for (var i = 0; i < 4; i++) {

            answerHolder.push(questionsObj.answers[0][i]);
        }

        questions();

});

$(".answer-btn").click(function () {


    if ($(this).text() == answerHolder[0]) {

        clearInterval(intervalId);
        answered = true;
        timerOn = false;
        time = 0;
        correctAnswers++;
        $("#timer").text(" ");
        $(".question-holder").text(" ");
        $("#answer-0").text(" ");
        $("#answer-1").text(" ");
        $("#answer-2").text(" ");
        $("#answer-3").text(" ");
        $("#gif-spot").append("<img class='gif' src='" + correctGIFs[j] + "'>");
        countDown();

    } else {

        console.log(answerHolder[0])
        clearInterval(intervalId);
        answered = true;
        timerOn = false;
        time = 0;
        $("#timer").html("<h2> </h2>");
        $(".question-holder").html("<p id='center'><strong>The answer was: " + answerHolder[0] + ".</strong></p>");
        $("#answer-0").text(" ");
        $("#answer-1").text(" ");
        $("#answer-2").text(" ");
        $("#answer-3").text(" ");
        $("#gif-spot").append("<img class='gif' src='" + incorrectGIFs[j] + "'>");
        countDown();

    }
});


// need to add end message and to give score
// need to make the button disappear when the game is started
//