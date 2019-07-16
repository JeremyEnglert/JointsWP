/**
 * Adds accessibile dropdown functionality to main navigation.
 * 
 * Toggles open/closed on click, as click is better for accessbility.
 * Hover does not show intent and can be problematic for some users.
 */


function mainNavigation() {
    
    // Select all menu items that have a dropdown menu
    var menuItems = document.querySelectorAll('li.menu-item-has-children');
   
    Array.prototype.forEach.call(menuItems, function(el){
        el.querySelector('a').addEventListener("click",  function(event){
            if (this.parentNode.classList.contains("open")) {
                this.parentNode.classList.remove("open");
                this.setAttribute('aria-expanded', "false"); // Indicates to screen readers that a collapsible area is closed
            } else {
                this.parentNode.classList.add("open");
                this.setAttribute('aria-expanded', "true"); // Indicates to screen readers users that a collapsible area is opened
            }
            event.preventDefault();
            return false;
        });
    });
}
mainNavigation();

export { mainNavigation };