console.log('hello word from HTML')
// tác dụng của hàm map : không thay đổi biến arr ban đầu va trả về 1 mảng hoàn toán mới ( suwrdungj 100% tring react thay vì for)
//  for trả về kq và có thể là thay đổi cái modyfile ban đầu của arr

let arr = [1,2,3,4,5,6,7,8,9,10];

// for (let i=0; i< arr.length; i++){
//   arr[i]*= arr[i];
// }
// console.log('>>>>check array: ', arr);
// arrow function 
// let arrMap = arr.map((item, index) => {
//   item*=item;
//   return item;
// })
// console.log('>>>> check arrMap: ', arrMap)
// console.log('>>>> check arr ban dau:', arr);

let arrMap = arr.map((item, index) =>{
  return  (
    `<td>${item} - ${index}</td>`
  );
})
console.log('>>>> check arrMap: ', arrMap)
console.log('>>>> check arrMap: ', arr)