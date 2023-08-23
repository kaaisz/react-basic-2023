function print(callback) {
  const result = callback();
  console.log(result);
}

function fn(number) {
  return number * 2;
}
// NaN should be returned since parameter has something undefined (neither number nor string)
print(fn);


function fn2(number = 3) {
  return number * 2;
}
// number should be returned
print(fn2);