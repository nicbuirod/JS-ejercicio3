function flatten(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    for (let i2 = 0; i2 < val.length; i2++) {
      let val2 = val[i2];

      resultado.push(val2);
    }
  }
  return resultado;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
console.log(flatten([[1], [2], [3], [4]]));
console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
);
console.log(
  flatten([
    [true, false],
    [false, false],
  ])
);
