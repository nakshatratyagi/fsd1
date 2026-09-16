
function openwindow() {
    let quizWindow = window.open("", "_blank", "width=500,height=500");

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
                }
            </style>
        </head>

        <body>
            <h1>Quiz</h1>

            <p>1. What is HTML?</p>

            <input type="radio" name="q1"> Programming Language<br>
            <input type="radio" name="q1"> Markup Language<br>
            <input type="radio" name="q1"> Database<br><br>

            <p>1. What is HTML?</p>

            <input type="radio" name="q1"> Programming Language<br>
            <input type="radio" name="q1"> Markup Language<br>
            <input type="radio" name="q1"> Database<br><br>

            <p>1. What is HTML?</p>

            <input type="radio" name="q1"> Programming Language<br>
            <input type="radio" name="q1"> Markup Language<br>
            <input type="radio" name="q1"> Database<br><br>

            <button onclick="window.close()">Submit</button>
        </body>
        </html>
    `);
    quizWindow.document.close();
    }
