// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
let arr='';

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];

  var __FOUND = suggestions.find(function(post, index) {
     if(post.collegeName == userData)
      return true;
  });
   arr=__FOUND.title;
  console.log("emptyArray",__FOUND.title);


  if (userData) {
    icon.onclick = () => {
      //webLink = `https://www.google.com/search?q=${arr}`;
     webLink = `${arr}.html`;

      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); 
  }
};

function select(element) {
  debugger;
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    //webLink = `https://www.google.com/search?q=${selectData}`;
    webLink = `${arr}.html`;
   
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
