
let score  = 20;
let highscore = 0; 

document.querySelector(".check").addEventListener(`click`,function(){
    // console.log("user is clicked");
    const userInput= Number (document.querySelector(".input").value);
    console.log("computer",computerGuess);
    console.log( "user",userInput);

    document.querySelector(".guess")

    if(userInput === 0)
        {
            document.querySelector(".message").textContent=" Not Entered number🚫";
            score--
            document.querySelector(".score1").textContent=score
      
        }
       else if(userInput < computerGuess)
            {
                document.querySelector(".message").textContent= "too low";
                score--
                document.querySelector(".score1").textContent=score
            }
else if(userInput > computerGuess)
                {
                    document.querySelector(".message").textContent= "too High";
                    score--
                    document.querySelector(".score1").textContent=score

                }
            
               else if(userInput === computerGuess)
                    {
                        document.querySelector(".guess").textContent = computerGuess;
                        document.querySelector(".message").textContent= "You gussed it Right✅";
                        document.querySelector("body").style.backgroundColor=`green`;
                        // score++
                        document.querySelector(".score1").textContent=score
                       
                        if(highscore < score){
                            highscore = score;
                            document.querySelector(".highscore1").textContent = score;
                        }
                    

                    }
                    
                
        
      

}

) 
document.querySelector(".again").addEventListener(`click`,function(){
    document.querySelector(".message").textContent= "Start Guessing....🤔";
    score = 20;
    document.querySelector(".score1").textContent=20;
    document.querySelector(".input").value="";
    document.querySelector(".guess").textContent= "?";
    document.querySelector("body").style.backgroundColor="black";
    randNumber();


}) 
 
let computerGuess;
randNumber();

// this is function for to computer to guess the number
function randNumber(){
  
    computerGuess= Math.trunc(Math.random() * 20 + 1);
// console.log(computerGuess);
 return computerGuess;
}


