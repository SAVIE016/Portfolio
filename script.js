// Get elements by class name
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Function to open a specific tab
function opentab(tabname) {
    // Loop through tab links and remove the active class
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Loop through tab contents and remove the active class
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active classes to the clicked tab and its content
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

var sidemenu = document.getElementById("sidemenu");

// Function to toggle the side menu
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbz8SBqXNXpJ9ly9i9dYbjzSgTqvf39d9ZbTDh8u0DarU3EBWfb1gz0W8J-168fifBQa/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message submitted successfully!"
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})