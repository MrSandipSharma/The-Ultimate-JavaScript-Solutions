<h1 align="center"><img src="https://firebasestorage.googleapis.com/v0/b/github-images-51d28.appspot.com/o/Chapter_03Loops_and_Functions.png?alt=media&token=c58dae35-d337-4544-9960-9d259250a956" alt="Chapter 03"</h1>

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
Write a program to print the marks of a student in an object using `for loop` ?
```
const obj = {
  harry: 98,
  rohan: 70,
  aakash: 7
}
for (let i = 0; i < Object.keys(obj).length; i++){
  console.log(`Student Name: ${Object.keys(obj)[i]}, Marks: ${obj[Object.keys(obj)[i]]}`);
}
```
Result :
```
Student Name: harry, Marks: 98
Student Name: rohan, Marks: 70
Student Name: aakash, Marks: 7
```
## Question 02
Write the program in Q1 using `for in loop` ?
```
for (let o in obj){
  console.log(`Student Name: ${o}, Marks: ${obj[o]}`);
}
```
Result :
```
Student Name: harry, Marks: 98
Student Name: rohan, Marks: 70
Student Name: aakash, Marks: 7
```

## Question 03
Write a program to print `try again` until the user enters the correct number ?
```
while(true){
  let num = prompt("enter a number :")
  num = Number.parseInt(num)
  if (num == 45){
    console.log("Correct Number...")
    break;
  }
  else{
    console.log("try again..")
  }
}
```
Result :
```
enter a number :> 1
try again..
enter a number :> 87
try again..
enter a number :> 65
try again..
enter a number :> 45
Correct Number...
```

## Question 04
Write a `function` to find `mean of 5 numbers` ?
```
function findMean(a,b,c,d,e){
  let mean = (a + b + c + d + e) / 5
  console.log(`the mean of ${a}, ${b}, ${c}, ${d}, ${e} is ${mean}`);
}

findMean(1,2,3,4,5)
```
Result :
`
the mean of 1, 2, 3, 4, 5 is 3
`


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
