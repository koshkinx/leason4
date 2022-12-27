// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name
//  в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати
//  можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження

let userWallet = {
  amountUsa: 100,
  amountEuro: 100,
  amountUa: 1000,
};
let bank = [
  {
    name: "USD",
    buy: 39,
    sell: 40,
  },
  {
    name: "EUR",
    buy: 41,
    sell: 42,
  },
  {
    name: "UAH",
    buy: 1,
    sell: 1,
  },
];
function moneyInfo(arr, firstValue, bankArray) {
  if (userWallet.amountUa == 0) {
    alert("Try next time");
    return;
  }
  let moneyInfoArr = [];
  arr.forEach((value) => {
    moneyInfoArr.push(`User can buy ${userWallet.amountUa / value.buy}`);
  });
  console.log(moneyInfoArr);
  return moneyInfoArr;
}
moneyInfo(bank);

function exchangeAll(arr) {
  let isRichUser = 0;
  let userWalletAmount = [];
  for (let value in userWallet) {
    userWalletAmount.push(userWallet[value]);
    if (userWallet[value] == 0) {
      isRichUser += 1;
    }
  }
  if (arr.length == isRichUser) {
    alert("Try next time");
    return;
  }
  let totalAmount = 0;
  const sellAmount = [];
  for (let value of arr) {
    sellAmount.push(value.sell);
  }
  sellAmount.forEach((sellValue, index) => {
    let allCost = userWalletAmount[index];
    totalAmount += sellValue * allCost;
  });
  console.log(totalAmount);
}
exchangeAll(bank);

// 2)Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення)
//  змістився користувач . Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек.
// moveUser ('north', move, 10) повина повернути ( Юзер перемістився на північ на 10 кроків)

let distace = prompt("Введіть кількість кроків");
let direction = prompt("Введіть напрямок руху", "Південь, Північ, Захід, Схід");

function move(a, b) {
  let primaryMove = `${a} кроків на ${b}`;
  return primaryMove;
}

function moveUser(a, b, callBack) {
  let finalMove = `Користувач премістився: ${callBack(a, b)}`;
  console.log(finalMove);
  return finalMove;
}
moveUser(distace, direction, move);

// 3) Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...]
// в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...], Врахувати що массив може бути
//  пустий, повернути помилку в разі пустого масиву

let keepRemove = [
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
];
if (keepRemove.length > 0) {
  for (i = 0; i < keepRemove.length; i++) {
    keepRemove.splice(i + 1, 1);
  }
} else {
  console.warn("Массив пустий");
}

console.log(keepRemove);

// 4) Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті,

let figurs = [
  {
    figure: "Squar",
    sizeA: 4,
    sizeB: 4,
  },
  {
    figure: "Rectangle",
    sizeA: 4,
    sizeB: 8,
  },
];
function SquarRectangle() {
  let a = figurs[0].sizeA * figurs[0].sizeB;
  let b = figurs[1].sizeA * figurs[1].sizeB;
  console.log(a);
  console.log(b);
}
SquarRectangle();

// 5) Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4

let mass = [2, 3, 5, 4, 8, 7, 9, 10];

function nunu(mass) {
  if (mass % 2 == 0) {
    mass *= 4;
  } else {
    mass;
  }

  return mass;
}
let massCopy = mass.map(nunu);
console.log(massCopy);
