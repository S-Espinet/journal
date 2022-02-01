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
  });
  return wordCount;
};

Entry.prototype.getTeaser = function() {
  const wordArray = (this.words).split(" ");
  const newArray = wordArray.slice(0, 8);
  const split =  newArray.join(" ");
  return split;
};