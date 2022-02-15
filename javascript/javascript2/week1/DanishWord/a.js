const danishLetter = ["æ", "ø", "å"];
const danishString1 = "Jeg har en blå bil";
const letter1 = danishLetter[0];
const letter2 = danishLetter[1];
const letter3 = danishLetter[2];

function countDanskLetters(str) {
  let total = 0;

  let totalLetter1 = 0;
  let totalLetter2 = 0;
  let totalLetter3 = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (danishLetter.includes(letter)) {
      total += 1;
      if (letter === letter1) {
        totalLetter1 += 1;
      } else if (letter === letter2) {
        totalLetter2 += 1;
      } else {
        totalLetter3 += 1;
      }
    }
  }
  let outPut = {
    total: total,
    æ: totalLetter1,
    ø: totalLetter2,
    å: totalLetter3,
  };
  console.log(outPut);
}
countDanskLetters("Blå grød med røde bær");
countDanskLetters("Jeg har en blå bil");
