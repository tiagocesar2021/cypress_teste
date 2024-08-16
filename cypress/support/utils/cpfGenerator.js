function generateRandomDigits(length) {
    let digits = '';
    for (let i = 0; i < length; i++) {
      digits += Math.floor(Math.random() * 10);
    }
    return digits;
  }
  
  function calculateVerifierDigit(digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * (digits.length + 1 - i);
    }
    let remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }
  
  function generateCPF() {
    let baseCPF = generateRandomDigits(9);
    let firstVerifierDigit = calculateVerifierDigit(baseCPF);
    let secondVerifierDigit = calculateVerifierDigit(baseCPF + firstVerifierDigit);
    return baseCPF + firstVerifierDigit + secondVerifierDigit;
  }
  
  module.exports = generateCPF;
  