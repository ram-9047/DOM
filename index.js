// ------------TASK 3---------------

// let headerTitle = document.getElementById("header-title");
// headerTitle.style.borderBottom = "solid 0.3rem black";

// let bodyTitle = document.getElementsByClassName("title");
// bodyTitle[0].style.fontWeight = "bold";
// bodyTitle[0].style.color = "green";

// ---------------------------TASK 4--------------------

// let items = document.getElementsByClassName("list-group-item");
// // console.log(items[2]);
// items[2].style.backgroundColor = "green";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// --------------------------TASK 5 ---------------------------

let li = document.getElementsByTagName("li");
console.log(li);
li[2].innerHTML = "Changed using Tag Name";
li[2].style.fontSize = "1.2rem";
li[2].style.color = "purple";

for (let i = 0; i < li.length; i++) {
  li[i].style.background = "#817D8B";
}
