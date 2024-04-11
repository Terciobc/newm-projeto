const emojis = [
  { src: "../assets/img/breno.png" },
  { src: "../assets/img/breno.png" },
  { src: "../assets/img/chris.png" },
  { src: "../assets/img/chris.png" },
  { src: "../assets/img/gabriel.png" },
  { src: "../assets/img/gabriel.png" },
  { src: "../assets/img/ironMaiden.png" },
  { src: "../assets/img/ironMaiden.png" },
  { src: "../assets/img/john.png" },
  { src: "../assets/img/john.png" },
  { src: "../assets/img/livia.png" },
  { src: "../assets/img/livia.png" },
  { src: "../assets/img/nathan.png" },
  { src: "../assets/img/nathan.png" },
  { src: "../assets/img/tercio.png" },
  { src: "../assets/img/tercio.png" },
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
  let foto = document.createElement("img");

  foto.className = "foto";
  card.appendChild(foto);
  foto.src = emoji.src;

  card.className = "item";
  card.src = emoji.src;

  // Ao clicar chama a função handleClick();
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
