function isPalindrome () {
  var phrase = document.getElementById("myPhrase").value;
  var adjPhrase = phrase.replace(/\s/g, '').toLowerCase();
  var revPhrase = adjPhrase.split("").reverse().join("");
  if (revPhrase === adjPhrase) {
    document.getElementById("answerPalindrome").innerHTML = revPhrase + " is a palindrome of " + phrase;
  } else {
    document.getElementById("answerPalindrome").innerHTML = revPhrase + " is not a palindrome of " + phrase;
  }
}