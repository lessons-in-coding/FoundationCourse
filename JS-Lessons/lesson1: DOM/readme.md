|-DOCTYPE, html
|-HTML lang-"en-US"
    |    |-HEAD
    |    |-#text
    |    |-META charset-"utf-8"
    |    |-#text
    |    |-TITLE
    |    |   |-#text: Simple DOM
    |    |-#text
    |    |-LINK rel-"stylesheet" href-"style.css"
    |    |-#text
    |-#text
    |-BODY
        |-#text
        |-SECTION
        |   |-#text
        |   |-IMG src-"cat.png" alt-"A cat 'MeMe'"
        |   |-#text
        |   |-P
        |   |-#text: Here we will add a link
        |   |-A href-"https://www.google.com"
        |   |   |-#text: Google Website
        |   |-#text
        |-#text
        |-SCRIPT src-"script.js"
        |-#text








<!-- 

DOM Manipulation 1
    //01: selectElements 
    getElementById()        //const title = document.getElementById('my-id'); //console.log(title)
    getElementByClass()     //const heading = document.getElementByClassName('my-class'); //console.log(heading)
    getElementByTagName()   //const h1 = document.getElementByTagName('h1'); //console.log(h1)
    querySelector()         //const container = document.querySelector('.container'); //console.log(container)
    querySelectorAll()      //const div = document.querySelectorAll('div'); //console.log(div)

    //02: stylingElements
    const container = document.querySelector('.container'); //console.log(container)
    container.style.color = 'red'

    const listItems = document.querySelectorAll('list-items'); //console.log(listItems)
    container.style.fontSize = '2rem';
    for(i=0; i<listItems.length; i++){
        listItems[i].style.fontSize = '2rem'
    }

    //03: creatingElements
    const ul = document.querySelector('ul');
    const li = document.querySelector('li');
    ul.append(li)

    //04: gettingContents
    const firstLi = document.querySelector('.list-items');
    console.log(firstLi.innerText);
    console.log(firstLi.textContent);
    console.log(firstLi.innerHTML);

    //05: modifyingContents
    const ul = document.querySelector('ul');
    const li = document.querySelector('li');
    ul.append(li);
    li.innerText = 'Hello';

    //06: modifying Attributes & Classes
    li.setAttribute('id', 'list-items');
    li.removeAttribute('id');

    const title = document.querySelector('#main-heading');
    console.log(title.getAttribute('id'));

    li.classList.add('list-items');
    li.classList.remove('list-items');
    console.log(li.classList.conains('list-items')); //true or false

    //07: removeElements
    li.remove();


    DOM Manipulation 2
    <html>
        <body>
            <div>
                <h1></h1>
                <ul>
                    <li>Yangon</li>
                </ul>
            </div>
        </body>
    </html>
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
 
-->