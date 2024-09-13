const title = document.getElementById('h1'); console.log(title)
/*
// သားသမီးတွေက အလုပ်ကိုယ်စီလုပ်ကြတယ်
// Adding event listeners to toggle the red class
document.getElementById('b1').addEventListener('click', function(e){
    e.target.classList.toggle('red');
});

document.getElementById('b2').addEventListener('click', function(e){
    e.target.classList.toggle('red');
});

document.getElementById('b3').addEventListener('click', function(e){
    e.target.classList.toggle('red');
});

document.getElementById('b4').addEventListener('click', function(e){
    e.target.classList.toggle('red');
});
*/

/*
//on one line of code မိဘတစ်ဦးတည်းက အလုပ်ကိုခိုင်းထားတယ်
document.querySelector('.bullets').addEventListener('click', function(e){
    e.target.classList.toggle('red');
})
*/


// မိဘတွေကလဲအလုပ်လုပ်တယ် သားသမီးတစ်ယောက်က သီးခြားအလုပ်လုပ်တယ်
document.querySelector('.bullets').addEventListener('click', function(e){
    e.target.classList.toggle('red'); //.red css
    console.log(e)
})

document.getElementById('b4').addEventListener('click', function(e){
    e.target.classList.toggle('large-font') //.large-font css
    e.stopPropagation(); //this can prevent the parent event
    console.log(e)
})


/*
// လိုချင်တဲ့အရာတစ်ခုတည်းကိုလည်း ပြုလုပ်လို့ရတယ်
document.querySelector('.bullets').addEventListener('click', function(e){
    if(e.target.getAttribute('id') === 'b4'){
        e.target.classList.toggle('red'); //.red css
    }
})
    */