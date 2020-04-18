// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN(pin) {
  if (pin && (pin.length == 4 || pin.length == 6)) {
    const match = pin.match(/[0-9]/g)
    if (match) return pin == match.join('')
  } else return false
}

console.log(validatePIN('8572'), true, "Wrong output for '1234567'")
console.log(validatePIN('1234567'), false, "Wrong output for '1234567'")
console.log(validatePIN('-1234'), false, "Wrong output for '-1234'")
console.log(validatePIN('1.234'), false, "Wrong output for '1.234'")
console.log(validatePIN('-1.234'), false, "Wrong output for '-1.234'")
console.log(validatePIN('09876'), false, "Wrong output for '00000000'")
