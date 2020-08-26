/*
1.You wrote a function called guessMyNumber before... that simulated a guessing game: 
the idea is that the function picks a random number between 0 and 5, 
and you invoke the function with your guess -- if you and the function are thinking of the same number,
 you win! Otherwise, the function informs you that your guess was incorrect. 
 A version of this game might look like this (the randInt function is included for convenience):
*/
 function guessMyNumber(n) { 
 if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }
 /*
 Read and test both of the functions in your console.
 and then invoke the functions from the console) and affirm that you understand how they work; 
 then, answer the following questions: 
 At present, the guess should be between 0 and 5. 
 We can think of 5 as the upper bound of the guess. 

 How many times is the upper bound repeated? Three

 What if we wanted to change the upper bound to 6? How many changes would be required? 

 Four changes:
 creating an upperbound variable 
 instead of the number 5 put the upperbound variable (line 9 & line 11) 
 In line 12, change the text to say 'Out of bounds! Please try a number between 0 and ' +upperbpound+'.'

 Create a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. 
 If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change.  */
/*

Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, 
  e.g. 'Nope! The correct number was: X' (where X would have been the correct number).*/

 function guessMyNumber(n) { 
  var upperbound = 5;
  var actualvalue = randInt(upperbound);
 if (n > upperbound) { 
 return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.'; 
 } else if (n === actualvalue) { 
 return 'You guessed my number!'; 
 } 
 return 'Nope! The correct number was: '+ actualvalue
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(4)
 
 /*
2. At present, the guessing game picks a new random number every time it is 'played' (invoked). 
Now that you know how to make information persistent between function invocations, 
change the guessing game so that it picks a random number once and allows you to guess until you get the correct answer.*/

 function guessMyNumber(n) { 
  var upperbound = 5;
  var actualvalue = randInt(upperbound);
 if (n > upperbound) { 
 return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.'; 
 } while (n !== actualvalue) { 
 var n = parseInt(window.prompt('Please Guess Again:')) 
 } 
 return 'Nope! The correct number was: '+ actualvalue
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(4)

/*3.it would be really cool if, after the answer was guessed, the message included the number of guesses 
it had taken to find the answer; for example, 'You guessed my number in 3 guesses.
'Tangential Problem: What happens if you get the number right on the first try? 
Does it say, 'You guessed my number in 1 guesses.'? 
	If so, perhaps the wording should be different? Some better ideas are: 
       'You guessed my number in 1 guess.', 
       'Congratulations! You guessed my number on the first try!'*/

 function guessMyNumber(n) { 
  var upperbound = 5;
  var actualvalue = randInt(upperbound);
  var count=1
 if (n > upperbound) { 
 return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.'; 
 } while (n !== actualvalue) { 
 var n = parseInt(window.prompt('Guess Again:')) 
 count++
 }
 if (count===1) {
 	return 'Congratulations! You guessed my number on the first try!'
 } 
 return 'You guessed my number in ' + count + 'times.'

 return 'Nope! The correct number was: '+ actualvalue
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }

 guessMyNumber(4)
 /*

4.Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit.*/
function guessMyNumber(n) { 
  var upperbound = 5;
  var actualvalue = randInt(upperbound);
  var highscore = 10
  var count=1
  var limit=1
  if (n > upperbound) { 
    return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.';} 

    while (n !== actualvalue && limit>count){ 
      var n = parseInt(window.prompt('Guess Again:')) 
      count++}

      if (count===1){
        return  'Congratulations! You guessed my number on the first try!';} 

        return 'You guessed my number in ' + count + 'times.';
      } 
 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1));
 }

 guessMyNumber(4);

/*5.Keep track of a high score (the lowest number of guesses) between games, and, 
when the correct number has been guessed in a record number of times, 
include in the message something that indicates that a new high score has been set.*/
function guessMyNumber(n) { 
  var upperbound = 5;
  var actualvalue = randInt(upperbound);
  var highscore = 10
  var count=1
  var limit=8
  if (n > upperbound) { 
    return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.';} 

    while (n !== actualvalue && limit>count){ 
      var n = parseInt(window.prompt('Guess Again:')) 
      count++}

      if (count===1){
        highscore=1;
        return  'Congratulations! You guessed my number on the first try!';} 

        return 'You guessed my number in ' + count + 'times.';
      } 
 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1));
 }

 guessMyNumber(4);

/*6.Whenever a player wins, increase the difficulty by increasing the upperBound;
 whenever a player loses, decrease the difficulty by decreasing the upperBound.*/
 /*7.Implement a high/low hinting system to tell the the user that the guess is either too high or too low. 
You may want to increase the upperBound on the guess.*/
 var upperbound = 5;
 var highscore = 10;

 function guessMyNumber(n) { 
  var actualvalue = randInt(upperbound);
  var count=1;
  var limit=8;
  if (n > upperbound) { 
    return 'Out of bounds! Please try a number between 0 and ' + upperbound +'.';} 

    while (n !== actualvalue && limit>count){ 
      var n = parseInt(window.prompt('Guess Again:')) 
      count++}

      if(count > limit){
        upperbound --
        return "game over"
      }
      if (count < highscore){
        console.log ("New Record" + highscore)
      }
      if (count===1){
        highscore=1;
        upperbound++
        return  'Congratulations! You guessed my number on the first try!';} 

        upperbound++
        return 'You guessed my number in ' + count + ' times.';
      } 
 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1));
 }

 guessMyNumber(4);

.All of the following exercises involve augmenting the guessMyNumber function.
/*

// Your code is here








