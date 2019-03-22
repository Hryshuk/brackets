module.exports = function check(str, bracketsConfig) {
  // your solution

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const s = str.substr(i, 1);

    const config = bracketsConfig.find((currentValue) => {
      if (currentValue[0] == s || currentValue[1] == s) {
        return true;
      }
    });

    const lastElement = stack[stack.length - 1];

    if (config && (config[0] == config[1] && lastElement != s) || (config[0] != config[1] && config[0] == s))  {
      stack.push(s);
    } else {
      if (stack.length) {
        const lastEl = stack.pop();
        if (!(config[0] == lastEl && config[1] == s)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  if (!stack.length) {
    return true;
  }
  
  return false;
}
