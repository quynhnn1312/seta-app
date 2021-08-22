export default function calculateArrayString(arr) {
  const error = "The input value must be an array of String!";
  try {
    arr = arr.replace(/'/g, '"');
    arr = JSON.parse(arr);

    if (checkIsNotString(arr)) return error;
  } catch (err) {
    return error;
  }

  const result = [];
  const countOccurrencesObj = arr.reduce(
    (prev, curr) => ((prev[curr.length] = ++prev[curr.length] || 1), prev),
    {}
  );

  const maxValOccurrencesObj = Math.max(...Object.values(countOccurrencesObj));

  Object.getOwnPropertyNames(countOccurrencesObj).forEach((key) => {
    if (countOccurrencesObj[key] === maxValOccurrencesObj)
      result.push(arr.filter((x) => x.length === +key));
  });

  return result;
}

function checkIsNotString(arr) {
  let notString = false;
  arr.find((item) => {
    if (!(typeof item === "string")) {
      notString = true;
      return true;
    }
  });

  return notString;
}
