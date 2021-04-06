const sentence = "This is a test done by Austin";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  }, delay) //
  delay += 50;
}
setTimeout(() => {
process.stdout.write("\n");
}, delay)
