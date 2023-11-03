function throwCoin() {
  return Math.floor(Math.random() * 2) === 1 ? 'cara' : 'cruz'
}

function getUserInfo() {
  const name = prompt("Ingrese su nombre:")
  const balance = parseInt(prompt("Ingrese el valor apostado:"))
  const bet_amount = balance
  const bet = prompt("Apostar a cara o cruz:")
  return [name, balance, bet, bet_amount]
}

function getAmount(current_bet, current_bet_amount, balance, result) {
  return balance + (result === current_bet ? current_bet_amount * 2 : -1 * current_bet_amount)
}

function play() {
  const userInfo = getUserInfo();
  let name = userInfo[0]
  let current_balance = userInfo[1]
  let current_bet = userInfo[2]
  let current_bet_amount = userInfo[3]

  const result = throwCoin();

  current_balance = getAmount(current_bet, current_bet_amount, current_balance, result);

  console.log(current_balance)
}

play()