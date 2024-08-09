console.log("Hello word from HTML")
// thuộc tính object
// quy tắc khai báo object : key: values.
let obj= {
  name:"Peter",
  address:"Ha Tinh",
};

let a = 'name';
// dùng để thay đổi values của key bên trong object 
obj[a] = 'hary' 
// dùng để add new "value:key" vào object khi no bt chính xác "key:values" cần tìm\thay thế mak no làm thay đổi cái đã print
// obj.a='ali'
// cach 1: 
// console.log('what is your name?', `My name's`,obj.name )
// console.log('where are you country?', `I'm country`,obj.address)

// cach 2 
console.log('what is your name?', `My name's`,obj['name'], obj )
console.log('where are you country?', `I'm country`,obj['address'])
