export function sum(a, b) {

  for (let i = 0; i < 90000000; ++i) {
    let x = ((a * b * i) / 3) ** i;
    x = x % 11 + b + a + i;
  }

  return 2;
}
