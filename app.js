const mots = 'aaabbbbbc';

let res = '3ax5bxc';

const words = mots.split('');

console.log(mots);
console.log(words);
var omega = words.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
// const reducer = (prVal, curVal) => prVal + curVal;
// var am = words.reduce(reducer);
console.log(omega);
// console.log(' ');
// console.log(' ');

// let result = "";
// let result_2 = "";
// let n = "";
// let alfa = "";
// let item = "";
// for (var i in omega) {
//     if (omega[i] === 1) {
//         n = i;
//     } else {
//         alfa = alfa + omega[i] + i;
//         item = item + omega[i] + i + 'x';
//     }
//     result = alfa + n
//     reponse = item + n
// }
// console.log(result);
// console.log(reponse);

let n = "";
let item = "";
for (let [key, value] of Object.entries(omega)) {
  if(value === 1){
    n = key;
  }else{
    item += `${value}${key}x`;
  }
}
const result = `${item}${n}`;
console.log(result);


// let item = "";
// let n = "";
// for (const om in omega) {
//   if(omega[om] === 1){
//     n = `${om}`;
//   }else{
//     item += `${omega[om]}${om}x`;
//   }
// }
// let result = `${item}${n}`;
// console.log(result);