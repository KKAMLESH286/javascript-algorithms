let str = 'abde';
let alphabets = 'abcdefghijklmnopqrstuvwxyz'
let arr = [];
for (let i=0; i<str.length;i++){
  
console.log(str.charCodeAt(i));
arr.push(str.charCodeAt(i));
}

let newArr = [arr[0]];

let i = 0;
do {
  
  let newwArr = arr[i]+1;
  newArr.push(newwArr);
  i = i + 1;
  } while (arr[i]<arr[arr.length-1]);