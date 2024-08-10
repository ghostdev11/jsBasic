console.log('hello word from HTML')
// hàm sort sẽ chuyển về kiểu string và sắp xếp theo aphab
const arr = [1,30,4,20,10000]; 
// arr.sort();
// console.log(arr);

// bản chất của 1 hàm sort có thể chuyền vào 2 biến và só sánh với nhau

let array = arr.sort((item1, item2)=>{
  return item1-item2;
})
console.log(array);
//  khi này hàm sẽ so sánh item1 với item2 và sắp xếp lại  arr[1,30,4,20,10000];
//  khi này hàm sẽ so sánh item2 với item3 và sắp xếp lại  arr[1,4,30,20,10000];.....
