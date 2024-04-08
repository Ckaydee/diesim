// COIN FLIP SIMULATOR

// HTML Variables
let btn = document.getElementById("btn");
let dbtn = document.getElementById("dbtn");
let outputEl = document.getElementById("output");
let hSpanEl = document.getElementById("heads-out");
let tSpanEl = document.getElementById("tails-out");
let dOutputEl = document.getElementById("dOut");
let dOutputEl2 = document.getElementById("dOut2");
let oneCounter = document.getElementById("1-out");
let twoCounter = document.getElementById("2-out");
let threeCounter = document.getElementById("3-out");
let fourCounter = document.getElementById("4-out");
let fiveCounter = document.getElementById("5-out");
let sixCounter = document.getElementById("6-out");
let sumOut = document.getElementById("sum");

// Count Variables
let numHeads = 0;
let numTails = 0;
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

// Button Event Listener
btn.addEventListener("click", btnClicked);
dbtn.addEventListener("click", dbtnClicked);

function dbtnClicked() {
  let randNum = Math.random().toFixed(2) * 100;
  let randNum2 = Math.random().toFixed(2) * 100;
  console.log(randNum);
  console.log(randNum2);
  if (randNum <= 16.6) {
    dOutputEl.innerHTML = `<img src="img/1.png">`;
    ones++;
    oneCounter.innerHTML = ones;
    var add1 = 1;
  } else if (randNum <= 33.3) {
    dOutputEl.innerHTML = `<img src="img/2.png">`;
    twos++;
    twoCounter.innerHTML = twos;
    var add1 = 2;
  } else if (randNum <= 50) {
    dOutputEl.innerHTML = `<img src="img/3.png">`;
    threes++;
    threeCounter.innerHTML = threes;
    var add1 = 3;
  } else if (randNum <= 66.7) {
    dOutputEl.innerHTML = `<img src="img/4.png">`;
    fours++;
    fourCounter.innerHTML = fours;
    var add1 = 4;
  } else if (randNum <= 83.3) {
    dOutputEl.innerHTML = `<img src="img/5.png">`;
    fives++;
    fiveCounter.innerHTML = fives;
    var add1 = 5;
  } else if (randNum <= 100) {
    dOutputEl.innerHTML = `<img src="img/6.png">`;
    sixes++;
    sixCounter.innerHTML = sixes;
    var add1 = 6;
  }
  if (randNum2 <= 16.6) {
    dOutputEl2.innerHTML = `<img src="img/1.png">`;
    ones++;
    oneCounter.innerHTML = ones;
    var add2 = 1;
  } else if (randNum2 <= 33.3) {
    dOutputEl2.innerHTML = `<img src="img/2.png">`;
    twos++;
    twoCounter.innerHTML = twos;
    var add2 = 2;
  } else if (randNum2 <= 50) {
    dOutputEl2.innerHTML = `<img src="img/3.png">`;
    threes++;
    threeCounter.innerHTML = threes;
    var add2 = 3;
  } else if (randNum2 <= 66.7) {
    dOutputEl2.innerHTML = `<img src="img/4.png">`;
    fours++;
    fourCounter.innerHTML = fours;
    var add2 = 4;
  } else if (randNum2 <= 83.3) {
    dOutputEl2.innerHTML = `<img src="img/5.png">`;
    fives++;
    fiveCounter.innerHTML = fives;
    var add2 = 5;
  } else if (randNum2 <= 100) {
    dOutputEl2.innerHTML = `<img src="img/6.png">`;
    sixes++;
    sixCounter.innerHTML = sixes;
    var add2 = 6;
  }
  sumOut.innerHTML = add1 + add2;
}

function btnClicked() {
  let randNum = Math.random().toFixed(2);
  console.log(randNum);

  // Simunlate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = `<img src = 'img/heads.png'>`;
    numHeads += 1;
    hSpanEl.innerHTML = `${numHeads}`;
  } else {
    outputEl.innerHTML = `<img src = 'img/tails.png'>`;
    numTails += 1;
    console.log(numTails);
    tSpanEl.innerHTML = `${numTails}`;
  }
}
