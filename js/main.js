// Найдите все HTML-теги strong и окрасьте их в зеленый цвет.
// let green = document.getElementsByTagName("strong");
// console.log(green);
// for (i of green) {
//   i.style.color = "green";
// }
//Найдите все HTML-теги em и добавьте им класс selected
// let klass = document.getElementsByTagName("em");

// function checkTask(arr) {
//   let itog = arr.map(elem => elem[0] + elem[elem.length - 1]);
//   return console.log(itog);
// }
// checkTask(["hello", "Poka", "sad"]);

// Задание 7
// Создайте функцию checkTask(arr), которая принимает в аргументы массив с числами.
// Найдите сумму первых N элементов до первого нуля. Функция должна возвращать сумму.
// К примеру для массива:
// [1, 2, 3, 0, 4, 5, 6]
// Функция возвратит:
// 6
// Используйте slice() и reduce().

//! Задание №1
// 	Всем <h3> поставьте текст '!!!'.

// let con = document.getElementsByTagName('h3');
// console.log(con);
// for (let i = 0; i < con.length; i++) {
//   con[i].innerText = '!!!';
// }

//! Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

// let con = document.getElementsByTagName('h3');
// console.log(con);
// for (let i = 0; i < con.length; i++) {
//   con[i].style.color = 'green';
// }

//! Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// let ul = document.createElement("ul");
// for (let i = 1; i <= 30; i++) {
//   ul.innerHTML += `<li>${i} - овечка</li>`;
// }
// document.body.append(ul);

//! Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.

// let spans = document.querySelectorAll('span');
// spans.forEach((elem) => {
//   elem.classList.add('active');
// });

//! Задание №1

// 	Создайте функцию которая находит все ссылки
// в html и меняет их атрибут href на
// "https://makers.kg/"
// (через NativeJS / DOM)

// let a = document.getElementsByTagName("a");

// function domPractice(str) {
//   for (i of a) {
//     i.setAttribute("href", "https://makers.kg/");
//     console.log(i);
//   }
// }
// domPractice(a);

//! taskMakers
//? task DOM-selector3
// let a = document.getElementsByTagName("a");
// for (i of a) {
//   i.style.textDecoration = "none";
// }

// let rowInput = document.querySelector(".row-input");
// console.log(rowInput);
// let inputTag = document.createElement("input");
// inputTag.setAttribute("type", "text");
// inputTag.classList.add("input");
// rowInput.append(inputTag);

// let rowInner = document.getElementsByClassName("row-input");
// let lnput = document.createElement("input");
// lnput.setAttribute("type", "text");
// lnput.classList.add("input");
// rowInner[0].append(lnput);

//! ======= Practica DOM-selector =========

// let title = document.getElementById("title");
// let list = document.getElementsByTagName("ul");
// let items = document.getElementsByClassName("item");
// let inps = document.getElementsByName("inp-name");

// let title = document.querySelector("#title");
// let list = document.querySelectorAll("ul");
// let items = document.querySelectorAll(".item");
// let inps = document.querySelectorAll("[name='inp-name']");
// console.log(inps);

let items = document.getElementsByClassName("item");
let items2 = document.querySelectorAll(".item");
// let list = document.getElementsByTagName("ul");
// list[0].innerHTML += "<li class='item'>new elem</li>";
// console.log(list);
// console.log(items);
// console.log(items2);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }
for (let i = 0; i < items2.length; i++) {
  console.log(items2[i]);
}
