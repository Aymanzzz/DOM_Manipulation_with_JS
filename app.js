const firstDiv = document.getElementById("firstTask");
const firstPara = document.createElement("p");
firstPara.classList.add("fontGrey");
firstPara.innerText =
  "*****First Task ******\n0-I have an img and it's in the attachments, try to destructure the entrie file by exposing all the attributes one by one \n-- try to express the output by saying some clear sentences which make sense like 'Hello guys, I'm [username]' etc";

firstDiv.append(firstPara);

const obj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const source = document.createElement("img");
source.classList.add("image1");
source.src = "FB_IMG_1591009607877.jpg";
for (let key in obj) {
  let value = obj[key];
  source.setAttribute(key, value);
}
firstDiv.append(source);
const firstH3 = document.createElement("h3");
firstH3.innerText = `Hello guys, I'm ${obj.name} !`;
firstDiv.append(firstH3);

// // *******************************************************************************************************************************************

const secondDiv = document.getElementById("secondTask");
const secondPara = document.createElement("p");
secondPara.classList.add("fontGrey");
secondPara.innerText =
  "*****Second Task ******\n1- I want to to expose my books inside my webpage.\n-Iterate through the array of favBooks.\n-For each book, create a <p> element with the book title, author and append it to the page, add also a span which contains the price.\n-You can use a ul and li to display all the favBooks.\n-Add an <img> to each book that links to a URL of the book cover. [you can get the links from google].\n-Change the style of the book based on whether you have read it (green) or not (crimson).";

secondDiv.append(secondPara);
const favBooks = [
  {
    title: "Head First Java, 2nd Edition",
    author: "Kathy Sierra",
    hasRead: true,
    price: 54.82,
  },
  {
    title: "Head First Design Patterns: A Brain-Friendly Guide",
    author: "Bert Bates",
    hasRead: false,
    price: 63.95,
  },
  {
    title: "Head First Object-Oriented Analysis and Design",
    author: "Gary Pollice",
    hasRead: false,
    price: 34.3,
  },
  {
    title: "Introduction to Java Programming and Data Structures",
    author: "Liang Y.",
    hasRead: false,
    price: 67.99,
  },
];

const uList = document.createElement("ul");
secondDiv.append(uList);
for (let book of favBooks) {
  const iList = document.createElement("li");
  const element = document.createElement("p");
  const newSpan = document.createElement("span");
  const linkableImg = document.createElement("a");
  const bookCover = document.createElement("img");
  bookCover.classList.add("image2");
  iList.appendChild(element);
  element.innerHTML = `Book Title : ${book.title}.   Author: ${book.author}.`;
  element.appendChild(newSpan);
  newSpan.innerText = ` Price = € ${book.price}`;
  linkableImg.appendChild(bookCover);
  iList.appendChild(linkableImg);
  uList.appendChild(iList);
  if (book.hasRead) {
    element.style.color = "green";
  } else {
    element.style.color = "crimson";
  }
}

let bookImg = document.querySelectorAll("ul li a img");
bookImg[0].src = "https://media.s-bol.com/NQ8Ll5j0GkL/550x635.jpg";
bookImg[0].alt = "Head First Java A Brain-friendly Guide";
bookImg[1].src =
  "https://www.henriknorman.com/wp-content/uploads/2017/02/HeadFirstCover-1024x933.jpg";
bookImg[1].alt = "Head First Java, 2nd Edition Book";
bookImg[2].src = "https://media.s-bol.com/KKzDrXAQ6rR/550x619.jpg";
bookImg[2].alt = "Head First Object-oriented Analysis and Design";
bookImg[3].src = "https://media.s-bol.com/gBDBQqjnkyG/550x690.jpg";
bookImg[3].alt =
  "Introduction to Java Programming and Data Structures, Comprehensive Version";

let bookUrl = document.querySelectorAll("ul li a");
bookUrl[0].href =
  "https://www.bol.com/nl/p/head-first-java/1001004002418451/?Referrer=ADVNLGOO002008N-G-58041074619-S-415399982041-1001004002418451&gclid=EAIaIQobChMIpoio98m26gIVk94YCh1NAglSEAYYASABEgLE0vD_BwE";
bookUrl[1].href =
  "https://www.bol.com/nl/p/head-first-design-patterns/1001004002332281/?Referrer=ADVNLGOO002008N-G-58041074619-S-299945109549-1001004002332281&gclid=EAIaIQobChMI6rn6s8q26gIVBywYCh25XQmJEAYYASABEgKswvD_BwE";
bookUrl[2].href =
  "https://www.bol.com/nl/f/head-first-object-oriented-analysis-and-design/37573417/";
bookUrl[3].href =
  "https://www.bol.com/nl/f/to-java-comprehensive-version-global-edition/9200000029101087/";

// // *******************************************************************************************************************************************
const thirdDiv = document.getElementById("thirdTask");
const thirdPara = document.createElement("p");
thirdPara.innerText =
  "*****Third Task ******\n2- We have a simple HTMl page and it contains all these elements \n<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8'/>\n<title>My Storry</title>\n</head>\n<body>\n<h1>My Story</h1>\n\n<ul>\n<li>Nickname: <b id='nickname'></b></li>\n<li>Favorite player: <b id='fav-player'></b></li>\n<li>Nationality: <b id='nationality'></b></li>\n</ul>\n</body>\n</html>\n-- Add a script tag to the bottom of the HTML body.\n-- (In the JavaScript) Change the body tag's style so it has a font-family of 'Arial, sans-serif'.\n-- (In the JavaScript) Replace each of the spans (nickname, fav-player, nationality) with your own story information.\n-- ierate through each li and change the class to 'list-item'.\n-- Add a link tag to link your style file [style.css] that sets a rule for .list-item to make the color crimson.\n-- Create a new img element and set its src attribute to a picture of you and append it to the body\n-- create a bold tag to tell the reader that these data describe your story information by saying [some message.....]";
thirdPara.classList.add("fontGrey");
thirdDiv.appendChild(thirdPara);
thirdDiv.style.fontFamily = "Arial, sans-serif";
const headH1 = document.createElement("h1");
headH1.innerText = "My Story";
thirdDiv.appendChild(headH1);

const thirdDivUl = document.createElement("ul");
for (let i = 0; i <= 2; i++) {
  let divLi = document.createElement("li");
  divLi.id = "1";
  thirdDivUl.appendChild(divLi);
}
thirdDiv.appendChild(thirdDivUl);
let newLi = document.querySelectorAll("#thirdTask ul li");
newLi[0].id = "nickName";
newLi[0].innerText = "My nickname is Ayman";
newLi[1].id = "fav-player";
newLi[1].innerText = "My favorite player is M.Salah";
newLi[2].id = "nationality";
newLi[2].innerText = "My nationality is Nedelandse";

for (let newCol of newLi) {
  newCol.classList.add("list-item");
}

const myImg2 = document.createElement("img");
myImg2.classList.add("myImg");
myImg2.src =
  "https://www.logoground.com/uploads/2018183902018-06-294118686devtroop.jpg";
thirdDiv.appendChild(myImg2);

const mySms = document.createElement("p");
mySms.innerHTML =
  "<b> Hi there, this is me trying to manipulate the DOM elements with some JS code! ;)</b>";
thirdDiv.appendChild(mySms);

// // *******************************************************************************************************************************************
const fourthDiv = document.getElementById("fourthTask");
const fourthPara = document.createElement("p");
fourthPara.innerText =
  "*****Fourth Task ******\n3- we need here to replace the image/logo from this site ['https://www.bing.com/'] so\n-- try to access the img/logo from the inspector of your google chrome and try to replace the current img/logo with something else\n-- try to modify the style of the current search box but don't forget to access the search box and check if you can access it's properties and store them into any variable";
fourthPara.classList.add("fontGrey");
fourthDiv.appendChild(fourthPara);
const originalImg = document.createElement("img");
originalImg.src = "https://i.postimg.cc/vHhgb7cp/original-bing-page.jpg";
originalImg.style.height = 700 + "px";
originalImg.style.width = 1400 + "px";
fourthDiv.appendChild(originalImg);

const modifiedImg = document.createElement("img");
modifiedImg.src =
  "https://i.postimg.cc/0y1W1sKt/replace-Bing-logo-with-Tor-logo.jpg";
modifiedImg.style.height = 700 + "px";
modifiedImg.style.width = 1400 + "px";
fourthDiv.appendChild(modifiedImg);

// // *******************************************************************************************************************************************
const fifthDiv = document.getElementById("fifthTask");
const fifthPara = document.createElement("p");
fifthPara.innerText =
  "*****Fifth Task ******\n 4- Create a basic HTML file with any elements you deterine if you can get any benfits from them and include the script tag to your file[app.js]\n-- try to fetch the current time in this format [hh:mm:ss] => [hour: min: sec]. hint: you need to use google to check what the correct function is\n-- use this function [setInterval()] to make sure the time stays current .. hint: you need to use google or you can ask me once you give up..\n-- check how to run the function when you load the page..";
fifthPara.classList.add("fontGrey");
fifthDiv.appendChild(fifthPara);

const dateTimeSpan = document.createElement("span");
dateTimeSpan.classList.add("setDateTime");
fifthDiv.appendChild(dateTimeSpan);
let dateTime = setInterval(dateTimeInterval, 1000);

function dateTimeInterval() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  dateTime = date + " " + time;
  dateTimeSpan.innerText = dateTime;
}

// // *******************************************************************************************************************************************
const sixthDiv = document.getElementById("sixthTask");
const sixthPara = document.createElement("p");
sixthPara.innerText =
  "*****Sixthth Task ******\n 5- create any html page[index.html] and add this tag to your file in static way [in your html without js, normal adding]\n-- this is the tag <img style='position:absolute;' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/javascript.png' />\n-- create a variable to store the img reference\n-- Change the style of the img to have a 'left' of '0px', so that it starts at the left hand of the screens. [it's already absolute]\n-- Create a function called moveJS() that moves the img 20 pixels to the right of where it started, by changing the 'left' style property.";
sixthPara.classList.add("fontGrey");
sixthDiv.appendChild(sixthPara);

const divImg = document.querySelector("#divImg img");
divImg.style.height = 100 + "px";
divImg.style.left = 0 + "px";
divImg.style.width = 140 + "px";
divImg.style.marginTop = 120 + "px";
divImg.style.border = "thick solid crimson";
let movedImg = setInterval(moveJS, 2000);
function moveJS() {
  divImg.style.left = 20 + "px";
}

// // *******************************************************************************************************************************************
const seventhDiv = document.getElementById("seventhTask");
const seventhPara = document.createElement("p");
seventhPara.innerText =
  "*****Seventh Task ******\n \n6- I have this varaible, str = '1111111111111111';\n-- convert the content of str to an array\n-- use reduce to calcualte all the numbers\n-- print the result in a clear sentence";
seventhPara.classList.add("fontGrey");
seventhDiv.appendChild(seventhPara);
seventhDiv.style.marginTop = 200 + "px";

const str = "1111111111111111";
let newStr = str.split("");
let totalStr = newStr.reduce((acc, val) => acc + val);
let xPara = document.createElement("p");
xPara.innerText = `The total of str array using reduce() is  ${totalStr}`;
seventhDiv.appendChild(xPara);

// // *******************************************************************************************************************************************
