function fn(number) {
  return number * 2;
}

console.log('fn(2)', fn(2));

const fnArrow = (number) => {
  return number * 2;
}

console.log('fnArrow(2)', fnArrow(2));
console.log('fnArrow(4)', fnArrow(4));

// If desired to return with object, notation would be a little different

const fnArrowObj = number => ({ result: number * 2 });

console.log('fnArrowObj(2)', fnArrowObj(2));