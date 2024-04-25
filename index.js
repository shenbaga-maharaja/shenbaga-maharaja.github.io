
var typed=new Typed(".input",{
    strings:["Developer .","Creator .","Designer .","Editor ."],
    typeSpeed: 90,
    backSpeed: 80,
    loop: true
});

let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".navbar-container");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector(`header nav a[href*='${id}']`)
                    .classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

/*
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-container, heading", { origin: "top" });
ScrollReveal().reveal(
    ".home-img, .education-container, .project-box-item, .skills-container .skills-card .d-none, .box-container .box-item",
    { origin: "bottom" }
);
ScrollReveal().reveal(".home-container h1, .about-img, .contact form", {
    origin: "left",
});
ScrollReveal().reveal(".home-container p, .about-container", {
    origin: "right",
});
*/

// Download Pdf
function cvDownload() {
    const pdfPath = 'images/Resume/ShenbagaMaharaja.pdf';
    const anchor = document.createElement('a');

    anchor.href = pdfPath;
    anchor.download = 'ShenbagaMaharaja.pdf';
    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);

    console.log("clicked");
}


// Define the start date
//var startDate = new Date('January 15, 2024'); // output 0.3 year

var startDate = new Date(2023, 7, 26);
// output 0.4 year

// Extract day, month, and year from the start date
var d1 = startDate.getDate();
var m1 = startDate.getMonth(); // Month index starts from 0, so we add 1
var y1 = startDate.getFullYear();

// Get the current date components
var date = new Date();
var d2 = date.getDate();
var m2 = date.getMonth()+1; // Month index starts from 0
var y2 = date.getFullYear();

// Define the number of days in each month
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Adjust the current day and month if the start date is ahead of the current date
if (d1 > d2) {
    d2 += monthDays[m2 - 1];
    m2 -= 1;
}
if (m1 > m2) {
    m2 += 12;
    y2 -= 1;
}

// Calculate the age components
var days = d2 - d1;
var months = m2 - m1;
var years = y2 - y1;

// Initialize ageText with years component
var ageText = years.toString();

// Check if months component is non-zero
if (months !== 0) {
    // Append fractional part of years if months is non-zero
    ageText += "." + months.toString();
}

console.log(ageText);

// Update the <h1> element with the formatted value
document.querySelector('.abouts-card h1').textContent = ageText;