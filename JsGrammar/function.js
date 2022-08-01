// 2.7 ~ 2.8
function greet(name) {
  console.log("Hello, " + name);
}

const calculator = {
  add: function (x, y) {
    console.log(x + y);
  },
  multiply: function (x, y) {
    console.log(x * y);
  },
};

greet("Yuri");
calculator.add(1, 1);
calculator.multiply(20, 100);
