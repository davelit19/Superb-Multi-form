"use strict"  // Enable strict mode to catch common coding mistakes.
let currentTab = 0;  // Current tab index.

let tabArr = document.getElementsByClassName("tab");

let prevBtn = document.getElementById("prevBtn");

let nextBtn = document.getElementById("nextBtn");

let trackerArr = document.getElementsByClassName("tracker");

let inputTab0 = tabArr[0].getElementsByTagName("div"); // Get "div" elements in the first tab.

let inputChecked = document.getElementById("toggle-checked");

let step2Yearly = document.getElementById("step2-yearly");

let step2Monthly = document.getElementById("step2-monthly");

let yearStr = document.querySelectorAll(".year-str");

let span2 = document.getElementsByClassName("span-2");

let span1 = document.getElementsByClassName("span-1");

let btn = document.getElementsByClassName("btn");

let checkbox = document.getElementsByClassName("checked");

let change = document.getElementById("change");

let step4Monthly = document.getElementsByClassName("step4-mo");

let step4Yearly = document.getElementsByClassName("step4-yr");

// Call the `showTab` function with the initial `currentTab` value.

showTab(currentTab);

 // Define the `showTab` function that takes an index `n` as a parameter.

function showTab(n) {
   // Loop through the "btn" elements and make the following css changes with respect to the tab.
   for (let i = 0; i < btn.length; i++) {
      if (n === i) {
         btn[n].classList.add("btn-bgc")
      } else {
         btn[i].classList.remove("btn-bgc")
      }
   }
    // Display the current tab.
   tabArr[currentTab].style.display = "block";
    
   // Handle specific conditions based on the value of `n`.
   if (n === 0) {
      prevBtn.style.display = "none";
      document.querySelector(".btn-cont").style.flexDirection = "row-reverse";
   } else {
      prevBtn.style.display = "inline";
      document.querySelector(".btn-cont").style.flexDirection = "row";
   }
   if (n === 3) {
      nextBtn.style.backgroundColor = "var(--Purplish-blue)";
      nextBtn.textContent = "Submit";
   } else {
      nextBtn.style.backgroundColor = "var(--Marine-blue)";
      nextBtn.textContent = "Next Step";
   }
   if (n === (tabArr.length - 1)) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
   }

}
function jumpTab(n) {
   //if the first tab input fields are not field, don't jump tabs and throw an alert error message.
      if (n !== 0 && !validation()) {
      alert(`Fill the the first step in order to proceed ⇨`);
      return false;
   }
   for (let i = 0; i < btn.length; i++) {
      if (n === i) {
         btn[n].classList.add("btn-bgc")
      } else {
         btn[i].classList.remove("btn-bgc")
      }
   }
   // Hide the current tab and update the currentTab value.
   tabArr[currentTab].style.display = "none";
   currentTab = n;
   showTab(currentTab)
}

function nextPrev(n) {
   // Check for validation before proceeding to the next or previous tab.
   if (n === 1 && !validation()) {
      return false;
   }
   tabArr[currentTab].style.display = "none";
   currentTab += n;

   showTab(currentTab);
}

function validation() {
   let valid = true;
   let i;

   // Loop through input fields in the first tab (every other div).
   for (i = 1; i < inputTab0.length; i += 2) {
      let x = inputTab0[i].getElementsByTagName("input");
      let y = inputTab0[i].getElementsByTagName("div");

      for (let k = 0; k < x.length; k++) {
         if (x[k].value === "") {
            y[k].querySelector(".error").style.display = "inline";
            x[k].style.borderColor = "var(--Strawberry-red)";

            // Set a timeout to hide the error message and reset the border color.
            setTimeout(() => {
               y[k].querySelector(".error").style.display = "none";
               x[k].style.borderColor = "var(--Marine-blue)";
            }, 8000)
            valid = false;
         } else {
            y[k].querySelector(".error").style.display = "none";
            x[k].style.borderColor = "var(--Marine-blue)";
         }
      }
   }

   return valid;

}
inputChecked.addEventListener("change", () => {


   if (inputChecked.checked === true) {
      console.log("Checkbox is checked.");
      step2Yearly.style.color = "var(--Marine-blue)";
      step2Monthly.style.color = "var(--Cool-gray)";
      for (let i = 0; i < yearStr.length; i++) {
         yearStr[i].style.display = "block";

      }
      for (let j = 0; j < span2.length; j++) {
         span2[j].style.display = "inline";
         span1[j].style.display = "none";
      }
   } else {
      console.log("Checkbox is unchecked.");
      step2Monthly.style.color = "var(--Marine-blue)";
      step2Yearly.style.color = "var(--Cool-gray)";
      for (let i = 0; i < yearStr.length; i++) {
         yearStr[i].style.display = "none";
      }
      for (let j = 0; j < span2.length; j++) {
         span2[j].style.display = "none";
         span1[j].style.display = "inline";
      }
   }

})

for (let i = 0; i < checkbox.length; i++) {
   checkbox[i].addEventListener("change", (e) => {
      if (e.target.checked) {
         document.getElementsByClassName("step3-li")[i].classList.add("step3-change")
      } else {
         document.getElementsByClassName("step3-li")[i].classList.remove("step3-change")
      }
   })
}

change.addEventListener("click", function () {
   for (let k = 0; k < step4Monthly.length; k++) {
      step4Monthly[k].classList.toggle("remove-mo-or-yr");
      step4Yearly[k].classList.toggle("remove-mo-or-yr");
   }
   console.log()
   document.querySelector(".total-mo").classList.toggle("toggle-str");
   document.querySelector(".total-yr").classList.toggle("toggle-str");
   document.querySelector(".arcade-mo").classList.toggle("toggle-str");
   document.querySelector(".arcade-yr").classList.toggle("toggle-str");
})
