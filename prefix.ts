function findPrefix(textList: string[]): string {
  if (textList.length === 0) {
    return "";
  }

  let prefix: string = textList[0];

  for (let i = 1; i < textList.length; i++) {
    while (!textList[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

console.log(findPrefix(["flower", "flow", "flight"]));
console.log(findPrefix(["dog", "racecar", "car"]));
