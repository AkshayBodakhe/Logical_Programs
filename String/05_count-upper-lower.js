const countUpperLower = (str) => {
  let lower = 0;
  let upper = 0;

  for (let ch of str) {
    // less good approach
    // if (/[A-Z]/.test(ch)) {
    //   upper++;
    // } else if(/[a-z]/.test(ch)) {
    //   lower++;
    // }

    // if (ch >= "A" && ch <= "Z") {
    //   upper++;
    // } else if (ch >= "a" && ch <= "z") {
    //   lower++;
    // }

    if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
      upper++;
    } else if (ch !== ch.toUpperCase() && ch === ch.toLowerCase()) {
      lower++;
    }

  }
  return { lower, upper };
};

const result = countUpperLower("Hello World");
console.log(result);
