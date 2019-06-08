// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
 

var detectNetwork = function(cardNumber) {
  let length = cardNumber.length;
  let firstTwo = cardNumber.slice(0, 2);
  if (length === 14 && (firstTwo === '38' || firstTwo === '39')) {
    return "Diner's Club";
  } else if (length === 15 && (firstTwo === '34' || firstTwo === '37')) {
    return 'American Express';
  } else if (length === 16 && (firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55')) {
    return 'MasterCard';
  } else if (cardNumber[0] === '4') {
    if ((cardNumber.slice(1, 4) === '903' || cardNumber.slice(1, 4) === '905' || cardNumber.slice(1, 4) === '911' || cardNumber.slice(1, 4) === '936') && (length === 16 || length === 19 || length === 18)) {
      return 'Switch';
    } else if (length === 13 || length === 16 || length === 19) {
      return 'Visa';
    }
  } else if (cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110' || cardNumber.slice(0, 4) === '6333' || cardNumber.slice(0, 4) === '6759') {
    return 'Switch';
  } else if ((length === 16 || length === 19) && (cardNumber.slice(0, 4) === '6011' || (cardNumber.slice(0, 3) >= '644' && cardNumber.slice(0, 3) <= '649') || firstTwo === '65' )) {
    return 'Discover';
  } else if ((length >= 12 && length <= 19) && (cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304')) {
    return 'Maestro';
  } else if (ChinaUnionPay(cardNumber.slice(0, 6), length)) {
    return 'China UnionPay';
  }
};


var ChinaUnionPay = function(card, length) {

  for (let prefix = 624; prefix <= 626; prefix++) {
    if ((length >= 16 && length <= 19) && prefix.toString() === card.slice(0, 3)) {
      return true;
    } 
  }
  for (let prefix = 622126; prefix <= 622925; prefix++) {
    if ((length >= 16 && length <= 19) && prefix.toString() === card) {
      return true;
    } 
  }
  
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    if ((length >= 16 && length <= 19) && prefix.toString() === card.slice(0, 4)) {
      return true;
    } 
  }
}

