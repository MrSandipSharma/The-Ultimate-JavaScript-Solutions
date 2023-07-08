// Q 1
let arr = [1, 2, 3];
// let n = prompt("Enter a value :");
// n = Number.parseInt(n);
// let add = arr.push(n);
// console.log(arr);

// Q 2
// while(true){
//   let n = prompt("Enter a value :");
//   n = Number.parseInt(n);
//   if (n == 0){
//     console.log("You added 0 in array")
//     break;
//   }
//   else{
//     let add = arr.push(n)
//   };
//   console.log(arr);
// }

// Q 3
let newarr = [5, 15, 17, 30, 20];
// let result = newarr.filter((x)=>{
//   return x%10 ==0;
// })
// console.log(result)

// Q 4
let result2 = newarr.map((x)=>{
  return x*x;
})
console.log(result2);

// Q 5
let newarr2 = [1, 2, 3, 4, 5];
let result3 = newarr2.reduce((x, y)=>{
  return x * y;
})
console.log(result3)
