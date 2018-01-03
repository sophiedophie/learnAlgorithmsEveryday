// reference: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// @Takeaway
// functional programming: focus on 'immutable' value
// no variable, no loop (but recursive!)
// use high-order-function which means pass over function as a parameter, or return function

// sophie's work
// excution time: 314ms

function zero(func) { return (func) ? func(0) : 0; }
function one(func) { return (func) ? func(1) : 1; }
function two(func) { return (func) ? func(2) : 2; }
function three(func) { return (func) ? func(3) : 3; }
function four(func) { return (func) ? func(4) : 4; }
function five(func) { return (func) ? func(5) : 5; }
function six(func) { return (func) ? func(6) : 6; }
function seven(func) { return (func) ? func(7) : 7; }
function eight(func) { return (func) ? func(8) : 8; }
function nine(func) { return (func) ? func(9) : 9; }

function plus(later) {
  return function adder(former) {
    return former + later;
  }
}

function minus(later) {
  return function reducer(former) {
    return former - later;
  }
}

function times(later) {
  return function times(former) {
    return former * later;
  }
}

function dividedBy(later) {
  return function divider(former) {
    return former / later;
  }
}

// better or more clever work?
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

// currying >> get only one parameter
const plus = (n) => (a) => a + n
const minus = (n) => (a) => a - n
const times = (n) => (a) => a * n
const dividedBy = (n) => (a) => a / n