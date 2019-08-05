/**
 * Adds accessibile dropdown functionality to main navigation.
 * 
 * Toggles open/closed on click, as click is better for accessbility.
 * Hover does not show intent and can be problematic for some users.
 */
function mainNavigation() {
    // Select all menu items that have a dropdown menu
    const menuItems = document.querySelectorAll('li.menu-item-has-children');

    // Add event listeners for click and keyboard
    Array.prototype.forEach.call(menuItems, function(el){
        el.querySelector('a').addEventListener('click', openDropdownMenu);
        el.querySelector('a').addEventListener('keyup', dropdownKeyupHandler);
        el.querySelector('a').addEventListener('keydown', dropdownKeydownHandler);
    });
}
mainNavigation();

// Open dropdown menuu
function openDropdownMenu() {
    if (this.parentNode.classList.contains("open")) {
        this.parentNode.classList.remove("open");
        this.setAttribute('aria-expanded', "false"); // Indicates to screen readers that a collapsible area is closed
    } else {
        this.parentNode.classList.add("open");
        this.setAttribute('aria-expanded', "true"); // Indicates to screen readers users that a collapsible area is opened
    }
}

// If spacebar or enter is pressed, open the dropdown
function dropdownKeydownHandler (event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        this.click();
    }
}

// If the spacebar is pressed, don't scroll the page
function dropdownKeyupHandler (event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
}

// Control menu with arrows
function controlWithArrows(keyboardEvent, nodeList, currentIndex) {
    switch (keyboardEvent.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        console.log("hello");
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          var prevIndex = Math.max(0, currentIndex - 1);
          nodeList[prevIndex].focus();
        }
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        keyboardEvent.preventDefault();
        if (currentIndex > -1) {
          var nextIndex = Math.min(nodeList.length - 1, currentIndex + 1);
          nodeList[nextIndex].focus();
        }
        break;
      case 'Home':
        keyboardEvent.preventDefault();
        nodeList[0].focus();
        break;
      case 'End':
        keyboardEvent.preventDefault();
        nodeList[nodeList.length - 1].focus();
        break;
    }
}
controlWithArrows();

export { mainNavigation };