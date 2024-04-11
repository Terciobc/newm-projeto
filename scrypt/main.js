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
let openCards = [];

// Função de embaralhamento usando o algoritmo de Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffleEmojis = shuffle(emojis);

shuffleEmojis.forEach((emoji) => {
  let card = document.createElement("div");
  card.className = "item";
  card.innerHTML = emoji;
  card.onclick = handleClick;
  document.querySelector(".game-box").appendChild(card);
});

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkCards, 500);
  }
}

function checkCards() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxOpen");
    openCards[1].classList.add("boxOpen");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }
  openCards = [];

  if (document.querySelectorAll(".boxOpen").length === emojis.length) {
    alert("Parabéns, você venceu!");
  }
}
