const parseIconURL = (str) => {
  const match = str.match(/\/(\d+)\.png$/);

  if (match) {
    const number = match[1]; // The first capturing group (\d+) matches one or more digits
    return number;
  }
  throw Error('No matched icon found');
};

export default parseIconURL;
