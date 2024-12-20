// code to import date 
let date = document.getElementById("date");
let newDate = new Date();
let month = newDate.getMonth();
let monthList = ['janaury','febuary','march','april','may','june','july','august','september','october','november','december'];
let today = newDate.getDate();
let year = newDate.getFullYear();

date.innerText = monthList[month] + " " +today + "," + year ;
console.log(date);

let year1 = document.getElementById("year");
let date1 = new Date();
year1.innerText = date1.getFullYear();

// code for theme changing

const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
  const root = document.documentElement;

  // Check the current mode and toggle between light and dark
  if (themeIcon.classList.contains("fa-sun")) {
    // Switch to dark mode
    root.style.setProperty("--background-color", "#141624"); // Dark mode background color
    root.style.setProperty("--font-col", "#fff");    // Dark mode text color
    root.style.setProperty("--input-color", "#242535");    // Dark mode input color
    root.style.setProperty("--footer-col", "#181a2a");    // Dark mode footer color
    root.style.setProperty("--nav-contents-color", "#97989f");    // Dark mode nav-contents  color
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Switch to light mode
    root.style.setProperty("--background-color", "#ffffff");
    root.style.setProperty("--font-col", "#001f3f");
    root.style.setProperty("--input-color", "#e8e8ea");
    root.style.setProperty("--footer-col", "#f6f7f7"); 
    root.style.setProperty("--nav-contents-color", "#3b3c4a");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

// HTML structure for reference:
// 

document.addEventListener("DOMContentLoaded", function () {
    // Select input and button elements
    const searchInput = document.getElementById("input-text");
    const searchButton = document.getElementById("search-button");

    // Function to perform Google search
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(googleSearchURL, "_blank");
        } else {
            alert("Please enter a search query.");
        }
    }

    // Add click event to the search button
    searchButton.addEventListener("click", performSearch);

    // Add keypress event to the input for Enter key
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });
});
