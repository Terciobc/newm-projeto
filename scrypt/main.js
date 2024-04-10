const { shuffle } = require("lodash");

const emojis = [
  "😂",
  "😂",
  "😱",
  "😱",
  "😈",
  "😈",
  "🤡",
  "🤡",
  "😏",
  "😏",
  "🙄",
  "🙄",
  "😭",
  "😭",
  "🙏",
  "🙏",
];

const shuffledEmojis = shuffle(emojis);

console.log(shuffledEmojis);
