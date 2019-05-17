var tween = TweenMax.fromTo(".dropdown-content",.5,
  {height: '0px',opacity: 0, display: "none", paused: true,reversed: true},
  {height: '170px',opacity: 1, display: "flex", paused: true,reversed: true});
  
  function toggleMenu() {
  tween.reversed() ? tween.play() : tween.reverse();
  }

class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;
  //  console.log(element)
    // Get the element with the ".dropdown-button" class found in 
    // the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // console.log(this.button)
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => {
      toggleMenu()
     this.toggleContent()
    });
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move 
//on to the Dropdown class
  let dropdowns = document
  .querySelectorAll(".dropdown")
  .forEach(dropdown => new Dropdown(dropdown));

