let x = document.querySelector("#generate");

x.addEventListener('click', function() {
    let pwAll = pw();

    let pwArea = document.querySelector('#password')
    pwArea.value = pwAll;
})


function pw() {
    let pwL = parseInt(prompt("Enter a password between 8-128"));

    if(isNaN(pwL) || pwL < 8 || pwL > 128){
        alert("သတ်မှတ်ထားတဲ့အတိုင်း ပြန်ထည့်ပါ၊ ဟင်း...");
        return "";
    }

    let uc = confirm("uc?");
    let lc = confirm("lc?");
    let num = confirm("num?");
    let spe = confirm("spe?");

    if(!uc && !lc && !num && !spe){
        alert("ကိုယ့်လူ မင်းရူးနေလား ပြန်စဥ်းစားလိုက်ဦး");
        return "";
    }

    let စာသား = ""; //ABCDxyzဏဠဃက
    if(uc){
        စာသား += "ABCD";
    }
    if(lc){
        စာသား += "xyz";
    }
    if(num){
        စာသား += "123";
    }
    if(spe){
        စာသား += "ဏဠဃက";
    }

    let pwD = ""; //ဏzABCDxy
    for(var i = 0; i < pwL; i++){//34 48 89 78 87 88 98
       let rni = Math.floor(Math.random() * စာသား.length); //8 = 0-7 
        pwD += စာသား.charAt(rni);
    }
    return pwD;
}