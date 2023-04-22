// Define a function named "compareWords" that takes two parameters named "word1" and "word2"
function compareWords(word1, word2) {
  
  // Declare a variable named "similarLetters" and initialize it to an empty string
  let similarLetters = '';
  
  // Use a for loop to iterate through each letter in "word1"
  for (let i = 0; i < word1.length; i++) {
    const letter = word1[i]; // Get the current letter from "word1"
    
    // Check if "word2" includes the current letter, and if the letter is not already in "similarLetters"
    if (word2.includes(letter) && !similarLetters.includes(letter)) {
      // If the letter is in "word2" and not already in "similarLetters", add it to "similarLetters"
      similarLetters += letter;
    }
  }
  
  // Return the "similarLetters" variable after the for loop has finished
  return similarLetters;
}
