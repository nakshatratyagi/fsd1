function openwindow(event) {

    event.preventDefault();

    let quizWindow = window.open(
        "",
        "_blank",
        "width=500,height=500,left=500,top=150"
    );

    quizWindow.document.write(`
        <html>
        <head>
            <title>Quiz</title>

            <style>
                body {
                    font-family: Arial;
                    padding: 30px;
                }

                button {
                    padding: 10px 20px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .option {
                    margin: 15px 0;
                }
            </style>
        </head>

        <body>

            <h1>Quiz</h1>

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

                function showQuestion() {

                let q = questions[currentQuestion];

                document.getElementById("quiz").innerHTML =
                    "<p><b>Question " + (currentQuestion + 1) + ":</b> " +
                    q.question + "</p>" +

                    "<div class='option'>" +
                    "<input type='radio' name='answer' value='0'>" +
                    q.options[0] +
                    "</div>" +

                    "<div class='option'>" +
                    "<input type='radio' name='answer' value='1'>" +
                    q.options[1] +
                    "</div>" +

                    "<div class='option'>" +
                    "<input type='radio' name='answer' value='2'>" +
                    q.options[2] +
                    "</div>";
            }

                function nextQuestion() {

                    let selected = document.querySelector(
                        'input[name="answer"]:checked'
                    );

                    if (!selected) {
                        alert("Please select an answer!");
                        return;
                    }

                    if (Number(selected.value) == questions[currentQuestion].answer) {
                        score++;
                    }

                    currentQuestion++;

                    if (currentQuestion < questions.length) {
                        showQuestion();
                    }
                    else {

                       document.getElementById("quiz").innerHTML =
                    "<h2>Quiz Completed!</h2>" +
                    "<p>Your Score: " + score + " / " + questions.length + "</p>";
                        document.querySelector("button").style.display = "none";
                    }
                }

                showQuestion();

            <\/script>

        </body>
        </html>
    `);

    quizWindow.document.close();
}


