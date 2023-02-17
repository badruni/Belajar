function countCharacters(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}
const result = countCharacters("hello world");
console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
