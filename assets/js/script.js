// variable declaration for selectors
var search = document.querySelector(".input-grp input"),
    userList = document.querySelectorAll(".user-list li");

// event declarations 
search.addEventListener("input", function () {
  var searchUserValue = search.value.trim();
  filterOnSearch(searchUserValue);
})

// function declaration
function filterOnSearch(searchUserValue) {
  var convertLoverCase = searchUserValue.toLowerCase();

  userList.forEach(user => {
    var getUserData = user.getAttribute("data-name"),
        selectLoc = user.querySelector(".location"),
        covertLocation = selectLoc.textContent.toLowerCase();
    if (getUserData.includes(convertLoverCase) || covertLocation.includes(convertLoverCase)) {
      user.classList.remove("hidden")
    } else {
      user.classList.add("hidden")
    }
  })
}