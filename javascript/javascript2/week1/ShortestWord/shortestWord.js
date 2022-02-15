const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWordFinder(word){
    let shortestWord = word.reduce((a, b) => (a.length <= b.length ? a : b));
    console.log(shortestWord);
}

shortestWordFinder(danishWords)