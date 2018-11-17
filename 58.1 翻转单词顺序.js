//方法一：
function reverseSentence(str) {
    return str.split(" ").reverse().join(" ");
}


//方法二
function reverseSentence(str) {
  let [res, word] = ["", ""];
  for (let i = 0, len = str.length; i < len; i++) {
    let c = str[i];
    if (c !== " ") {
      word += c;
    } else {
      res = " " + word + res;
      word = "";
    }
  }
  return word + res;
}