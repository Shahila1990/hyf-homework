const positiveWords = [];
const negativeWords = [];
function getSentimentScore(str) {
  const positiveWord = [
    'happy',
    'super',
    'awesome',
    'excited',
    'wonderful',
    'beautiful',
  ];
  const negativeWord = [
    'dull',
    'boring',
    'horrible',
    'awful',
    'terrible',
    'dreadful',
  ];

  for (let i = 0; i < positiveWord.length; i++) {
    let word = positiveWord[i];

    if (str.includes(word)) {
      positiveWords.push(word);
    }
  }
  // console.log(positiveWords);

  for (let i = 0; i < negativeWord.length; i++) {
    let word = negativeWord[i];

    if (str.includes(word)) {
      negativeWords.push(word);
    }
  }
  let score = positiveWords.length - negativeWords.length;
  //console.log(negativeWords);

  let sentimentScoreObject = {
    score: score,
    positiveWords: positiveWords,
    negativeWords: negativeWords,
  };

  console.log(`Score: ${sentimentScoreObject.score}, 
PositiveWords: [${sentimentScoreObject.positiveWords}], 
NegativeWords: [${sentimentScoreObject.negativeWords}]`);
}

getSentimentScore('I hate doing boring dull stuff');



