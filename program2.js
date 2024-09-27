const decodeTheRing = function (s, p) {
  if (s === '' && p === '') return true;
  if (p === '') return false;

  const firstMatch = s !== '' && (p[0] === '?' || p[0] === s[0]);

  if (p[0] === '*') {
    return decodeTheRing(s, p.slice(1)) || (s !== '' && decodeTheRing(s.slice(1), p));
  } else {
    return firstMatch && decodeTheRing(s.slice(1), p.slice(1));
  }
};

module.exports = decodeTheRing;