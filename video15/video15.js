console.log('hello word from HTML function')

// khởi tạo function
function test(a,b){
  return a+b;
};
console.log('check kq a+b : ', test(1,2));

// Arrow function '=>' giống như 1 biến 
//  khi khởi tạo không có chữ function
let sum = (a,b) =>{
  return a+b;
}
console.log('check var: ', sum(6,7));