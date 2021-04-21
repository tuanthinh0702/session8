// console.log(document);

// //lay theo id
// const app = document.getElementById("app");
// console.log(app);

// //lay theo class
// const app1 = document.getElementsByClassName("div");
// console.log(app1);
// //lay theo tag name
// const app2 = document.getElementsByTagName("div");
// console.log(app2);

// //lấy theo query và queryselector
// const app3 = document.querySelector("#app");
// console.log(app3);

// const app4 = document.querySelectorAll(".div");
// console.log(app4);

// //importtant properties and method

// console.dir(app);

// //text and content

// console.log(app.innerHTML);
// app.innerHTML = " <b> good </b>";
// // console.log(app.innerText);
// // app.innerText = " <b>good 1</b>";
// // console.log(app.textContent);
// // app.textContent = " <b> good 2</b>";

// //style
// // console.log(app.style);
// // console.log(app.style.backgroundColor);
// // app.style.backgroundColor = "blue";

// //
// const vd = document.querySelectorAll(".vd");
// vd[0].style.backgroundColor = "blue";
//  vd[1].style.backgroundColor = "blue";
//  vd[2].style.backgroundColor = "blue";

//  //children and parent Element
//  const as = document.getElementById("ass");
//  console.log(as);
//  console.log(as.children);

//  const li = as.children[0];
//  console.log(li.parentElement);
//  //classList, id
//  console.log(as.id);
//  console.log(as.classList);
//  //add class
// as.classList.add("cl4");
// console.log(as);
// //remove class
// as.classList.remove("cl1");
// console.log(as);

//method: remove(), createElement(), appenChild
// const ul = document.getElementById("list");
// const li = ul.children[0];
// console.log(li);
// li.remove();

// const newLi = document.createElement("li");
// ul.appendChild(newLi);
// newLi.innerHTML ="choi gai";

//event and click event

// const btn = document.getElementById("btn");
// btn.onclick = function(){
//     alert("click me");
// }

// tao 1 su kien sau khi kich vao button thi thay doi text cua the div

//b1
// const btn = document.getElementById("btn");
// btn.onclick = function(){
//    const d = document.getElementById("div-1");
//    d.innerHTML = "da thay doi";
//    d.style.fontSize = "20px";
//    d.style.color = "blue";
// }

//b2

 const add = document.getElementById("add");
 const remov = document.getElementById("remove");
 const newLi = document.createElement("li");
 const list = document.getElementById("list");

add.onclick = function(){
  list.appendChild(newLi);
 newLi.innerHTML ="choi gai";
}
remov.onclick = function(){  
list.children[0].remove();
 }
