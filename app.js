console.log("this is javascript test");


var userScore=0;
var computerScore=0;

var userScore_span=document.getElementById("userscore");
var computerScore_span=document.getElementById("computerscore");

var scoreBoard_div=document.querySelector(".score-board");
var result_div=document.querySelector(".result>p");
//for the division we use query selector and for the id element we use document.getElementById


var rock_div=document.getElementById("r");
var paper_div=document.getElementById("p");
var scissor_div=document.getElementById("s");


function updateScores(whowins)
{
    //console.log("printing user score  "+userScore_span.innerHTML);
   // userScore_span.innerHTML=++userScore_span.innerHTML;

    var userOldValue=userScore_span.innerHTML;
    var computerOldValue=computerScore_span.innerHTML;
    if (whowins==0)
     {
      console.log("userwins update its value " );
      userScore_span.innerHTML=++userOldValue;
      result_div.innerHTML ="userwins";  
    }
    else if (whowins==1){
        console.log("computer wins update its value ");
        computerScore_span.innerHTML=++computerOldValue;
        result_div.innerHTML="computerwins";  
    }
    else{

        console.log("DRAW");
        result_div.innerHTML="Draw";
    }
}



var computerchoice;
function computerchoicefunc() 
{
    var choice=["r","p","s"];
    
    var x=Math.random()*3;
    var y=parseInt(x);
    console.log("computer choice is :-    "+choice[y]);
    computerchoice=choice[y];

}

function game(userchoice) 
{
    var x=0;  //userwins
    var y=1;  //compuerwins
    console.log("users choice is  "+userchoice);
    computerchoicefunc();

    if (userchoice=='r' && computerchoice=='p')
     {
        console.log("computer wins");
        updateScores(1);
    }
    else if (userchoice=='r' && computerchoice=='s') 
    {
        console.log("userwins");
        updateScores(0);    
    }
    else if (userchoice=='p' && computerchoice=='r') 
    {
        console.log("userwins");   
        updateScores(0); 
    }
    else if (userchoice=='p' && computerchoice=='s') 
    {
        console.log("computerwins"); 
        updateScores(1);   
    }
    else if (userchoice=='s' && computerchoice=='r') 
    {
        console.log("computerwins");  
        updateScores(1);  
    }
    
    else if (userchoice=='s' && computerchoice=='p') 
    {
        console.log("userwinswins");  
        updateScores(0);  
    }
    else{
        updateScores(-1);
    }

        
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

