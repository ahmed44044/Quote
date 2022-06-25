var NewQuote = [] 

NewQuote [0] ="You miss 100% of the shots you don't take."

'--Wayne Gretzy';

NewQuote [1]="The best revenge is massive success." ;
NewQuote [2] = "Resentment is like drinking poison and waiting for your enemies to die.";
NewQuote [3] ="Do not take life too seriously. You will not get out alive.";
NewQuote [4] ="It's not what happens to you, but how you react to it that matters.";
var AddQuote = []
 AddQuote [0] = '--Wayne Gretzy';
 AddQuote [1] = '--Frank Sinatra';
 AddQuote [2] = '--Nelson Mandela';
 AddQuote [3] = '--Elbert Hubbard';
 AddQuote [4] ='--Epictetus';

 function New() {
    var randomQuote = Math.floor(Math.random()*(NewQuote.length));
    var random1Quote = Math.floor(Math.random()*(AddQuote.length))
    document.getElementById('caption').innerHTML = NewQuote[randomQuote];
  
    document.getElementById('say').innerHTML = AddQuote[randomQuote];
  

 }