/*! wrequire.js */

module.exports = wrequire;

function wrequire(key, path) {
  if (typeof window !== 'undefined' && window[key]) {
    return window[key]; // running on browser
  } else if (typeof require !== 'undefined') {
    return require(path); // running on node.js
  }
}
