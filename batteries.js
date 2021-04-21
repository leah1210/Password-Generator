// --------------------------------- Numbers --------------------------------- //

const isEven = n => {
  return (n % 2 === 0)
}

const isOdd = n => {
  return (!isEven(n))
}

const divisibleBy = (x, y) => {
  return (x % y === 0)
}

// --------------------------------- Arrays --------------------------------- //

// takes a value and an array, and returns a new array with the value added to the end.
const append = (value, array) => {
  return [...array, value]
}

const eqArrays = (array1, array2) => {
  return array1.length === array2.length && array1.every((_, index) => {
    if (Array.isArray(array1[index]) && Array.isArray(array2[index])) {
      return eqArrays(array1[index], array2[index])
    } else {
      return array1[index] === array2[index]
    }
  })
}

const head = (array) => {
  return array[0]
}

const last = (array) => {
  return array[array.length - 1]
}

//returns everything but the first element
const tail = array => {
  return array.slice(1)
}

// drops the last element
const init = array => {
  return array.slice(0, -1)
}

const isEmpty = (array) => {
  return (array.length === 0)
}

const take = (n, array) => {
  return array.slice(0, n)
}

const drop = (n, array) => {
  return array.slice(n)
}

// takes a 2-D array and  flattens it
const flatten = array => array.reduce((acc, x) => [...acc, ...x], [])

const intersperse = (value, array) => [head(array), ...tail(array).reduce((acc, x) => [...acc, value, x], [])];

// --------------------------------- Number Arrays --------------------------------- //

const sum = array => {
  return array.reduce((acc, x) => acc + x, 0);
}

const product = array => array.reduce((acc, x) => acc * x, 1)

const maximum = array => array.reduce((acc, x) => Math.max(acc, x)) // can also use , array[0] as the starting value

const minimum = array => array.reduce((acc, x) => Math.min(acc, x))

const range = (x, y) => {
  const arr = [...Array(y - x + 1)]
  return arr.map((n, i) => i + x) // i becomes the index of each element, n becomes a placeholder
}

// --------------------------------- Objects --------------------------------- //

const eqObjects = (object1, object2) => JSON.stringify(object1) === JSON.stringify(object2) // converts object to a string

const removeProp = (property, object) => {
  return ({ ...object, [property]: undefined }) // when adding a key in a variable it needs to be in []
}

const setProp = (property, v, object) => {
  return ({ ...object, [property]: v }) // when adding a key in a variable it needs to be in []
}

module.exports = {
  isEven,
  isOdd,
  divisibleBy,
  append,
  eqArrays,
  head,
  last,
  tail,
  init,
  isEmpty,
  take,
  drop,
  flatten,
  intersperse,
  sum,
  product,
  maximum,
  minimum,
  eqObjects,
  removeProp,
  setProp,
};