
var box = $("#quiz");

//questions

var question = [
    {
        question: "What is your favorite shoe brand?",
        answers: ["Jordan", "Nike", "Adidas", "New Balance"],
        correctAnswer: "Nike"
    },
    {
        question: "Who's the goat of the NBA?",
        answers: ["Kobe", "Lebron", "Jordan", "Shaq"],
        correctAnswer: "Jordan"
    },
    {
        question: "What's the best fast food restaurant?",
        answers: ["Raising Canes", "McDonalds", "Carl's Jr.", "In N Out"],
        correctAnswer: "Raising Canes"
    },
    {
        question: "What is my favorite TV show?",
        answers: ["How I Met Your Mother", "The Office", "Parks and Recs", "Friends"],
        correctAnswer: "The Office"
    },
    {
        question: "What City am I in most?",
        answers: ["Irvine", "Corona", "Orange", "Cerritos"],
        correctAnswer: "Irvine"
    }
];

var game = {
    correctAnswer: 0,
    incorrectAnswer: 0,
    counter: 150,


    start: function() {
        timer = setInterval(gamecountdown, 1500);
        $("subwrap").append(
            "<h2>Time Remaining: <span id='countNumber'>150</span> Seconds</h2>"
        );
        $("#start").remove();

        for (var i = 0; i < question.length; i++) {
            box.append("<h1>" + question[i].question + "</h1>");   
        }
    },
    countdown: function() {
        play.counter--;
        $("countNumber").html(timer)
        if (timer === 0) {
            console.log(GG);
            play.done();
        }
    },
    done: function() {
        var input = box.child("input:checked");
        for (var i= 0; i < input.length; i++) {
        if ($(input[i]).val() === question[i].correctAnswer) {
                play.correct++;
              } else {
                play.incorrect++;
              }
            }
            this.result();
          },
         $(document).on("click", "#start", function() {
             play.start();
         }),
         $(document).on("click", "#done", function() {
            play.done();
        }),
    
       
          

        
        }

