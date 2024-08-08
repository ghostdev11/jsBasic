console.log('hello word from to HTML')
// '==' so sanh theo values
// '===' so sanh theo type , values ( dung === thay vi ==)
let a = 5; 
let b= 5;
console.log(`so sanh voi '==' : `, 'a=',a, typeof a , 'b=', b,typeof b, 'result: ', a==b);
console.log(`so sanh voi '===' : `, 'a=',a, typeof a , 'b=', b,typeof b, 'result: ', a===b);

console.log('-----------------');
let c= 6;
let d= '6';
console.log(`so sanh voi '==' : `, 'c=',c, typeof c , 'd=', d,typeof d, 'result: ', c==d);
console.log(`so sanh voi '===' : `, 'c=',c, typeof c , 'd=', d,typeof d, 'result: ', c===d);


// empty, null, undefine
let hi ; 
console.log('check values hi: ', hi);

let h2 = null;
console.log('check values h2: ',h2);

let h3 = {};
console.log('check values h3: ',h3);