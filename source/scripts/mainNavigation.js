function mainNavigation() {
    
    // Select all items that have a dropdown menu
    var menuItems = document.querySelectorAll('li.menu-item-has-children');
   
    Array.prototype.forEach.call(menuItems, function(el){
        el.querySelector('a').addEventListener("click",  function(event){
            if (this.parentNode.classList.contains("open")) {
                this.parentNode.classList.remove("open");
                this.setAttribute('aria-expanded', "false");
            } else {
                this.parentNode.classList.add("open");
                this.setAttribute('aria-expanded', "true");
            }
            event.preventDefault();
            return false;
        });
    });
    console.log("hello!");
}
mainNavigation();

export { mainNavigation };