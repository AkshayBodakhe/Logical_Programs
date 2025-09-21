// fibonacci is a series of numbers where each number is the sum of the two preceding ones.

const fibonacci = (length) => {
  if (length <= 0) return false;
  let x = 0;
  let y = 1;
  let z;
  console.log(x);
  console.log(y);
  for (let i = 1; i < length - 1; i++) {
    z = x + y;
    console.log(z);
    x = y;
    y = z;
  }
};

const result = fibonacci(10);
