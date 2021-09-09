/*

==================================================================
LINK

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

==================================================================
DESCRIPTION

Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

==================================================================
TESTCASE

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

==================================================================
SETUP

function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

==================================================================

*/

// =================

const cashTypeValue = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

const cashTypeValueDescend = Object.entries(cashTypeValue).sort(
  ([, val1], [, val2]) => val2 - val1
);
const insufficientStatus = { status: "INSUFFICIENT_FUNDS", change: [] };
const closedStatus = { status: "CLOSED", change: [] };
// =====================================
const totalInDrawer = (cid) =>
  cid
    .reduce((total, [, amount]) => {
      return total + amount;
    }, 0)
    .toFixed(2);
// =====================================
function checkCashRegister(price, cash, cid) {
  const drawerTotal = totalInDrawer(cid);
  let cashReturnStatus = { status: "unknown", change: [] };
  let chargeBack = cash - price;

  if (chargeBack > drawerTotal) {
    cashReturnStatus.status = "INSUFFICIENT_FUNDS";
  } else if (chargeBack == drawerTotal) {
    cashReturnStatus.status = "CLOSED";
    cashReturnStatus.change = cid;
  } else {
    let [startCashType] = cashTypeValueDescend.find(([, val]) => {
      return chargeBack >= val;
    });
    const startCidIndex = cid.findIndex(
      ([cashCidType]) => cashCidType === startCashType
    );

    for (let index = startCidIndex; chargeBack != 0 && index >= 0; index--) {
      let [cashType, typeTotal] = cid[index];
      let typeRef = cashTypeValue[cashType];
      if (chargeBack >= typeTotal && typeTotal != 0) {
        chargeBack -= typeTotal;
        cashReturnStatus.change.push([cashType, typeTotal]);
      } else if (chargeBack < typeTotal && typeTotal != 0) {
        let cashReturn = typeRef * Math.floor(chargeBack / typeRef);
        chargeBack = (chargeBack - cashReturn).toFixed(2);
        cashReturn && cashReturnStatus.change.push([cashType, cashReturn]);
      }
    }
    if (chargeBack == 0) {
      cashReturnStatus.status = "OPEN";
    } else if (chargeBack > 0) {
      cashReturnStatus.status = "INSUFFICIENT_FUNDS";
      cashReturnStatus.change = [];
    }
  }

  return cashReturnStatus;
}
// =====================================

// =====================================
const checkCashRegisterTest = [
  // start
  // cash - price: 0.5
  // drawerTotal: 335.41
  [
    [
      19.5,
      20,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ],
    ],
    { status: "OPEN", change: [["QUARTER", 0.5]] },
  ],
  // cash - price: 96.74
  // drawerTotal: 335.41
  [
    [
      3.26,
      100,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ],
    ],
    {
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    },
  ],
  // cash - price: 235.41
  // drawerTotal: 335.41
  [
    [
      19.6,
      255.01,
      [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ],
    ],
    {
      status: "OPEN",
      change: [
        ["ONE HUNDRED", 100],
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 55],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
      ],
    },
  ],
  // cash - price: 0.5
  // drawerTotal: 0.01
  [
    [
      19.5,
      20,
      [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    ],
    { status: "INSUFFICIENT_FUNDS", change: [] },
  ],
  // cash - price: 0.5
  // drawerTotal: 0.50
  [
    [
      19.5,
      20,
      [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    ],
    {
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    },
  ],
  // cash - price: 0.5
  // drawerTotal: 1.01
  [
    [
      19.5,
      20,
      [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    ],
    { status: "INSUFFICIENT_FUNDS", change: [] },
  ],
  // ❌❌❌MYCASE❌❌❌❌❌❌
  [
    [
      19.7,
      20.0,
      [
        ["PENNY", 0.02],
        ["NICKEL", 0.0],
        ["DIME", 0.3],
        ["QUARTER", 0.75],
        ["ONE", 0.0],
        ["FIVE", 0.0],
        ["TEN", 0.0],
        ["TWENTY", 0.0],
        ["ONE HUNDRED", 0.0],
      ],
    ],
    { status: "OPEN", change: [["DIME", 0.3]] },
  ],
  [
    [
      8.7,
      20.0,
      [
        ["PENNY", 0.02],
        ["NICKEL", 0.0],
        ["DIME", 0.3],
        ["QUARTER", 1],
        ["ONE", 2],
        ["FIVE", 20],
        ["TEN", 30],
        ["TWENTY", 0.0],
        ["ONE HUNDRED", 0.0],
      ],
    ],
    {
      status: "OPEN",
      change: [
        ["TEN", 10],
        ["ONE", 1],
        ["DIME", 0.3],
      ],
    },
  ],
  // end
];

import * as varTest from "../pj0_checker.js";
const test = varTest.testSuiteChecker;
const testArgs = [[]];
const showReturn = true;
const oneToOne = false;
const doubleCheck = false;
const callDoubleCheck = () => {};
// Wrapper callback, destruct arguments
const testInput = checkCashRegisterTest; // change this
let callback = checkCashRegister; // change this
// myReplace(str, before, after)
const wrapCallback = (testInput) => {
  const price = testInput[0][0];
  const cash = testInput[0][1];
  const cid = testInput[0][2];
  return callback(price, cash, cid);
};
// run command
test(
  testInput,
  testArgs,
  showReturn,
  doubleCheck,
  oneToOne,
  wrapCallback,
  callDoubleCheck
);

// =============================

function checkCashRegister2(price, cash, cid) {
  //all money values are multiplied by 100 to deal with precision errors involved with decimals
  const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  function transaction(price, cash, cid) {
    let changeNeeded = (cash - price) * 100;
    //money will be pushed to the second value in each array
    let moneyProvided = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0],
    ];
    //take the cid, reverse it (like in Roman Numerals exercise), multiply values by 100
    let availCash = [...cid].reverse().map((el) => [el[0], el[1] * 100]);
    //get the total sum of all cash and divide by 100
    let sumOfCash = availCash.reduce((a, b) => a + b[1], 0) / 100;
    //if sumOfCash is exact change needed return
    if (sumOfCash === changeNeeded / 100) {
      return { status: "CLOSED", change: [...cid] };
    }
    //else, run this function
    else
      for (let i = 0; i < availCash.length; i++) {
        //if denomination values are less than changeNeeded and availableCash values are greater than 0, run the while loop
        while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
          //1. moneyProvided array is increased by denomination value
          moneyProvided[i][1] += denomination[i];
          //2. changeNeeded is decreased by same denomination value
          changeNeeded -= denomination[i];
          //3. availCash is also decreased by same denomination value
          availCash[i][1] -= denomination[i];
        }
      }

    //clean up the moneyProvided array by
    let change = moneyProvided
      //1. resetting the money values by dividing by 100
      .map((el) => [el[0], el[1] / 100])
      //2. filtering out all non-empty dollar and value arrays
      .filter((el) => el[1] !== 0);
    //calculate the total of the change array
    let changeTotal = change.reduce((a, b) => a + b[1], 0);
    //if the total change is less than the change needed
    if (changeTotal < changeNeeded) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change };
  }

  //this is where the transaction function is called
  let answer = transaction(price, cash, cid);
  //here the final answer is provided if the 2 if statements don't catch it first
  return answer;
}

function tempCode(params) {
  const denom = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  let change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current Change Array
  }, []); // Initial value of empty array for reduce
}
