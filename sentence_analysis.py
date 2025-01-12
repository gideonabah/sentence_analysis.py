#######################################
# Sentence Analysis Script
# Developed in VSCode Style
#######################################

# Initialize counters
from itertools import tee


character_count = 0
word_count = 0
vowel_count = 0

# List of vowels
vowels = "aeiouAEIOU"

# Input the sentence
print("Enter a sentence ending with a period:")
sentence = input()

# Check if the input ends with a period
if not sentence.endswith("."):
    print("Error: Sentence must end with a period.")
else:
    # Process each character in the sentence
    for i, char in enumerate(sentence):
        # Increment character count for each character except the period
        if char != ".":
            character_count += 1

        # Count words: A word starts after a space or is the first word in the sentence
        if char == " " and i > 0 and sentence[i - 1] not in " .":
            word_count += 1

        # Count vowels
        if char in vowels:
            vowel_count += 1

    # Include the last word if the sentence is not empty or invalid
    if sentence[-2] not in " .":
        word_count += 1

    # Display the results
    print("\n==============================")
    print("Analysis Results:")
    print("==============================")
    print(f"Length of the sentence (number of characters, excluding the period): {character_count}")
    print(f"Number of words in the sentence: {word_count}")
    print(f"Number of vowels in the sentence: {vowel_count}")
    print("==============================\n")

