# Documentation

## HTML

    * header h1
    * div scoreboard
        * div user
        * div comp
        * span for user and comp score

    * div result

    * div choices
        * div rock
            *img
        * div paper
            *img
        * div scissor
            *img

## CSS

    * Remove default styling
    * display blocks side to side by
        * display:inline-block

    *score board big div with user amd comp p
        *position:relative
        * div inside score board is
            *position:absolute to arrange them according to parent

## JavaScript

    * function
        * main
        * game
        * computer choice
        * update score


    ### function definition

        * main function
            * add the event listner to each div of img so that when anyone is clicked call the function and send the value of Rock clicked send the r value to game function to take user input


        * game Function
            * call the computer choice and get the userchoice and compare and call the update score function send 1 if computer wins to update score

        * computer choice
            * choose between three vaues :- r,p,s using random function and return s the value

        * updateScores
            * receive two values 0 or 1 if computer wins 1 if user wins 0 based on that add the value to score + new value
