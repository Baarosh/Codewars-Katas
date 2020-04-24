// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url) {
  const anchor = url.indexOf('#')
  return anchor !== -1 ? url.slice(0, anchor) : url
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
