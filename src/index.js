const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const binaryToMorse = {
    '10': '.',
    '11': '-',
    '00': ''
}

function decode(expr) {
    let result = '';
  
    for(i = 0; i < expr.length - 1; i = i + 10){
      // resultInMorse = resultInMorse + binaryToMorse[expr.slice(i, i + 2)];
      currentWord = expr.slice(i, i + 10);
      wordInMorse = '';
      if(currentWord === '**********'){
        wordInMorse = ' ';
        result = result + wordInMorse;
      }
      else{
        for(n = 0; n < currentWord.length - 1; n = n + 2){
  
          if(binaryToMorse[currentWord.slice(n, n + 2)] === ''){
            wordInMorse = wordInMorse;
          }
          else{
            wordInMorse = wordInMorse + binaryToMorse[currentWord.slice(n, n + 2)];
          }
  
        }
        result = result + MORSE_TABLE[wordInMorse]; 
      } 
    }
    return result.trim();
  }

module.exports = {
    decode
}