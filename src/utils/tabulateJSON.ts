export const tabulateJSON = (jsonValue: string): string => {
  let result = '';
  let indentLevel = 0;
  const indentSize = 2;
  let inString = false;

  for (let i = 0; i < jsonValue.length; i++) {
    const char = jsonValue[i];

    if (char === '"' && jsonValue[i - 1] !== '\\') {
      inString = !inString;
    }

    if (!inString) {
      if (char === '{' || char === '[') {
        result += char + '\n' + ' '.repeat((indentLevel + 1) * indentSize);
        indentLevel++;
      } else if (char === '}' || char === ']') {
        indentLevel--;
        result += '\n' + ' '.repeat(indentLevel * indentSize) + char;
      } else if (char === ',') {
        result += char + '\n' + ' '.repeat(indentLevel * indentSize);
      } else if (char === ':') {
        result += char + ' ';
      } else {
        result += char;
      }
    } else {
      result += char;
    }
  }

  return result;
};
