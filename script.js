const howManyLetters = (phrase) => {

  // counter
  let result = 0;


// IN gives you the index
  for (const index in phrase) {
    // console.log(Number(index) +1)
    result = Number(index) + 1
  }
  return { result }
}

// const phrase = prompt('Write your phrase')
// console.log(howManyLetters(phrase))

// [1, 2, 3, 4] // 10

const sumArray = (numbers) => {
  let result = 0 ;
  // for loop
  for (const number of numbers) {
    console.log(number)
    result = result + number
  }
  return { result}
}

const nums = [1, 2, 3, 4, 5]
console.log(sumArray(nums))
// SUm up all the numbers in the array