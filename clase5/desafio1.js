let obj = {}

for (let index = 0; index < 10000; index++) {
  let number = Math.floor(Math.random() * 20 + 1);

  if (obj[number]) {
    obj[number]++;
  } else {
    obj[number] = 1;
  }
}

console.log(obj)


