let myFunction = (a, b) => {
  let objeto2 = new Object();
  for (let i = 0; i < a.length; i++) {
    let llave = a[i];
    objeto2[llave] = b[i];
  }

  return objeto2;
};

console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["a", "b", "c"], [1, () => {}, { name: "khriztian" }]));
console.log(
  myFunction(
    ["name", "hobbies", "isAdmin"],
    ["khriztian", ["music", "tv series"], false]
  )
);
