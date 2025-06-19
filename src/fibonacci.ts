function fibonacci(
  max: number,
  prevA: number = 0,
  prevB: number = 1,
  iteration: number = 2
): number {
  // We need to add the previous two numbers together to get the current value
  // When we have the current value we pass it on with the most recent previous num
  if (iteration === max) {
    return prevB;
  }
  return fibonacci(max, prevB, prevA + prevB, iteration + 1);
  //   return 0;
}

console.log(fibonacci(20));
