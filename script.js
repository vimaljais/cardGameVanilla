let icons = [
  "💐",
  "🌹",
  "🌻",
  "🏵️",
  "🌺",
  "🌴",
  "🌈",
  "🍓",
  "🍒",
  "🍎",
  "🍉",
  "🍊",
  "🥭",
  "🍍",
  "🍋",
  "🍏",
  "🍐",
  "🥝",
  "🍇",
  "🥥",
  "🍅",
  "🌶️",
  "🍄",
  "🧅",
  "🥦",
  "🥑",
  "🍔",
  "🍕",
  "🧁",
  "🎂",
  "🍬",
  "🍩",
  "🍫",
  "🎈",
];

const iconsToDisplay = getRandom(icons, 10);
const iconList = iconsToDisplay.concat(iconsToDisplay);
shuffleArray(iconList);

const displayCards = (iconList) => {
  iconList.map((icon) => {
    cardList = document.getElementById("cardList");
    const card = document.createElement("div");
    cardList.classList = "cardlist";
    card.classList = "card";
    cardList.appendChild(card);
    card.setAttribute("onclick", "flip(event)");
    card.id = icon;

    const front = document.createElement("div");
    front.innerHTML = "32";

    const back = document.createElement("div");
    back.innerHTML = icon;

    front.classList = "front";
    back.classList = "back";

    card.appendChild(front);
    card.appendChild(back);
  });
};

displayCards(iconList);

function flip(event) {
  var element = event.currentTarget;
  console.log(element.id);
  if (element.className === "card") {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
