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

function decode(expr) {
    let temp='', array=[];
    for (let i=0; i<=expr.length; i++) {
        if (i%10===0 && i!==0) {
            array.push(temp);
            temp=expr[i];
        }
        else temp+=expr[i];
    }
    for (let i=0; i<array.length; i++) {
        array[i]=array[i].replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "").replace(/\*{10}/g, " ");
        if (array[i]!==' ') array[i]=MORSE_TABLE[array[i]];
    }
    return array.join('');
}

module.exports = {
    decode
}
