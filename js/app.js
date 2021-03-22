/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const sections = document.querySelectorAll("section"); //select all sections
console.log(sections);
//console.log(sections.length);
let ul = document.getElementById("navbar__list");
ul.classList.add("navbar__menu"); //add css to ul
function addNav(sections){
    let navList = document.getElementById("navbar__list"); //select navbarul
    console.log(navList);
    for (let i = 0 ; i< sections.length ; i++){
        // Create a li element
        let list_item = document.createElement("LI");       
        let section_name= sections[i].getAttribute('data-nav');
        let section_link = sections[i].getAttribute('id');
        //list_item.innerHTML = section_name;                     
        navList.appendChild(list_item);  
        list_item.classList.add("navbar__menu"); //add css to  li

        // Create anchor element
        let a = document.createElement('a');         
        let link = document.createTextNode(section_name); 
        a.appendChild(link); 
        a.href = "#"+section_link; 
        a.classList.add("menu__link"); //add css to a
        //console.log(sections[i].id+i);
        a.setAttribute("id", sections[i].id+i); //add id attribute to a
        list_item.appendChild(a);
        

        
        

        
    }


}
addNav(sections);

// Add class 'active' to section when near top of viewport

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  sections.forEach((section) => section.classList.remove('your-active-class'));
  sections[index].classList.add('your-active-class');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


// Scroll to anchor ID using scrollTO event
/*const anchors = document.querySelectorAll("a"); //select all sections
for (let i = 0 ; i< sections.length ; i++){
    let section  = document.getElementById(sections[i].id);
    let anchor = document.getElementById(anchors[i].id);
    anchors[i].addEventListener('click', (e) => { scrollTo(sections[i], e) }, false);
}*/



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


