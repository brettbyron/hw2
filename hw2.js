// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.


let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

let getBalance = function(username) {
  let runningTotal = 0;
  for (let i=0; i<blockchain.length; i++) {
    let transaction = blockchain[i];
    if (transaction.fromUser === username) {
      runningTotal = runningTotal - transaction.amount
    }
    if (transaction.toUser === username) {
      runningTotal = runningTotal + transaction.amount
    }
  }
  return runningTotal;
}


console.log("Brian's KelloggCoin balance is " + getBalance("brian"));
console.log("Ben's KelloggCoin balance is " + getBalance("ben"));
console.log("Jeff's KelloggCoin balance is " + getBalance("jeff"));







// let brianBalance = blockchain[0].amount - blockchain[1].amount - blockchain[2].amount - blockchain[4].amount + blockchain[5].amount
// let benBalance = blockchain[1].amount - blockchain[3].amount + blockchain[6].amount
// let jeffBalance = blockchain[2].amount + blockchain[3].amount + blockchain[4].amount - blockchain[5].amount - blockchain[6].amount
//
// let getBalance = function(){
//   return brianBalance
//   return benBalance
//   return jeffBalance
// }
//
// console.log(getBalance())



// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".
//
// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650
