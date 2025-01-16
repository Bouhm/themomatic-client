export function camelCaseToTitle(text: string) {
  let titleCase = text;
  titleCase = titleCase.slice(0, 1).toUpperCase() + titleCase.slice(1);
  let addedSpace = 0;

  for (let i = 1; i < text.length; i++) {
    const currChar = text.charAt(i)

    if (currChar == currChar.toUpperCase()) {
      // Insert space before capitalized letter
      titleCase = titleCase.slice(0, i+addedSpace) + ' ' + titleCase.slice(i+addedSpace)
      addedSpace++;
    }
  }

  return titleCase;
}