  function piglatin(sentence) {
    //debugger;
  var lowerCase = sentence.replace(/[^a-z\s]/g, "").toLowerCase();
  var words = lowerCase.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  //for(i=0; i < words.length; i++){
    consonants.forEach(function(consonant){
      if ( consonant === words[0]){
        var firstLetter = words.shift();
        words.push(firstLetter);
      }
    });

    vowels.forEach(function(itemOne){
      if (itemOne === words[0]){
        words.push("ay");
        }
      });
    //}
  var joiner = words.join("");
  return joiner;
};


$(document).ready(function(){
  $("#piglatin").click(function(){
    event.preventDefault();
    var sentence = $("input#user").val();
    var result = piglatin(sentence);
    $ ("#result").append(result);
  });
});
