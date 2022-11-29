// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let romanNum = '';
    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num - thousands * 1000) / 100);
    let tens = Math.floor((num - (thousands * 1000 + hundreds * 100)) / 10);
    let ones = num - (thousands * 1000 + hundreds * 100 + tens * 10);

    romanNum += 'M'.repeat(thousands);
    hundreds === 9 ? romanNum += 'CM' : hundreds >= 5 ? romanNum += 'D' + 'C'.repeat(hundreds - 5) : hundreds === 4 ? romanNum += 'CD' : romanNum += 'C'.repeat(hundreds);
    tens === 9 ? romanNum += 'XC' : tens >= 5 ? romanNum += 'L' + 'X'.repeat(tens - 5) : tens === 4 ? romanNum += 'XL' : romanNum += 'X'.repeat(tens);
    ones === 9 ? romanNum += 'IX' : ones >= 5 ? romanNum += 'V' + 'I'.repeat(ones - 5) : ones === 4 ? romanNum += 'IV' : romanNum += 'I'.repeat(ones);
    return romanNum;
}

convertToRoman(1990);