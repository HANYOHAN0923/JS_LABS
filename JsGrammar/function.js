// 2.7 ~ 2.8
function greet(name) {
  console.log("Hello, " + name);
}

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

greet("Yuri");
a = calculator.add(1, 1);
b = calculator.multiply(20, 100);

console.log(a);
console.log(b);
