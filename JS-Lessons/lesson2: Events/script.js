// Events - the click event is triggered when the button is clicked, and an alert is shown.
  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
  });

    //Event Propagation-ဆိုတာ HTML-ရဲ့ DOM-စနစ်တွင်းမှာ click-စတဲ့ action-တစ်ခုခုလုပ်လိုက်ယင် အထက်ကနေအောက် အောက်ကနေအထက် အလုပ်လုပ်ပုံကို ပြတဲ့စနစ်ပါ။ မိမိက မပါဝင်စေချင်တဲ့နေရာကို stopPropagation()-နဲ့ ပိတ်ထားလို့ရပါတယ်။

    //Event Capturing - document ကနေ target-ထိ ရောက်သွားတာ (အပေါ်ဆုံးမှ အောက်ဆုံးသို့)
    window.addEventListener('click', function(){console.log('Window')}, true);
    document.addEventListener('click', function(){console.log('Document')}, true);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, true);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, true);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, true); 
    //console.log(e.target) (e.target.innerText = 'Clicked!')

    //Event Bubbling - target ကနေ document-ထိ ပြန်ရောက်သွားတာ (အောက်ဆုံးမှ အပေါ်ဆုံးသို့)
    window.addEventListener('click', function(){console.log('Window')}, false);
    document.addEventListener('click', function(){console.log('Document')}, false);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, false);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, false);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, false); //console.log(e.target) (e.target.innerText = 'Clicked!')

    //stop propagation at div2
    window.addEventListener('click', function(){console.log('Window')}, true);
    document.addEventListener('click', function(){console.log('Document')}, true);
    document.querySelector('.div2').addEventListener('click', function(e){e.stopPropagation(), console.log('Div2')}, true);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, true);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, true); //console.log(e.target) (e.target.innerText = 'Clicked!')

    //Once: true
    window.addEventListener('click', function(){console.log('Window')}, false);
    document.addEventListener('click', function(){console.log('Document')}, false);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, {once: true});
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, false);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, false); //console.log(e.target) (e.target.innerText = 'Clicked!')

    //Event Delegation - 
    document.querySelector('.bullets').addEventListener('click', function(){
        document.body.style.backgroundColor = 'lightgrey';
        document.getElementById('content').style.backgroundColor = 'lightblue';
        document.querySelector('#h1').style.color = 'red';
        document.querySelector('.lists').style.color = 'green';
        console.log('Clicked!');
    });
    
    // သားသမီးတွေက အလုပ်ကိုယ်စီလုပ်ကြတယ်
    document.getElementById("b1").addEventListener("click", function (e) {
        e.target.classList.toggle("red");
        console.log("First Item Clicked!")
    });
    document.getElementById("b2").addEventListener("click", function (e) {
        e.target.classList.toggle("blue");
        console.log("Second Item Clicked!")
    });
    document.getElementById("b3").addEventListener("click", function (e) {
        e.target.classList.toggle("green");
        console.log("Third Item Clicked!")
    });
    document.getElementById("b4").addEventListener("click", function (e) {
        e.target.classList.toggle("orange");
        console.log("Last Item Clicked!")
    });


    //on one line of code မိဘတစ်ဦးတည်းက အလုပ်ကိုခိုင်းထားတယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        e.target.classList.toggle('red');
        console.log("Clicked! " + e.target.innerHTML)
        console.log(e.target)
    })

    // မိဘတွေကလဲအလုပ်လုပ်တယ် သားသမီးတစ်ယောက်က သီးခြားအလုပ်လုပ်တယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        e.target.classList.toggle('red'); //.red css
    })

    document.getElementById('b4').addEventListener('click', function(e){
        e.target.classList.toggle('bgColor')
        //e.stopPropagation(); //this can prevent the parent event
    })

    // လိုချင်တဲ့အရာတစ်ခုတည်းကိုလည်း ပြုလုပ်လို့ရတယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        if(e.target.getAttribute('id') === 'b4'){
            e.target.classList.toggle('red'); //.red css
        }
    })

    //Some more way to do
    //#b4 is targeted
    document.querySelector('#b4').addEventListener('click', function(e){
        console.log('#b4 clicked!');
        const target = e.target;
        // if(target.matches('li')){target.classList.add('blue')}
        if(target.matches('li')){target.style.color = 'orange'}
    })

    //.bullets is targeted
    document.querySelector('.bullets').addEventListener('click', function(e){
        console.log(e.target.getAttribute('id') + ' is clicked!')
        const target = e.target;
        if(target.matches('li')){target.style.color = 'orange'}
        // if(target.matches('li')){target.classList.add('blue')}
    })

    const lists = document.querySelector('.lists');
    const newList = document.createElement('li');
    newList.innerText = 'New York';
    newList.setAttribute('id', 'b5');
    lists.appendChild(newList);

/*
    // Event Propagations
    //1: Event Capturing + Target (',true' indicates capturing phase)
    Event capturing (also known as “trickling”) is the first phase of the event propagation process. In this phase, the event starts from the outermost element and works its way down to the target element.

    window.addEventListener('click', function(){console.log('Window')}, true);
    document.addEventListener('click', function(){console.log('Document')}, true);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, true);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, true);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, true); 
    //console.log(e.target) (e.target.innerText = 'Clicked!')

    //One more example
    function applyColor() {
            document.querySelectorAll('*').forEach(el => el.classList.add('red'));
        }

    document.getElementById("outerDiv").addEventListener("click", function() {
    applyColor();
    alert("Outer DIV clicked (capturing phase)!");
  }, true);

  document.getElementById("myButton").addEventListener("click", function() {
  document.body.style.backgroundColor = 'lightblue';
    alert("Button clicked!");
  }, true);

  =====================================================
    
    //2: Event Bubbling + Target (',false' is given)
    Event bubbling is the second phase of event propagation. In this phase, the event starts from the target element and bubbles up through the DOM hierarchy to the outermost elements.

    window.addEventListener('click', function(){console.log('Window')}, false);
    document.addEventListener('click', function(){console.log('Document')}, false);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, false);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, false);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, false); //console.log(e.target) (e.target.innerText = 'Clicked!')

    // One more example
    function applyColor() {
            document.querySelectorAll('*').forEach(el => el.classList.add('red'));
        }

    document.getElementById("outerDiv").addEventListener("click", function() {
    appleColor();
    alert("Outer DIV clicked (bubbling phase)!");
  });

  document.getElementById("myButton").addEventListener("click", function() {
  document.body.style.backgroundColor = 'lightblue';
    alert("Button clicked!");
  });

    In this example, when you click the button, the click event first triggers on the button and then bubbles up to the outerDiv.

    =======================================================

    /*
    // 3: Event Delegation
    Event delegation is a technique where you add a single event listener to a parent element to manage events triggered by its children. Instead of attaching an event listener to every child element, you use the event listener on a common ancestor to handle all the events.

    document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      alert(event.target.innerText + " clicked!");
    }
  });

  In this example, instead of attaching a click event listener to each <li>, we attach it to the <ul> and use event.target to determine which <li> was clicked.

    •	HTML: The tag names can be written in either uppercase or lowercase.
    JavaScript: When you use event.target.tagName to get the tag name, it always returns the name in uppercase.
    element.tagName; // returns 'LI'

    If you want to compare it case-insensitively, you could convert it to lowercase like this:
    if (event.target.tagName.toLowerCase() === "li") {
  alert(event.target.innerText + " clicked!");
    }

    //One more example

    // Event Delegation
    // It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
    <ul id="sports">
        <li id="football">Football</li>
        <li id="basketball">Basketball</li>
        <li id="boxing">Boxing</li>
        <li id="tennis">Tennis</li>
        <li id="golf">Golf</li>
    </ul>

    document.querySelector('#football').addEventListener('click', function(e){
        console.log('football is clicked!');
        const target = e.target;
        if(target.matches('li')){target.style.color = 'orange'}
    })

    document.querySelector('#sports').addEventListener('click', function(e){
        console.log(e.target.getAttribute('id') + ' is clicked!')
        const target = e.target;
        if(target.matches('li')){target.style.color = 'orange'}
    })

    const sports = document.querySelector('#sports');
    const newSport = document.createElement('li');
    newSport.innerText = 'Rugby';
    newSport.setAttribute('id', 'rugby');
    sports.appendChild(newSport);

===========================================================
    
    //4. Event Propagation

    Event propagation is the process by which an event travels through the DOM tree. It includes both the capturing and bubbling phases.

    Stopping Propagation:
    Sometimes, you may want to stop an event from propagating further up or down the DOM tree. This can be done using the stopPropagation() method.

    document.getElementById("outerDiv").addEventListener("click", function() {
    alert("Outer DIV clicked!");
  });

  document.getElementById("myButton").addEventListener("click", function(event) {
    alert("Button clicked!");
    event.stopPropagation(); // Prevents the event from bubbling up to the outer DIV
    console.log('Button clicked, propagation stopped');
  });

  In this example, when you click the button, only the button’s click event is triggered, and the event does not bubble up to the outerDiv.

    //stop propagation at div2
    window.addEventListener('click', function(){console.log('Window')}, true);
    document.addEventListener('click', function(){console.log('Document')}, true);
    document.querySelector('.div2').addEventListener('click', function(e){e.stopPropagation(), console.log('Div2')}, true);
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, true);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, true); //console.log(e.target) (e.target.innerText = 'Clicked!')

============================================================

    //Once: true
    window.addEventListener('click', function(){console.log('Window')}, false);
    document.addEventListener('click', function(){console.log('Document')}, false);
    document.querySelector('.div2').addEventListener('click', function(){console.log('Div2')}, {once: true});
    document.querySelector('.div1').addEventListener('click', function(){console.log('Div1')}, false);
    document.querySelector('button').addEventListener('click', function(e){console.log(e)}, false); //console.log(e.target) (e.target.innerText = 'Clicked!')
    
    //One more example
    document.getElementById('myButton').addEventListener('click', function() {
  document.body.style.color = 'red';
    }, { once: true });

    In this example, clicking the button will apply the color only the first time. Subsequent clicks won’t trigger the event listener again.
    */

/*
    <div id="content">
        <h1>Event Delegation</h1>
        <div class="bullets">
            <ul>
                <li id="b1">Lorem ipsum dolor sit amet.</li>
                <li id="b2">Lorem ipsum dolor sit amet.</li>
                <li id="b3">Lorem ipsum dolor sit amet.</li>
                <li id="b4">Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
    </div>
    <!-- 
    https://youtu.be/6NMSCh3DJug?si=KjBBNfKFCR8GIaKR
    
    // သားသမီးတွေက အလုပ်ကိုယ်စီလုပ်ကြတယ်
    document.getElementById("b1").addEventListener("click", function (e) {
        e.target.classList.toggle("red");
        console.log("First Item Clicked!")
    });
    document.getElementById("b2").addEventListener("click", function (e) {
        e.target.classList.toggle("blue");
        console.log("Second Item Clicked!")
    });
    document.getElementById("b3").addEventListener("click", function (e) {
        e.target.classList.toggle("green");
        console.log("Third Item Clicked!")
    });
    document.getElementById("b4").addEventListener("click", function (e) {
        e.target.classList.toggle("orange");
        console.log("Last Item Clicked!")
    });


    //on one line of code မိဘတစ်ဦးတည်းက အလုပ်ကိုခိုင်းထားတယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        e.target.classList.toggle('red');
        console.log("Clicked! " + e.target.innerHTML)
        console.log(e.target)
    })

    // မိဘတွေကလဲအလုပ်လုပ်တယ် သားသမီးတစ်ယောက်က သီးခြားအလုပ်လုပ်တယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        e.target.classList.toggle('red'); //.red css
    })

    document.getElementById('b4').addEventListener('click', function(e){
        e.target.classList.toggle('bgColor')
        //e.stopPropagation(); //this can prevent the parent event
    })

    // လိုချင်တဲ့အရာတစ်ခုတည်းကိုလည်း ပြုလုပ်လို့ရတယ်
    document.querySelector('.bullets').addEventListener('click', function(e){
        if(e.target.getAttribute('id') === 'b4'){
            e.target.classList.toggle('red'); //.red css
        }
    })
*/
