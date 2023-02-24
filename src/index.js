const openBrackets = ["(", "[", "{", "|", "1", "3", "5", "7", "8"];
module.exports = function check(str, bracketsConfig) {
  const entries = new Map(bracketsConfig);
  let obj = Object.fromEntries(entries);
  const stack = [];
  console.log(str);
  const clones = [];
  console.log(bracketsConfig);
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      clones.push(bracketsConfig[i][0]);
    }
  }
  console.log(clones);
  console.log(obj);
  const result = {};

  Object.entries(obj).forEach(([key, value]) => {
    result[value] = key;
  });
  console.log(result);
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      if (
        clones.includes(currentSymbol) &&
        stack[stack.length - 1] == currentSymbol
      ) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let upperElement = stack[stack.length - 1];
      if (result[currentSymbol] === upperElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
