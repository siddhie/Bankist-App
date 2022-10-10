'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent =0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
    <div class="movements__row">
       <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
       <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((accu, mov) => accu + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov > 1)
    .reduce((accu, int) => accu + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc, index) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

// SLICE METHOD.. IT DOESN'T CHANGE THE ORIGINAL ARRAY
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE METHOD.. IT CHANGES THE ORIGINAL ARRAY..
// arr.splice(2);
// console.log(arr.splice(2, 0, 'Siddhi'));
// arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE - It changes original array
arr = ['a', 'b', 'c'];
arr.reverse();
console.log(arr);

// Concat Method
const letters = arr.concat([1, 2]);
console.log(letters);
// console.log([...arr, arr2]);

// JOIN

console.log(letters.join('+'));

*/

// AT Method...
const arr = [23, 11, 64];
console.log(arr.at(0));

// More traditional way of getting the last element...
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(-1));

// FOREACH METHOD..

// loop over array
for (const movement of movements) {
  if (movement > 0) console.log(`you deposited  ${movement}`);
  else console.log(`you withdrew ${Math.abs(movement)} `);
}

console.log('-------------FORECH------------------');

// forEach is a higher order function.
movements.forEach(function (movement, index) {
  if (movement > 0)
    console.log(`movement: ${index + 1} you deposited  ${movement}`);
  else
    console.log(`movement: ${index + 1}  you withdrew ${Math.abs(movement)} `);
});

// 0: function()

//forEach with maps and sets...

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value} `);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});

const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);

// console.log(movementsUSDfor);

const movementsDes = movements.map(
  (mov, index) =>
    `Movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);

console.log(movementsDes);

const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Reduce method
const balance = movements.reduce(
  (accumulator, element, i) => accumulator + element,
  0
);
console.log(balance);

// Maximum value....
const max = movements.reduce(
  (acc, value) => (acc < value ? (acc = value) : acc),
  movements[0]
);

console.log(max);

//PIPELINE
const totalDeposits = movements
  .filter(mov => mov < 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeposits);

// FIND method - it returns the first element in the array that satiesfies the condition.
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);

const acc1 = accounts.reduce(acc => acc.owner === 'Jessica Davis');

console.log(acc1);

// Event Handler

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  // Prevent form from submitting.
  event.preventDefault();
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display movements
    displayMovements(currentAccount.movements);
    // display balance
    calcDisplayBalance(currentAccount.movements);
    // display summary
    calcDisplaySummary(currentAccount);
  }
});
