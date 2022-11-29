// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {

  const currencyAmount = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };

  let change = cash - price;

  let total = 0;
  cid.forEach(curr => total += curr[1]);

  if (total === change) {
    return {status: "CLOSED", change: cid};
  }
  
  let changeArr = [];

  for (let i = cid.length - 1; i >= 0; i--){
    let curr = currencyAmount[cid[i][0]];
    if(curr <= change) {
      if (cid[i][1] < change) {
        changeArr.push([cid[i][0], cid[i][1]]);
        change = (change - cid[i][1]).toFixed(2);
      } else {
        changeArr.push([cid[i][0], curr * Math.floor((change / curr).toFixed(2))]);
        change = (change - curr * Math.floor((change / curr).toFixed(2))).toFixed(2);
      }
    }
  }
  if(change == 0) {
    return {status: "OPEN", change: changeArr}
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);