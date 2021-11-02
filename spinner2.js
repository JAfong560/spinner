const spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 100;
let numOfSpins = 3;
for (let i = 0; i < numOfSpins; i++) {
  for (const iterator of spinArray) {
    setTimeout(() => {
      process.stdout.write(iterator);
    }, delay);
    delay += 200;
  }
}

setTimeout(() => {
  console.log('\n');
}, delay);