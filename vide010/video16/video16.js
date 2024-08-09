console.log(' hello word from HTML')
// filter and find

let arr = [1,2,3,4,5,6,7,8,9];

let filter = arr.filter( (item, index) => {
  console.log('>>>> check filter array: ', item, 'index: ', index);
  return item && item < 5;
});

console.log(filter);  