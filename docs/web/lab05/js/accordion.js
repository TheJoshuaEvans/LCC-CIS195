// JavaScript functionality for the accordions. Adapted from W3Schools:
// https://www.w3schools.com/HOWTO/howto_js_accordion.asp

// Get all the accordion buttons
const accordionButtons = document.querySelectorAll("button.accordion");

// Add an event listener to each button that...
for (let i = 0; i < accordionButtons.length; i++) {

  // ...activates when the button is clicked and then...
  accordionButtons[i].addEventListener("click", function() {
    
    // ...toggles the "active" status of the button and...
    const isActive = this.classList.toggle("accordion-active");

    // ...sets the height of the related panel, which is the next sibling of the button, to either the
    // scroll height or to null depending on whether the button was activated or deactivated. By setting
    // the max height to null the default value will be used, which is set to 0 in the CSS
    var panel = this.nextElementSibling;
    console.log(panel.scrollHeight);
    if (isActive) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    } 
  });
}
