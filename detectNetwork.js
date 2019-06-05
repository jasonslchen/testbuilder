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
  } else if ((length === 13 || length === 16 || length === 19) && firstTwo[0] === '4') {
    return 'Visa';
  } else if ((length === 16 || length === 19) && (cardNumber.slice(0, 4) === '6011' || (cardNumber.slice(0, 3) >= '644' && cardNumber.slice(0, 3) <= '649') || firstTwo === '65' )) {
    return 'Discover';
  } else if ((length >= 12 && length <= 19) && (cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '6304')) {
    return 'Maestro';
  }
};


