/*! wrequire.js */

var _window;

try {
  _window = window; // running on browser
} catch (err) {
  // running on node.js
}

_window = _window || {};

module.exports = function(key, path) {
  return _window[key] || path && require(path);
};
