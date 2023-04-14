function fibonacci(num) {
if (num == 1) return 0;
  if (num == 2) return 1;
  let a = 0,
    b = 1,
    fib = a + b;
  for (let n = 3; n < num; n++) {
    a = b;
    b = fib;
    fib = a + b;
  }
  return fib;
}

module.exports = fibonacci;
