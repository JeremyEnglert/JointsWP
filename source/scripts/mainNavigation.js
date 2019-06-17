function mainNavigation() {
    // Select all items that have a dropdown menu
    var menuItems = document.querySelectorAll('li.menu-item-has-children');
   
    menuItems.forEach(function(el){
        // All limks that open a dropdown 
        var dropdownLinks = el.querySelector('a');

        // Create a button to open the dropdown menu
        var button = '<button>+<span class="screen-reader-text">show submenu for “' + dropdownLinks.text + '”</span></button>';
        dropdownLinks.insertAdjacentHTML('afterend', button);

        el.querySelector('button').addEventListener("click",  function(event){
            if (this.parentNode.classList.contains("open")) {
                // If menu is open, close it
                this.parentNode.classList.remove('open');
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
            } else {
                // If menu is closed, open it
                this.parentNode.classList.add('open');
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
            }
            event.preventDefault();
        });

        // el.querySelector('button').addEventListener('mouseenter',  function(){
        //     this.parentNode.classList.add('open');
        //     this.parentNode.querySelector('button').setAttribute('aria-expanded', 'true');
        // });
        
        // el.querySelector('button').addEventListener('mouseleave',  function(){
        //     this.parentNode.classList.remove('open');
        //     this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
        // });
    });

}
mainNavigation();

export { mainNavigation };