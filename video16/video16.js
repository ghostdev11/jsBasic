console.log(' hello word from HTML')
// filter and find

let arr = [1,2,3,4,5,6,7,8,9];
// let family = [
//   {name: 'eric', age:9},
//   {name: 'rose', age:12},
//   {name: 'tulip', age:25},
//   {name: 'lisa', age:25},
//   {name: 'monica', age:55},
// ];

let filter = arr.filter( (item, index) => {
  console.log('>>>> check filter array: ', item, 'index: ', index);
  return item && item < 5;
});

//   hàm filter trả về tất cả kết quả cần tìm laf 1 array
//   hàm find trả về kết quả tìm thấy đầu tiên laf 1 gtri

// let filter = family.filter((item, index) => {
//   return item && item.age ===25;
// });
console.log(filter); 

let find = arr.find((item , index) =>{
  console.log('>>>> check find array: ', item, 'index: ', index);
  return item && item <5;
})
console.log(find);