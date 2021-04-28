function computerPlay() {
  let num = Math.random();
  if (num < 0.33) {
    return 'Rock';
  } else if (0.33 <= num && num < 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

console.log(computerPlay());
