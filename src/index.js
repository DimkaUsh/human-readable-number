module.exports = function toReadable (number) {

    let num = String(number).split('').reverse().join('');
    let resultString = ''
  
    for (let i = num.length - 1 ; i>-1 ; i--) {
        if (num.length > 1 && num[i] === '0'){continue}
        
        if (i === 3) {
        resultString += isOneChar(num[i]) + ' thousand'
        }
  
        if (i === 2) {
        resultString += isOneChar(num[i]) + ' hundred'
        }
  
        if (i === 1) {
            if (isTwoChar(num[i]+num[i-1])) {
                resultString += ' ' + isTwoChar(num[i]+num[i-1])
                break
            } else {
                resultString += ' ' + isDecimal(num[i])
            }
        }

        if (i === 0) {resultString += ' ' + isOneChar(num[i])}
    }
    
    return resultString.trim()
  
}



function isOneChar(num) {
    switch (num) {
        case '0' : return 'zero'; break
        case '1' : return 'one'; break
        case '2' : return 'two'; break
        case '3' : return 'three'; break
        case '4' : return 'four'; break
        case '5' : return 'five'; break
        case '6' : return 'six'; break
        case '7' : return 'seven'; break
        case '8' : return 'eight'; break
        case '9' : return 'nine'; break
    }
}

function isTwoChar(num) {
    switch (num) {
        case '10' : return 'ten'; break
        case '11' : return 'eleven'; break
        case '12' : return 'twelve'; break
        case '13' : return 'thirteen'; break
        case '14' : return 'fourteen'; break
        case '15' : return 'fifteen'; break
        case '16' : return 'sixteen'; break
        case '17' : return 'seventeen'; break
        case '18' : return 'eighteen'; break
        case '19' : return 'nineteen'; break
        default : return false
    }
}

function isDecimal(num) {
    switch (num) {
        case '2' : return 'twenty'; break
        case '3' : return 'thirty'; break
        case '4' : return 'forty'; break
        case '5' : return 'fifty'; break
        case '6' : return 'sixty'; break
        case '7' : return 'seventy'; break
        case '8' : return 'eighty'; break
        case '9' : return 'ninety'; break
    }
}