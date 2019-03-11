$(document).ready(function() {
  var time = 20;
  var wrong = 0;
  var right = 0;
  var currentQuestion = 0;

  $("#glove").on("click", function() {
    console.log("Clicked Up Dog!!!");

    //question object
    var triviaQuestions = [
      {
        q: "Where was Jack Johnson born?",
        choices: [
          "Chicago, IL",
          "Atlanta, GA",
          "New orleans, LA",
          "Galvenston, TX"
        ]
      },
      {
        q: "What year did Jack Johnson win the heavy weight title?",
        choices: ["1898", "1908", "1940", "1920"]
      },
      {
        q: "Which famous Jack Johnson fight caused  riots in the aftermath?",
        choices: [
          "Johnson-Burns",
          "Johnson-Flynn",
          "Johnson-Jeffries",
          "Johnson-Willard"
        ]
      },
      {
        q: "How did Jack Johnson die?",
        choices: ["Gun shot", "In the ring", "Car crash", "Natural causes"]
      }
    ];

    var answers = ["Galvenston, TX", "1908", "Johnson-Jeffries", "Car crash"];

    //time related functions

    function showTime() {
      $("#timer").html(count(time));
      $("#timer").css({ visibility: "visible" });
    }
    showTime();

    //end time related functions

    //question display function
    function questionDisplay() {
      for (var i = 0; i < triviaQuestions.length; i++) {
        var container = $("<div>");

        var questionH2 = $("<h1>");
        var choice = $("<p>");
        choice.text(triviaQuestions[i].choices);

        questionH2.text(triviaQuestions[i].q);
        container.append(questionH2, choice);
        $("#game-container").append(container);
      }
      console.log(triviaQuestions);
    }

    //wins and loses display function
    function endGame() {}

    function removeContent() {
      // $("#game-container").empty();

      $("#main-title").empty();
      $("#boxing-glove-container").empty();
    }
    removeContent();
    questionDisplay();
  }); //on click end

  function count(time) {
    timer = setInterval(time, 1000);
    time--;
  }
  count();
  console.log(timer);
}); //doc ready end
