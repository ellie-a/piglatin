1. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

2. The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

3. The program treats words beginning with "y" as a consonant.
  Example Input: Yacht
  Example Output: achtYay

4. The program will move the first consecutive consonants to the end, and add "ay."
  Example Input: Street
  Example Output: eetStray

5. The program treats words beginning with "qu", it attaches the "u"to the "q". ie; "qu". If the "qu" doesn't come first, treat as normal word.
  Example Input: Quit; Squeal
  Example Output: itQuay; ealSquay

//reads or makes first consonant capitalized 
