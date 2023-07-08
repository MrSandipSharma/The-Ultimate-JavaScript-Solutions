// Q 1
const obj = {
  harry: 98,
  rohan: 70,
  aakash: 7
}

// for (let i = 0; i < Object.keys(obj).length; i++){
//   console.log(`Student Name: ${Object.keys(obj)[i]}, Marks: ${obj[Object.keys(obj)[i]]}`);
// }

// Q 2
// for (let o in obj){
//   console.log(`Student Name: ${o}, Marks: ${obj[o]}`);
// }

// Q 3
// while(true){
//   let num = prompt("enter a number :")
//   num = Number.parseInt(num)
//   if (num == 45){
//     console.log("Correct Number...")
//     break;
//   }
//   else{
//     console.log("try again..")
//   }
// }

// Q 4
function findMean(a,b,c,d,e){
  let mean = (a + b + c + d + e) / 5
  console.log(`the mean of ${a}, ${b}, ${c}, ${d}, ${e} is ${mean}`);
}

findMean(1,2,3,4,5)
