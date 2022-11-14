//Write a function called hasMoreVowels that takes in one argument, word. When the function is called, 
//return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, 
//without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

function hasMoreVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for(let i = 0; i < word.length; i++) {
        if (vowels.includes(formalized[i])) {
            vowelCount++
        }
    }
    if(word.length - vowelCount >= word.length / 2) {
        return false
    } else {
        return true;
    }
}

hasMoreVowels('cat')