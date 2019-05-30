console.log("this is javascript test");


var userScore=0;
var computerScore=0;

var userScore_span=document.getElementById("userscore");
var computerScore_span=document.getElementById("computerscore");

var scoreBoard_div=document.querySelector(".score-board");
var result_div=document.querySelector(".result");

var rock_div=document.getElementById("r");
var paper_div=document.getElementById("p");
var scissor_div=document.getElementById("s");

computerchoice();
function computerchoice() 
{
    var choice=["r","p","s"];
    
    var x=ParseInt(Math.random()*3);
    console.log(parseInt(x));

}

function game(userchoice) 
{
    console.log(userchoice);    
}

function main()
{
    
    rock_div.addEventListener('click',function(){

        //console.log("rock is being clicked");
        game("r");
    });

    paper_div.addEventListener('click',function(){
       // console.log("paper is being clicked");
        game("p");
    });

    scissor_div.addEventListener('click',function () {
        //console.log("scissor is clicked");
        game("s");
    });

}

main();

