//1.  Select, Create, Adding Text Append
var ul = document.querySelector("ul"); //Select
var li = document.createElement("li"); //Create
li.innerText = "Yangon"; // Adding text
ul.append(li); // Append

/*
//2. Creating li elements
let ulEl = document.querySelector('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

li1.textContent = "List Item 1";
li2.textContent = "List Item 2";
li3.textContent = "List Item 3";

ulEl.appendChild(li1);
ulEl.appendChild(li2);
ulEl.appendChild(li3);

// Creating li elements with loop
let ulEl = document.querySelector('ul');
for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.setAttribute = ('id', `item${i+1}`);
    ulEl.appendChild(newLi);
    newLi.innerText = `List Item ${i+1}`;
};
*/

/*
//3. Style Adding
//#A: Individual Styling
let li1 = document.getElementById("item1");
li1.style.color = "red";
li1.style.fontSize = "2.4rem";
li1.style.fontFamily = "tahoma";
li1.style.fontWeight = "300";
li1.style.boxShadow = "0 1px 2px black";
li1.style.margin = "10px 20px"

//#B: Create style tag and add it to head tag and apply 
let style = document.createElement('style');
style.innerHTML = `body {background-color: lightblue;}`;
document.head.appendChild(style);

// document.documentElement.style.setProperty('--main-color', '#951');
// style.innerHTML = 'body { background-color: var(--main-color); color: white;}';
//document.head.appendChild(style); // Injects the style into the document

//#C: if like h1, you cannot directly apply to style it
let h1 = document.getElementsByTagName('h1');
// h1.style.color = "red"; // because this is not a unique
for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = "red";
}
*/

/*
//4. Replacing an Element with Another
var ul = document.querySelector("ul");
let div = document.createElement("div");

// Move all existing <li> elements from the <ul> to the <div>
while (ul.firstChild) {
    div.appendChild(ul.firstChild);
}

// Copy all attributes from <ul class="listItems"> to <div class="listItems">
for (var i = 0; i < ul.attributes.length; i++) {
    var attr = ul.attributes[i];
    div.setAttribute(attr.name, attr.value);
}

// Replace the <ul> with the new <div> in the DOM
ul.parentNode.replaceChild(div, ul);
*/

/*
//5.  Adding ClassList 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", function () {
  btn1.classList.toggle("orange"); //add .orange{...} to css
});

btn2.addEventListener("click", function () {
  btn2.classList.toggle("blue");  //add .blue{...} to css
});

btn3.addEventListener("click", function () {
  btn3.classList.toggle("red");  //add .red{...} to css
});
*/

let ul = document.documentElement;
console.log(ul.nextElementSibling); //console.log(ul.parentelement.parentelement);
/*
// Traverse the DOM
    // Parent Node Traversal
        let ul = document.querySelector('ul');
        console.log(ul.parentNode);     //console.log(ul.parentNode.parentNode);
        console.log(ul.parentelement);  //console.log(ul.parentelement.parentelement);

        const html = document.documentElement;
        console.log(html);
        console.log(html.parentNode);
        console.log(html.parentElement);

    	Types of Nodes: There are different types of nodes in the DOM, including:
        •	Element Nodes: Represent HTML elements like <div>, <p>, etc.
        •	Text Nodes: Represent the text content inside an element.
        •	Attribute Nodes: Represent the attributes of an element like class, id, etc.
        •	Comment Nodes: Represent comments in the HTML code.
        •	Document Nodes: The root node that represents the entire document.
    
    // Child Node Traversal
        let ul = document.querySelector('ul');
        console.log(ul.childNodes);
        console.log(ul.firstChild);
        console.log(ul.lastChild);

        ul.childNodes[1].style.backgroundColor = '#333';

        console.log(ul.children); //show html
        console.log(ul.firstElementChild);
        console.log(ul.lastElementChild);

    // Sibling Node Traversal
        let ul = document.querySelector('ul');
        const div = document.querySelector('div');
        console.log(div.childNodes)

        console.log(ul);
        console.log(ul.previousSibling);
        console.log(ul.nextSibling);

        console.log(ul.previousElementSibling);
        console.log(ul.nextElementSibling);

        
•	DOM Manipulation: 
JavaScript-က HTML ဖိုင်ကို ချယ်လှယ်လို့ရတယ်၊ ဒါပေမဲ မူရင်း HTML ကို လုံးဝပြောင်းလဲလိုက်တာမဟုတ်ပါဘူး။ ချယ်လှယ်လိုက်တာပါ။
ဥပမာ remove, change, replace လုပ်တာမျိုးပါ

//01: selectElements 
    getElementById()        //const title = document.getElementById('my-id'); //console.log(title)
    getElementsByClass()     //const heading = document.getElementsByClassName('my-class'); //console.log(heading)
    getElementByTagName()   //const h1 = document.getElementByTagName('h1'); //console.log(h1)
    querySelector()         //const container = document.querySelector('.container'); //console.log(container)
    querySelectorAll()      //const div = document.querySelectorAll('div'); //console.log(div)

//02: gettingContents
    const firstLi = document.querySelector('.list-items');
    console.log(firstLi.innerText);
    console.log(firstLi.textContent);
    console.log(firstLi.innerHTML);



//03: creatingElements
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    ul.append(li)
    li.innerText = 'Hello';
    li.setAttribute('id', 'list-items');
    let div = document.createElement('div');
    div.append(li);
    ul.innerHTML = div.innerHTML;

//04: modifyingContents
    const ul = document.querySelector('ul');
    const li = document.querySelector('li');
    ul.append(li);
    li.innerText = 'Hello';



//05: modifying Attributes & Classes
    li.setAttribute('id', 'list-items');
    li.removeAttribute('id');

    const title = document.querySelector('#main-heading');
    console.log(title.getAttribute('id'));

    li.classList.add('list-items');
    li.classList.remove('list-items');
    console.log(li.classList.conains('list-items')); //true or false

1. Removing HTML Elements

JavaScript can remove elements from the DOM.

var element = document.querySelector('section');
element.remove(); // Removes the <section> element from the DOM

2. Changing the Tag of an Element

While JavaScript cannot directly change an element’s tag name, you can achieve the same effect by creating a new element with the desired tag and then replacing the old element.

var oldElement = document.querySelector('section');

// Create a new element (e.g., a <div>)
var newElement = document.createElement('div');

// Copy attributes and content from the old element to the new one
newElement.innerHTML = oldElement.innerHTML;
for (var i = 0; i < oldElement.attributes.length; i++) {
  var attr = oldElement.attributes[i];
  newElement.setAttribute(attr.name, attr.value);
}

// Replace the old element with the new one
oldElement.parentNode.replaceChild(newElement, oldElement);

In this example:

	•	We select the <section> element.
	•	We create a new <div> element.
	•	We copy the content and attributes from the <section> to the new <div>.
	•	Finally, we replace the old <section> with the new <div>.

3. Replacing an Element with Another

You can also replace an entire element with another one.

var newElement = document.createElement('article');
newElement.textContent = 'This is a new article element';

var oldElement = document.querySelector('section');
oldElement.parentNode.replaceChild(newElement, oldElement); // Replaces <section> with <article>

4. Adding or Modifying Elements

JavaScript allows you to add or modify existing elements.

Summary

	•	Removing: Use .remove() to delete an element from the DOM.
	•	Changing/Replacing: Use replaceChild() after creating a new element to change an existing tag.
	•	Adding/Modifying: Use methods like innerHTML, appendChild, or insertAdjacentHTML to add or modify elements.

// Manipulate CSS
1.	Inline Styles:
JavaScript can directly manipulate an element’s inline styles by accessing the style property of a DOM element.

var element = document.getElementById('example');
element.style.color = 'blue'; // Changes the text color to blue
element.style.fontSize = '20px'; // Changes the font size to 20px

This modifies the CSS directly applied to that specific element, without altering the external CSS file.

2.	CSS Classes:
JavaScript can add, remove, or toggle CSS classes to apply different styles defined in an external CSS file.

var element = document.getElementById('example');
element.classList.add('highlight'); // Adds the 'highlight' class
element.classList.remove('highlight'); // Removes the 'highlight' class
element.classList.toggle('highlight'); // Toggles the 'highlight' class on and off

This method leverages the styles defined in your external CSS file by dynamically adding or removing classes from elements.

3.	Manipulating <style> Elements:
JavaScript can dynamically create or modify <style> elements within the HTML document to inject or alter CSS rules.

var style = document.createElement('style');
style.innerHTML = 'body { background-color: lightblue; }';
document.head.appendChild(style); // Injects the style into the document

This effectively creates new CSS rules or overrides existing ones in the document.

4.	CSS Variables (Custom Properties):
JavaScript can interact with CSS variables (custom properties) to dynamically change styles.

document.documentElement.style.setProperty('--main-color', 'green');

Summary

	•	DOM: JavaScript manipulates the HTML document structure.
	•	CSS: JavaScript can manipulate the styles applied to elements, either through inline styles, classes, or dynamically injected CSS rules, but it cannot directly edit the external CSS files.
	•	Best Practices: Use JavaScript to dynamically change styles when necessary, but rely on CSS classes and external stylesheets for maintaining clean and maintainable code.
*/
