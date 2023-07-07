<h1 align="center"><img src="https://firebasestorage.googleapis.com/v0/b/github-images-51d28.appspot.com/o/Chapter_01Variables_%26_Data.png?alt=media&token=2a6da7f2-70b5-4202-9c05-174275049733" alt="Chapter 01"</h1>

<div align="center">
 <span>
  <a href="https://www.frontendmentor.io/challenges"><img src="https://img.shields.io/badge/Projects-Demo-blue?style=for-the-badge&logo=&logoColor=white" alt="Live Demo"></a>
 </span>
 <span>
  <a href="https://cwh-full-next-space.fra1.digitaloceanspaces.com/downloads/videos/ultimate-js-tutorial-hindi-1/JS%20All%20in%20One%20Notes.pdf"><img src="https://img.shields.io/badge/Practice Q- PDF-red?style=for-the-badge&logo=&logoColor=white" alt="Practice Q PDF"></a>
 </span>
 </div>

# 🎉 Practice Questions

## Questions 1
Create a `variable` of `type string` and try to add a `number` to it ?
```
let variable = "String";
let variable2 = 45;
let result = variable + variable2;

```
* Result :
    ` String45 `

## Questions 2
Use `typeof operator` to find the datatype of the `string` in last questions ?
```
console.log(typeof variable);
```
* Result :
    ` string `

## Questions 3
Create a `const object` in JavaScript. Can you change it to `hold a number` later ?
```
const obj = {
  name: "Sandip",
  subject: "JavaScript",
  level: "Beginner"
}

// Change The Const object
obj = 45;
console.log(obj)
```
* Result :
    ` TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/runner/VictoriousYouthfulAccounting/index.js:17:5)
    at Module._compile (node:internal/modules/cjs/loader:1159:14) `

## Questions 4
Try to add a `new key` to the `const object` in problem 3 were you able to do that ?
```
obj['subject'] = "Python"
console.log(obj)
obj['subject'] = "JavaScript"
obj['level'] = "Pro"
console.log(obj)
```
* Result :
``` 
{ name: 'Sandip', subject: 'Python', level: 'bigginer' }
{ name: 'Sandip', subject: 'JavaScript', level: 'Pro' } 
```
 ## Questions 5
 Write a `JS program` to create a word meaning dictionary of 5 words ?
 ```
 const dic = {
  apple: "a round fruit with firm, white flesh and a green, red, or yellow skin",
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
  ball: "a round object that you hit, kick, throw, etc. in games and sports"
}

console.log(dic["ball"])
 ```

 * Result : ` a round object that you hit, kick, throw, etc. in games and sports `

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
