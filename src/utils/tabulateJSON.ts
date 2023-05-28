export const tabulateJSON = (value: string): string => {
  let res = '';
  let level = 0;
  const sizeIndent = 2;
  let inStr = false;

  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    if (char === '"' && value[i - 1] !== '\\') {
      inStr = !inStr;
    }

    if (!inStr) {
      if (char === '{' || char === '[') {
        res += char + '\n' + ' '.repeat((level + 1) * sizeIndent);
        level++;
      } else if (char === '}' || char === ']') {
        level--;
        res += '\n' + ' '.repeat(level * sizeIndent) + char;
      } else if (char === ',') {
        res += char + '\n' + ' '.repeat(level * sizeIndent);
      } else if (char === ':') {
        res += char + ' ';
      } else {
        res += char;
      }
    } else {
      res += char;
    }
  }

  return res;
};
