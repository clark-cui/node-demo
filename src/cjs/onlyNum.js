// find the only number
const arr = [1, 3, 17, 3, 1];
const map = new Map();;
for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.delete(arr[i]);
    continue;
  }
  map.set(arr[i], i);


}
for (let value of map.entries()) {
  console.log(value);
}