# Seta entrance test

## Website Demo: https://seta-app.netlify.app/

## Install dependencies for app

### `yarn install`

## Run app localhost

### `yarn run dev`

## Build app to minify

### `yarn build`

============================================================================

### Javascript algorithm

1. Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to find the strings’ length that appear most in this array. Writing the unit test function and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’]
2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of integers on top 2. Writing the unit test function and provide some test-cases. The result for the example array is 9

### React

Provide the API for posts: https://jsonplaceholder.typicode.com/posts
Writing a react-redux app that:

- Get and display posts from API
- Have a PostForm component to add new post

## Solutions

#### 1. Write a function to find the strings’ length that appear most in this array
```
  function calculateArrayString(arr) {
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
```
#### 2. Write a function to find sum of integers on top 2
```
  function findSumIntegerOnTop2(arr) {
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
```
#### 3. React
##### dependencies: react-redux, redux-toolkit, react-js-pagination, reactstrap, react-hook-form, axios