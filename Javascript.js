// When we click start/reset button->
    var play=false;
    var score;
    var timeRemVal;
    var action;
    var correctAnswer;
    var correctPos;
    
    // if we're playing: 
    document.getElementById("startGame").onclick = function() {

        if (play == true) {
            location.reload();   // reload page
        } 
        else {    // set score to 0
            play=true;
            hide("gameOver");
            score=0;
            document.getElementById("scoreVal").innerHTML=score;

            document.getElementById("startGame").innerHTML="Reset Game"; //Change the button to reset
            document.getElementById("time").style.display="block";
            timeRemVal=60;

            // show countdown box and start reducing time each second by 1.
            generateQandA();
            countDown();
        }
    }

    function countDown() {
        action = setInterval(function() {

            if (timeRemVal==0) {  //show gameover
                clearInterval(action);
                document.getElementById("sval").innerHTML=score;
                show("gameOver");
                hide("time");
                document.getElementById("startGame").innerHTML="Start Game";
                play=false;
            }
            timeRemVal-=1;
            document.getElementById("timRemVal").innerHTML=timeRemVal;
        }, 1000);
    }
    
    function generateQandA() {

        var x = 1+Math.round(19*Math.random());   
        var y = 1+Math.round(19*Math.random());

        document.getElementById("Ques").innerHTML=x+" x "+y;
        correctAnswer=x*y;

        correctPos=1+Math.round(3*Math.random());
        document.getElementById("box"+correctPos).innerHTML=correctAnswer;
        var answers=[correctAnswer];

        for (i=1; i<5; i++) {

            if (i==correctPos) continue;
            var wrongAnswer;
            do {
                wrongAnswer=(1+Math.round(9*Math.random()))*
                (1+Math.round(9*Math.random()));

            } while (answers.indexOf(wrongAnswer)>-1);

            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }

    for (i=1; i<5; i++) {

        document.getElementById("box"+i).onclick = function() {
            if (play == true) {
                if (this.innerHTML == correctAnswer) {
                    score++;
                    document.getElementById("scoreVal").innerHTML=score;
                    show("correct");
                    setTimeout(function() {
                        hide("correct");
                    }, 1000);
                    generateQandA();
                }
                else {
                    show("wrong");
                    setTimeout(function() {
                        hide("wrong");
                    }, 1000);
                }
            }
        }

    }

    function show(id) {
        document.getElementById(id).style.display="block";
    }

    function hide(id) {
        document.getElementById(id).style.display="none";
    }

        // if timeleft-> {
            // if (yes) continue;
            // else 
        //}
        //Generate new Q&A;
    
    //if we click on answer box
        // if we're playing
            //if (correct) {
            //     ->increase score by 1;
            //     ->show correct box for 1 sec;
            //     ->Generate new Q&A;
            // }
            // else -> show try again box for 1 sec;