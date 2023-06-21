const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// select tab content item
function selectItem(e) {
  // Removing the border from the unclicked tab
  removeBorder();
  removeShow();
  //add border to current tab
  this.classList.add("tab-border");
  // getting the tab content from the Dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //to display the remaining content
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
// this is the listener event for the changing the red border with tabs

tabItems.forEach((item) => item.addEventListener("click", selectItem));
