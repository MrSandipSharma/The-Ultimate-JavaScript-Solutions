<h1 align="center"><img src="https://firebasestorage.googleapis.com/v0/b/github-images-51d28.appspot.com/o/Chapter_06JavaScript_in_the_browser.png?alt=media&token=2aae74d0-af7d-44e7-8f47-181abdc1794c" alt="Chapter 06"</h1>

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
Write a program `using prompt` function to take `input of age` as a value from the user and use `alert` to tell him `if he can drive` ?
```
let age = prompt("Enter your age :")
age = Number.parseInt(age);
let alrt = age > 18 ? alert("You can drive"): alert("You can not drive")
```

## Question 02
`In Q1` use `confirm` to ask the user if he wants to `see the prompt again` ?
```
let runagain = true;
while(runagain == true){
  let age = prompt("Enter your age :")
  age = Number.parseInt(age);
  let alrt = age > 18 ? alert("You can drive"): alert("You can not drive")
  runagain = confirm("would you wanna change your age ?")
};
```

## Question 03
In the `previous question` use `console.error` to log the error if the `age entered is negative` ?
I will add these codes in previous question.
```
if (age < 0){
    console.error("Please type your age again");
    break;
}
```
now our answer will look like this.
```
let runagain = true;
while(runagain == true){
  let age = prompt("Enter your age :")
  age = Number.parseInt(age);
  if (age < 0){
    console.error("Please type your age again");
    break;
  }
  let alrt = age > 18 ? alert("You can drive"): alert("You can not drive")
  runagain = confirm("would you wanna change your age ?")
};
```

## Question 04
Write a program to `change the url` to `google.com` (redirection) if user enters a number `greater than 4` ?
```
let age = prompt("Enter your age :");
age = Number.parseInt(age);
if (age > 4){
  location.href = "https://google.com/"
}
```

## Question 05
Change the `background of the page` to yellow, red or any other color `based on users input` through prompt ?
```
let clr = prompt("Enter a color name :")
document.body.style.background = clr
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
