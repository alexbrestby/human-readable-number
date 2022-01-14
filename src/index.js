module.exports = function toReadable (number) {

    let simpleNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    let result = '';
    let numberToString = number.toString();
    let simplesCounter = number % 10;

    if ((numberToString.length) === 3) {
        var hundredCounter = parseInt(numberToString.slice(0, 1));
        var tenCounter = parseInt(numberToString.slice(1, 2));
    } else if ((numberToString.length) === 2) {
        var tenCounter = parseInt(numberToString.slice(0, 1));
    }

    if (number === 0) {
        return 'zero';
    }
 
    if (typeof hundredCounter !== 'undefined') {
        result += simpleNumbers[hundredCounter] + ' hundred';
        if (number % 100 !== 0) {
            result += ' ';
        }
    }
  
    if (tenCounter > 1) {
        result += tens[tenCounter] + (simplesCounter !== 0 ? ' ' : '') + simpleNumbers[simplesCounter];
    } else {
        result += simpleNumbers[number % 100];
    }

    return result;
  }

