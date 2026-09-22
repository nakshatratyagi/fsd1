function openwindow(event) {

    event.preventDefault();

    let quizWindow = window.open(
        "",
        "_blank",
        "width=500,height=550,left=500,top=150"
    );

    quizWindow.document.write(`
        <html>

        <head>
            <title>Quiz</title>

            <style>

                body {
                    font-family: Arial;
                    padding: 30px;
                    background-color: #f2f2f2;
                }

                #quiz {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                }

                h1 {
                    text-align: center;
                }

                #timer {
                    color: red;
                    font-weight: bold;
                    text-align: right;
                }

                #progress {
                    font-weight: bold;
                }

                .option {
                    padding: 12px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .option:hover {
                    background-color: #eeeeee;
                }

                .selected {
                    background-color: lightgreen;
                    border-color: green;
                }

                button {
                    padding: 10px 20px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-top: 15px;
                }

                button:hover {
                    background-color: darkblue;
                }

            </style>
        </head>


        <body onload="showQuestion()" onkeydown="keyboardEvent(event)">

            <h1>Quiz</h1>

            <p id="timer">Time: 10</p>

            <p id="progress"></p>

            <div id="quiz"></div>

            <button onclick="nextQuestion()">Next</button>


            <script>

                let questions = [

                    {
                        question: "What is HTML?",
                        options: [
                            "Programming Language",
                            "Markup Language",
                            "Database"
                        ],
                        answer: 1
                    },

                    {
                        question: "What is CSS?",
                        options: [
                            "Programming Language",
                            "Styling Language",
                            "Database"
                        ],
                        answer: 1
                    },

                    {
                        question: "What is JavaScript?",
                        options: [
                            "Programming Language",
                            "Markup Language",
                            "Database"
                        ],
                        answer: 0
                    }

                ];


                let currentQuestion = 0;
                let score = 0;
                let time = 10;
                let timer;


                function showQuestion() {

                    clearInterval(timer);

                    time = 10;

                    document.getElementById("timer").innerHTML =
                        "Time: " + time;

                    let q = questions[currentQuestion];


                    document.getElementById("progress").innerHTML =
                        "Question " +
                        (currentQuestion + 1) +
                        " of " +
                        questions.length;


                    document.getElementById("quiz").innerHTML =

                        "<p><b>" +
                        q.question +
                        "</b></p>" +

                        "<div class='option' onclick='selectOption(0)' id='option0'>" +
                        "<input type='radio' name='answer' value='0'>" +
                        q.options[0] +
                        "</div>" +

                        "<div class='option' onclick='selectOption(1)' id='option1'>" +
                        "<input type='radio' name='answer' value='1'>" +
                        q.options[1] +
                        "</div>" +

                        "<div class='option' onclick='selectOption(2)' id='option2'>" +
                        "<input type='radio' name='answer' value='2'>" +
                        q.options[2] +
                        "</div>";


                    timer = setInterval(function() {

                        time--;

                        document.getElementById("timer").innerHTML =
                            "Time: " + time;


                        if (time == 0) {

                            clearInterval(timer);

                            nextQuestion();

                        }

                    }, 1000);

                }


                function selectOption(option) {

                    let options =
                        document.getElementsByClassName("option");


                    for (let i = 0; i < options.length; i++) {

                        options[i].classList.remove("selected");

                    }


                    document.getElementById("option" + option)
                        .classList.add("selected");


                    document.querySelector(
                        "input[value='" + option + "']"
                    ).checked = true;

                }


                function nextQuestion() {

                    let selected =
                        document.querySelector(
                            "input[name='answer']:checked"
                        );


                    if (selected) {

                        if (
                            Number(selected.value) ==
                            questions[currentQuestion].answer
                        ) {

                            score++;

                        }

                    }


                    currentQuestion++;


                    if (currentQuestion < questions.length) {

                        showQuestion();

                    }

                    else {

                        clearInterval(timer);


                        document.getElementById("quiz").innerHTML =
                            "<h2>Quiz Completed!</h2>" +
                            "<p>Your Score: " +
                            score +
                            " / " +
                            questions.length +
                            "</p>";


                        document.getElementById("timer").innerHTML = "";

                        document.getElementById("progress").innerHTML = "";


                        document.querySelector("button")
                            .style.display = "none";

                    }

                }


                function keyboardEvent(event) {

                    if (event.key == "1") {

                        selectOption(0);

                    }


                    if (event.key == "2") {

                        selectOption(1);

                    }


                    if (event.key == "3") {

                        selectOption(2);

                    }


                    if (event.key == "Enter") {

                        nextQuestion();

                    }

                }


                showQuestion();

            <\/script>

        </body>

        </html>
    `);

    quizWindow.document.close();
}