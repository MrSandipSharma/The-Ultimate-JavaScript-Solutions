<h1 align="center"><img src="https://firebasestorage.googleapis.com/v0/b/github-images-51d28.appspot.com/o/Chapter_05Arrays.png?alt=media&token=28f51837-a9b9-4b5e-b19d-d306437e2468" alt="Chapter 05"</h1>

<div align="center">
 <span>
  <a href="https://www.frontendmentor.io/challenges"><img src="https://img.shields.io/badge/Projects-Demo-blue?style=for-the-badge&logo=&logoColor=white" alt="Live Demo"></a>
 </span>
 <span>
  <a href="https://cwh-full-next-space.fra1.digitaloceanspaces.com/downloads/videos/ultimate-js-tutorial-hindi-1/JS%20All%20in%20One%20Notes.pdf"><img src="https://img.shields.io/badge/Practice Q- PDF-red?style=for-the-badge&logo=&logoColor=white" alt="Practice Q PDF"></a>
 </span>
 </div>

# 🎉 Practice Questions

## Question 01
`Create an array` of numbers and `take input from the user` to add numbers to this array ?
```
let arr = [1, 2, 3];
let n = prompt("Enter a value :");
n = Number.parseInt(n);
let add = arr.push(n);
console.log(arr);
```
Result :
```
Enter a value :> 15
[ 1, 2, 3, 15 ]
```

## Question 02
`Keep adding numbers` to the `array` in `q1 array` until `0 is added` to the `array` ?
```
while(true){
  let n = prompt("Enter a value :");
  n = Number.parseInt(n);
  if (n == 0){
    console.log("You added 0 in array")
    break;
  }
  else{
    let add = arr.push(n)
  };
  console.log(arr);
}
```
Result :
```
Enter a value :> 15
[ 1, 2, 3, 15 ]
Enter a value :> 10
[ 1, 2, 3, 15, 10 ]
Enter a value :> 0
You added 0 in array
```

## Question 03
`filter` for numbers `divisible by 10` from a given array ?
```
let newarr = [5, 15, 17, 30, 20];
let result = newarr.filter((x)=>{
  return x%10 ==0;
})
console.log(result)
```
Result :
```
[ 30, 20 ]
```

## Question 04
Create an `array of square` of given numbers ?
```
let result2 = newarr.map((x)=>{
  return x*x;
})
console.log(result2);
```
Result :
```
[ 25, 225, 289, 900, 400 ]
```

## Question 05
Use `reduce to calculate factorial` of a given number from an array of first n natural numbers `n being the number where factorial needs to be calculated` ?
```
let newarr2 = [1, 2, 3, 4, 5];
let result3 = newarr2.reduce((x, y)=>{
  return x * y;
})
console.log(result3)
```
Result : ` 120 `

## Say `Hello 👏` to me

If you liked my work or wants to connect with me you can follow my social media accounts or you can say a `Hello 👏` to me.

<div align="center">
<span>
<a href="https://www.instagram.com/sandip_sharma_24/?igshid=NTc4MTIwNjQ2YQ%3D%3D"><img src="https://img.shields.io/badge/Profile-Instagram-red?style=for-the-badge&logo=&logoColor=white" alt="Instagram"></a>
 </span>
 <span>
  <a href="https://www.frontendmentor.io/profile/MrSandipSharma"><img src="https://img.shields.io/badge/Profile-Frontend%20Mentor-blue?style=for-the-badge&logo=&logoColor=white" alt="frontendmentor"></a>
 </span>
 </div>
