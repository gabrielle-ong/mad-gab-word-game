'use strict'
var score1 = 0;
var score2 = 0;
$("score1").text(score1);
$("score2").text(score2);



$( function pageLoaded () {
    
//Questions and Answers
var madGab = [               
        {
        question: "Choke late Die Scream", 
        answer: "chocolate ice cream",
        hint: "Dessert"
        },
        {
        question: "Verge in Ollie Foil", 
        answer: "virgin olive oil",
        hint: "Food"
        },        
        {
        question: "Assess Seam Ease Heed", 
        answer: "a sesame seed",
        hint: "A ...(food)"
        },
        {
        question: "Owe Forth Account Her Rug", 
        answer: "over the counter drug",
        hint: "Medicine"
        },
        {
        question: "Hook Keys Anchor Ream", 
        answer: "cookies and cream",
        hint: "Ice Cream Flavor"
        },
        {
        question: "Abe Nun Appeal", 
        answer: "a banana peel",
        hint: "A...(part of a fruit)"
        },    
        {
        question: "Ape Hand Dub Hair", 
        answer: "a panda bear",
        hint: "A ... (animal)"
        }, 
        {
        question: "Why Tell If Hunt", 
        answer: "white elephant",
        hint: "Color + Animal"
        }, 
        {
        question: "Of Lions Quarrel", 
        answer: "a flying squirrel",
        hint: "A...(animal)"
        }, 
        {
        question: "Ace Life Ox", 
        answer: "a sly fox",
        hint: "A...(description)(animal)"
        }, 
        {
        question: "Made Divorce Pea Whiff Ewe", 
        answer: "may the force be with you",
        hint: "Movie quote"
        },
        {
        question: "Spike Ids", 
        answer: "spy kids",
        hint: "Movie"
        },  
        {
        question: "Pie Rate Softy Care Hip Been", 
        answer: "pirates of the carribean",
        hint: "Movie"
        }, 
        {
        question: "Law Duff There Inks", 
        answer: "lord of the rings",
        hint: "Movie"
        }, 
        {
        question: "Chore His Sick Perk", 
        answer: "jurassic park",
        hint: "Movie"
        }, 
        {
        question: "Ladle Rat Rotten Hoot", 
        answer: "little red riding hood",
        hint: "Book"
        }, 
        {
        question: "Rome He Owe Hand Jewelry Yet", 
        answer: "romeo and juliet",
        hint: "Book"
        }, 
        {
        question: "Sheik Cans Hoop Fur Thistle", 
        answer: "chicken soup for the soul",
        hint: "Book"
        }, 
        {
        question: "Dock Terse Ooze", 
        answer: "dr seuss",
        hint: "Dr...(Author)"
        }, 
        {
        question: "Git Read He Fort Hey Cough", 
        answer: "get ready for take off",
        hint: "Heard on a plane"
        },
        {
        question: "Wreck You Lure Hoard The Cafe?", 
        answer: "regular or decaf?",
        hint: "while ordering coffee + ?"
        },
        {
        question: "Whole League How", 
        answer: "holy cow",
        hint: "conversational phrase"
        },
        {
        question: "Hype Peeb Earth Hey", 
        answer: "happy birthday",
        hint: "conversational phrase"
        },
        {
        question: "Doe Judge A Boo K Bye Discover", 
        answer: "dont judge a book by its cover",
        hint: "Idiom"
        },  
        {
        question: "The Gran Crayon", 
        answer: "the grand canyon",
        hint: "Landmark"
        },   
   ]  
    
//General - turns and rounds
    var seconds = 60;
    var timerID;
    var currentPlayer = 1;
    var round = 1; 
    var wdiStatus;
    var i;

//aboutContainer
$("#next").click(function(){             
    $("#startContainer").css("display", "none"); 
    $("#aboutContainer").css("display", "flex");
})

//startContainer       
    $('#letsPlay').click(function (){                   
        $("#aboutContainer").css("display", "none"); 
        $("#switchContainer").css("display", "flex");
        $("#switchContainerRound").text("Round " + round);
        $(".currentPlayer").text("Player " + currentPlayer)
        
//switchContainer
    $('#begin').click(function (){
        $(".currentPlayer").text("Player " + currentPlayer)
        $("#switchContainer").css("display", "none"); 
        $("#gameContainer").css("display", "flex");
        timerID = window.setInterval(updateTime, 1000);
        console.log("Timer" + timerID + "Started");
        $("input").val('');
        showQuestion();
        $("#timer").text("60");
    });     
    
//gameContainer:
    
    function showQuestion () {
        $("#question").text(madGab[i].question);
        $("input").attr("placeholder", "Hint: " + madGab[i].hint);
        $("input").val("");
        $("span").html("");
        if ((i+1)===madGab.length) {
            
            window.clearInterval(timerID);
            $("#gameContainer").css("display", "none");  $("#noMoreQuestions").css("display", "flex");
        }
        console.log(i);
        console.log(madGab.length);
    }
    
//submit - enter button
    $("input").keypress(function (e) {
        if (e.which ==13) {
            //this refers to $("input")
            jQuery('#submit').click();
        }
    }); 
//submit- check question    
    $("#submit").on("click", checkQuestion)	
    function checkQuestion() {
        $("#submit").css("background-color", "#FFB6C1");     setTimeout(function () {
            $("#submit").css("background-color", "white")
        }, 200); 
        
        var input = $("input").val();
        function nextQuestion(){
            i+=1; 
            showQuestion();
        }
        if (input.toLowerCase() === madGab[i].answer) {
            $("span").html('&#10004;').css("color", "red").show();
            setTimeout(nextQuestion, 1000);
            
            if (currentPlayer ===1) {
                score1 += 1;
            } 
            else {
                score2 += 1;
            }    
        }
        else {  
            $("span").html('&#10007;').css("color", "red").show();
            setTimeout(function () {
            $("span").html('&#10007;').hide();}, 1000);    
            } 
        $("score1").text(score1);
        $("score2").text(score2);
    }
//skip question    
    $("#skip").on("click", function () {
        i+=1;
        showQuestion();
    })	    
//timer countdown, reach 0    
    function updateTime() {    
        seconds--;
        $("#timer").text(seconds);
        if (seconds === 0) {
           $("#gameContainer").css("display", "none"); 
            window.clearInterval(timerID);
            console.log("round over timer" + timerID + "stopped ")
            seconds = 60;
            if (currentPlayer === 1) {      
                $("#switchContainer").css("display", "flex");
                currentPlayer = 2;
            }
            else {
                $("#endContainer").css("display", "flex");
                checkWinner();
                $("#roundOver").text("Round " + round + " Over:");
                
                round+=1;                $("#switchContainerRound").text("Round " + round);
                currentPlayer = 1;
            }
            $(".currentPlayer").text("Player " + currentPlayer)
        }
    }  
//pause game    
    $("#pause").on("click", pauseGame)	
    function pauseGame () {     
        window.clearInterval(timerID);
        console.log("timer" + timerID + "paused")
        $("#gameContainer").css("display", "none"); 
        $("#pauseContainer").css("display", "flex");           
    }                                      
//pauseContainer - resume game
    $("#resume").on("click", resumeGame)	
    function resumeGame () {     
        $("#pauseContainer").css("display", "none"); 
        $("#gameContainer").css("display", "flex");
        // creates a new timer 
        timerID = window.setInterval(updateTime, 1000);
        console.log("resume timer " + timerID)
    }
    
//Reset button in Pause, End noMoreQuestions Container
    $(".reset").on("click", resetGame)	
    function resetGame() {
        $("#pauseContainer").css("display", "none"); 
        $("#endContainer").css("display", "none"); 
        $("#noMoreQuestions").css("display", "none");
        $("#startContainer").css("display", "flex");
        seconds = 60;
        $("#timer").text("60");
        score1 = 0;
        score2 = 0;
        $("score1").text(score1);
        $("score2").text(score2);
    }
    
//endContainer - check winner
    function checkWinner (){
        console.log("Player 1's score: " + score1);
        console.log("Player 2's score: "+ score2);
        if (score1 > score2) {
            $("#remarks1").text("You are winning!");
            $("#remarks2").text("Keep trying!");  
        }
        if (score1===score2) {
            $("#remarks2").text("You are now tied");
            $("#remarks1").text("You are now tied");
        }
        if (score1 < score2) {
            $("#remarks2").text("You are winning!");
            $("#remarks1").text("Keep trying!");  
        }
    };
    
//nextround     
    $('#nextRound').click(function (){              
        $("#switchContainer").css("display", "flex"); 
        $("#timer").text("60"); $("#endContainer").css("display", "none");
    });
    
});