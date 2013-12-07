/*! wrequire.js */

module.exports = wrequire;

function wrequire(key, path) {
  if (typeof window !== 'undefined' && typeof window[key] !== 'undefined') {
    return window[key]; // running on browser
  } else if (typeof require !== 'undefined' && typeof path !== 'undefined') {
    return require(path); // running on node.js
  }
}
