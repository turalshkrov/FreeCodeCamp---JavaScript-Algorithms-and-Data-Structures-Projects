// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    if(/[^-0-9 ()]/.test(str) || str.replaceAll(/[- ()]/g, "").length < 10 || str.replaceAll(/[- ()]/g, "").length > 11) {
      return false;
    } else {
      if(str.replaceAll(/[- ()]/g, "").length === 11 && str[0] !== '1') {
        return false;
      } else if(str[str.length - 1] === ')' || (str.includes('(') && !str.includes(')')) || (str.includes(')') && !str.includes('(')) || str.split('-').length > 3) {
        return false;
      }
      return true;
    }
  }
  
  telephoneCheck("555-555-5555");