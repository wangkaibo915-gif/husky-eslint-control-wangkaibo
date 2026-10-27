export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

console.log('add(2, 3) =', add(2, 3));
console.log('sub(5, 2) =', sub(5, 2));
console.log('mul(4, 3) =', mul(4, 3));
console.log('div(8, 2) =', div(8, 2));
console.log('div(8, 0) =', div(8, 0));
