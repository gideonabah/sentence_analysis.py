function analyzeSentence(sentence) {
    let length = 0;  // Counter for the length of the sentence
    let wordCount = 0;  // Counter for the number of words
    let vowelCount = 0;  // Counter for the number of vowels
    const vowels = "aeiouAEIOU";  // String of vowel characters
    let inWord = false;  // Boolean variable to track whether we're in a word

    // Loop through the sentence character by character
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++;  // Increment length for every character

        if (char === '.') {
            break;  // End of sentence, stop processing
        }

        if (char === ' ') {
            if (inWord) {  // If we were in a word and encounter space, count the word
                wordCount++;
            }
            inWord = false;  // We're no longer in a word
        } else {
            inWord = true;  // We encountered a non-space, so we're in a word
            if (vowels.includes(char)) {  // Check if the character is a vowel
                vowelCount++;
            }
        }
    }

    // If we were in a word and reached the end of the sentence, count the last word
    if (inWord) {
        wordCount++;
    }

    return { length, wordCount, vowelCount };
}

// Example usage
const sentence = "Hello there, how are you today.";
const result = analyzeSentence(sentence);

console.log("Length of sentence:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);
