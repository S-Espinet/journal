export function Entry(words) {
  this.words = words;
}

Entry.prototype.wordCounter = function() {
  if ((this.words).trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = (this.words).split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  })
  return wordCount;
};

Entry.prototype.findVowel = function() {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of (this.words)) {
    if (vowels.includes(char)) {
      vowelsCount++;
      console.log(vowelsCount);
    }
  }
};
