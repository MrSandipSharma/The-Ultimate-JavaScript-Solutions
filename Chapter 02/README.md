<h1 align="center"><img src="https://firebasestorage.googleapis.com/v0/b/github-images-51d28.appspot.com/o/Chapter_02Expressions_%26_Conditions.png?alt=media&token=99fd7b17-68fb-4e9c-abb3-0688191d9161" alt="Chapter 02"</h1>

<div align="center">
 <span>
  <a href="https://www.frontendmentor.io/challenges"><img src="https://img.shields.io/badge/Projects-Demo-blue?style=for-the-badge&logo=&logoColor=white" alt="Live Demo"></a>
 </span>
 <span>
  <a href="https://cwh-full-next-space.fra1.digitaloceanspaces.com/downloads/videos/ultimate-js-tutorial-hindi-1/JS%20All%20in%20One%20Notes.pdf"><img src="https://img.shields.io/badge/Practice Q- PDF-red?style=for-the-badge&logo=&logoColor=white" alt="Practice Q PDF"></a>
 </span>
 </div>

# 🎉 Practice Questions

## Question 1
Use `logical operators` to find whether the age of a person lies `between 10 and 20` ?
```
let age = prompt("Enter your age : ");
age = Number.parseInt(age);
if(age > 10 && age < 20){
  console.log("Your age lies between 10 and 20");
}
else{
  console.log("Your age don't lie between 10 and 20");
}
```
Result : 
```
Enter your age : > 15
Your age lies between 10 and 20 
```

## Question 2
Demonstrate the use of `switch case statement` in `JavaScript` ?
```
switch(new Date().getDay()){
  case 0:
    console.log("Sunday")
    break;
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 0:
    console.log("Saturday")
    break;
}
```
Result : ` Friday `

## Question 3
Write a `JavaScript Program` to find whether a number is `divisible by 2 and 3` ?
```
let num = prompt("Enter a number :")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0){
  console.log("The Number is divisible by 2 and 3")
}
else{
  console.log("The Number is not divisible by 2 and 3")
}
```
Result : 
``` 
12
The Number is divisible by 2 and 3 
9
The Number is not divisible by 2 and 3
```

## Question 4
Write a `JavaScript Program` to find whether a number is `divisible by either 2 and 3` ?
```
let num = prompt("Enter a number :")
num = Number.parseInt(num)
if (num % 2 == 0 || num % 3 == 0){
  console.log("The Number is divisible by either 2 and 3")
}
else{
  console.log("The Number is neither divisible by 2 and 3")
}
```
Result : 
```
Enter a number :> 4
The Number is divisible by either 2 and 3

Enter a number :> 9
The Number is divisible by either 2 and 3

Enter a number :> 11
The Number is neither divisible by 2 and 3
```

## Question 5
Print "You can Drive" or "You can not Drive" based on age being greater than 18 using `ternary operator` ?
```
let a = prompt("Enter your age :");
let result = a > 18 ? "You can Drive" : "You can not Drive";
console.log(result);
```
Result : 
```
Enter your age :> 10
You can not Drive
```

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
