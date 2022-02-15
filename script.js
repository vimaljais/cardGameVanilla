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
let current = [];
let working = false;

const iconsToDisplay = getRandom(icons, 10);
const iconList = iconsToDisplay.concat(iconsToDisplay);
shuffleArray(iconList);

let correctlyFlipped = [];

const displayCards = (iconList) => {
  iconList.map((icon) => {
    cardList = document.getElementById("cardList");
    const card = document.createElement("div");
    cardList.classList = "cardlist";
    card.classList = "card " + icon;
    cardList.appendChild(card);
    card.setAttribute("onclick", "flip(event)");

    const front = document.createElement("div");
    front.innerHTML = "🐶";

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
  let classes = Array.from(element.classList);
  if (working === false) {
    if (current.length === 0) {
      current.push(element);
    } else if (current.length > 0) {
      const previousClass = Array.from(current[0].classList);
      current.push(element);
      if (previousClass[1] === classes[1]) {
        current.concat(classes[1]);

        current[0].removeAttribute("onclick");
        current[1].removeAttribute("onclick");

        correctlyFlipped = correctlyFlipped.concat(current);
        console.log(correctlyFlipped);
        if (correctlyFlipped.length === 20) {
          victory();
        }

        current = [];
      } else {
        working = true;
        const myTimeout = setTimeout(() => flipBack(current), 1500);
      }
    }

    if (classes.includes("card")) {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      } else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  }
}

const victory = () => {
  const v = document.createElement("div");
  const vt = document.createElement("h1");

  document.getElementById("hehe").appendChild(v);
  v.appendChild(vt);
  console.log(v);
  v.classList = "victory";
  vt.innerHTML = "You Have Won!";

  setTimeout(() => {
    location.reload();
  }, 3000);
};

const flipBack = (listToFlip) => {
  justFlip(listToFlip[0]);
  justFlip(listToFlip[1]);

  current = [];
  working = false;
};

const justFlip = (element) => {
  if (element.style.transform == "rotateY(180deg)") {
    element.style.transform = "rotateY(0deg)";
  } else {
    element.style.transform = "rotateY(180deg)";
  }
};

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
const reset = () => {
  location.reload();
};
