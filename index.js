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

// let li = document.getElementsByTagName("li");
// console.log(li);
// li[2].innerHTML = "Changed using Tag Name";
// li[2].style.fontSize = "1.2rem";
// li[2].style.color = "purple";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.background = "#817D8B";
// }

// ---------------------------TASK 6-----------------------

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// // console.log(s.innerHTML);
// secondItem.style.background = "green";
// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";

// let listItem = document.querySelectorAll(".list-group-item");
// console.log(listItem);
// listItem[1].style.color = "#32CD32";

// 2nd method
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0; i < odd.length; i++){
//     odd[i].style.background = "#228B22"
// }

// --------- TRANSVERSING THE NODE--------------------->
//parentNode
// let itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = "#FE937C";

//parentElement
// let itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = "#FE937C";

//childenNode
// let itemList = document.querySelector("#items");
// console.log(itemList.children);
// itemList.children[1].style.background = "#E2FC60";

//firstChild
// console.log(itemList.firstChild);
//firstChildren
// itemList.firstElementChild.style.fontWeight = "bold";

//lastChild
// console.log(itemList.lastChild);
//lastElementChild
// itemList.lastElementChild.textContent = "This is updated text";
// itemList.lastElementChild.style.color = "red"

//nextSibling
// console.log(itemList.nextSibling);
// itemList.nextSibling.textContent = "no";
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// itemList.previousSibling.textContent = "yoo";
// itemList.previousElementSibling.style.color = "blue";

//createElement

//create a div
// let newDiv = document.createElement("div");
// add a class
// newDiv.className = "hello-class";

// add an id
// newDiv.id = "hello-id";
//ad attributes
// newDiv.setAttribute("title", "Hello Div");

//create a text node
// let newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// let container = document.querySelector(".container");
// let h1 = document.querySelector("#header-title");
// // container.appendChild(newDiv);
// container.insertBefore(newDiv, h1);

// //------------create a list-----------
// let singleItem = document.createElement("li");
// singleItem.className = "list-group-item";

// // singleItem.innerText = "Hello World";

// let newItemText = document.createTextNode("Hello World");
// singleItem.appendChild(newItemText);
// // console.log(singleItem);

// let firstItem = document.querySelector(".list-group-item:nth-child(1)");
// itemList.insertBefore(singleItem, firstItem);

//-------------------------TASK 8 --------------------
// let form = document.getElementById("addForm");
// let itemList = document.getElementById("items");
// let filter = document.getElementById("filter");
// //-------form submit event-------
// form.addEventListener("submit", addItem);
// ///------Delete Event-------
// itemList.addEventListener("click", removeItem);

// //------ add item in the list-----
// function addItem(e) {
//   e.preventDefault();

//   //----get input value form input
//   let newItem = document.getElementById("item");
//   //-----create a new li----
//   let li = document.createElement("li");
//   //------ add class name to that li
//   li.className = "list-group-item";
//   ///-----add the input value to li
//   li.appendChild(document.createTextNode(newItem.value));

//   //---- create a delete button
//   let delButton = document.createElement("button");
//   //--- add class name to button
//   delButton.className = "btn btn-danger btn-sm float-right delete";
//   // --- add delete symbol to the button
//   delButton.appendChild(document.createTextNode("X"));

//   //---------create a EDIT button
//   let editBtn = document.createElement("button");
//   editBtn.className = "btn btn-sm float-right";
//   editBtn.style.background = "green";
//   editBtn.style.color = "white";
//   editBtn.style.marginLeft = "0.5rem";
//   editBtn.appendChild(document.createTextNode("Edit"));
//   li.appendChild(editBtn);

//   //---- add delete button in the list li
//   li.appendChild(delButton);
//   // add the li to the ul
//   itemList.appendChild(li);
// }

// // Remove Item
// function removeItem(e) {
//   e.preventDefault();
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure?")) {
//       let li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

//-----------------------TASK - 9 --------FILTER----------------

//------filter event----
filter.addEventListener("keyup", filterItems);

// Filter Items
function filterItems(e) {
  //convert the input to lower case
  let text = e.target.value.toLowerCase();

  //get all the li items
  let items = document.getElementsByTagName("li");
  //convert items in array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
