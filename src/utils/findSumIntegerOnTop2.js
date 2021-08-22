export default function findSumIntegerOnTop2(arr) {
  try {
    arr = arr.replace(/'/g, '"');
    arr = JSON.parse(arr);
  } catch (err) {
    return "The input value must be an array of Integer!";
  }

  const [first, last] = arr
    .filter((item) => Number.isInteger(+item))
    .sort((a, b) => b - a);

  return first + last;
}
