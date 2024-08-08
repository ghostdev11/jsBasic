console.log('hello word from HTML')
console.log('bai array')
// Array có datatype là object = chỉ khác cách quản lý = nhiều method mak object không có
// Array thường dùng để chứa object 
// object
let a= {
  name:"hana",
  age: 12,
};
console.log('check data object a: ',a);
console.log('my name: ', a.name);
console.log('hana age: ', a['age']);

// array=['item1', 'item2', 'item3'];
let b= ['hana', 'peter', 'eric'];
console.log('type data b: ', typeof b, b);
console.log('fist name: ', b[0], 'second name: ', b[1]);

let family= [
  {name: 'heli', age:13},
  {address: 'HCM', work:'office'},
];

console.log('Information my family: ', family);