module.exports = function toReadable(number) {
    let res = ''
    let numToStr = String(number);
    let numToArr = numToStr.split('');
    let units = ['zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    let tw = ['twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 0 && number < 10) {
        res = units[number];
    } else if (number >= 10 && number < 20) {
        res = tens[number - 10];
    } else if (number >= 20 && number < 100 && number % 10 === 0) {
        res = tw[number / 10 - 2];
    } else if (number >= 100 && number % 100 === 0) {
        res = units[number / 100] + " " + "hundred";
    } else if (number > 100) {
        let decimals = Number(numToArr[1] + numToArr[2]);
        if (numToArr[1] === 0) {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + units[numToArr[1]];
        }
        else if (decimals < 10) {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + units[numToArr[2]];
        }
        else if (decimals >= 10 && decimals < 20) {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + tens[numToArr[2]];
        }
        else if (decimals >= 20 && decimals < 100 && decimals % 10 === 0) {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + tw[numToArr[1] - 2];
        } else if (decimals >= 20 && decimals < 100 && decimals % 10 !== 0) {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + tw[numToArr[1] - 2] + " " + units[numToArr[2]];
        }
        else {
            res = units[Math.floor(number / 100)] + " " + "hundred" + " " + tw[numToArr[1] - 2] + " " + units[numToArr[2]];
        }
    } else {
        res = tw[numToArr[0] - 2] + " " + units[numToArr[1]];
    }

    return res;
}