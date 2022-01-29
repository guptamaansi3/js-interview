// level {1/2/3}
//chosen level 2

function fibonacci_sum(n) {
  let fibonacci_series = [];
  if (n <= 0) return 0;

  fibonacci_series[0] = 0;
  fibonacci_series[1] = 1;

  let sum = fibonacci_series[0] + fibonacci_series[1];
  for (let i = 2; i <= n; i++) {
    fibonacci_series[i] = fibonacci_series[i - 1] + fibonacci_series[i - 2];
    sum += fibonacci_series[i];
  }
  return sum;
}

console.log("The sum is", fibonacci_sum(6));
