<!-- Markdown content with HTML for Font Awesome icon -->

# <i class="fa-solid fa-book-open-reader lesson-icon"></i> <span id="lesson">&ensp;Lesson 1:</span> <span id="title">HTML-CSS-Git</span>

 <br>
 <div style="display: flex">
    <img class="logo" src="./assets/images/plant.png" alt="HTML">
    <span class="text">Lesson:1 မှာ HTML, CSS နဲ့ Git အခြေခံအကြောင်းတွေကို ရှင်းပြပေးသွားမှာဖြစ်ပါတယ်။</span>
</div><br>

- အသုံးပြုမယ့် Tools များ
  - Google Chrome
  - VS Code
  - Git
  - GitHub

---

<br>
<div class="panna">
    <i class="fa-brands fa-html5 college html5">
    </i>
</div>

<br>

- Semantic Html
- Attributes
- Pseudo Elements / Pseudo Class
- Descriptive namings / headings
- Comments

---

<br>
<div class="panna">
    <i class="fa-brands fa-css3-alt college css3"></i>
</div>

<br>

- CSS Selector
- Box-Model
- CSS Position and float
- Media Query
- Comments

---

<br>
<div class="panna">
    <i class="fa-brands fa-git-alt college git"></i>
</div>

<br>

- Git Installation
- Making Default Branch
- Create User Name and Email
- Create .ssh key
- Git Workflow

---

<br>
<div class="panna">
    <i class="fa-brands fa-github college github"></i>
</div>

<br>

- Open GitHub Account
- Add New SSH Key
- Create New Repo
- Create New Issue
- Live GitHub Pages

---

<br>
<div class="note-box">
      <p class="border-left">
        <i class="fa-solid fa-mug-saucer min"></i>
        <ul>
            <li>အထက်ပါ Tools တွေကိုအသုံးပြုပြီး My Biography Page ကို ရေးမှာပါ</li>
            <li>ကိုယ်တိုင်လိုက်ရေးဖို့ လိုအပ်ပါတယ်</li>
            <li>Web Site တည်ဆောက်ရေးမှာ သိထားရမယ့်အချက်တွေကို ပြောပြသွားမှာပါ</li>
            <li>သင့်ဘဝမှာ အရေးအကြီးဆုံးအချက်အလက်တွေထဲက အခု သင်ယူမယ့် Software code တွေရေးခြင်းဟာလဲ ပါဝင်နေဖို့ လိုပါတယ်</li>
            <li>တစ်ရက်မှာ အနည်းဆုံး ၄-နာရီ လေ့ကျင့်မယ်ဆိုရင် သုံးလအတွင်းမှာ အောင်မြင်မူရလာဒ်တစ်ခုကို မြင်တွေ့ရမှာပါ</li>
        </ul>
      </p>
</div>
<br><br>

| Front-End      | Examples |
| ----------- | ----------- |
| HTML      | `<html></html>` |
| CSS   |   `* { }, :root { }`  |
|         | <ul><li>CSS Selector</li><li>Flex Layout</li><li>Grid Layout</li></ul> |
| JavaScript | `console.log("Hello")` |
| Git   |   `git --version` |
| GitHub    |   <ul><li>GitHub Account</li><li>SSH Key</li><li>GitHub Pages</li></ul> |

<br><br>

<footer>
    <span>Make with <i class="fa-solid fa-heart" style="color: maroon"></i></span><span>By</span>
    <img class="logo" src="./assets/images/logo.png" alt="HTML">
    <time>July 12, 2024</time>
</footer>

<!-- CSS Codes -->
<!-- Include this in the HTML head section of your Markdown renderer or HTML template -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<style>
    .lesson-icon {
        color: green;
        border: 1px double orange;
        border-radius: 50%;
        padding: 7px;
        background-color: orange;
    }
    #lesson {
        color: green;
    }
    #title {
        color: orange;
    }
    .logo {
        width: 32px; height: 32px;border-radius: 15%; border: none; padding: 5px; box-shadow: 1px 2px 4px #777
    }
    .title-logo {
        width: 32px; height: 32px; border-radius: 0 10px; border: none; padding: 3px; box-shadow: 3px 3px 5px #777; background: yellowgreen;
    }
    .text {
        margin-left: 14px;
        color: green;
        font-weight: 600;
    }

    .note-box {
        padding: 7px;
        color: rgb(13, 34, 91);
        line-height: 1.7;
        border-radius: 7px;
        margin-left: 22px;
        box-shadow: 1px 2px 4px #777;
    }
    .border-left {
        position: relative;
        padding-left: 15px;
        display: flex;
        align-items: center;
        font-family: Arial, sans-serif;
    }
    .min {
        color: brown;
        font-size: 25px;
        position: absolute;
        top: 1%;
        left: -23px;
    }
    .college {
        font-size: 40px;
    }
    .html5 {
        color: maroon;
        &:before {
            box-shadow: 0px 2px 4px #777;
            border-radius: 5px;
            padding: 5px;
        }
        &:after {
            content: "HTML5";
            color: maroon;
            font-size: 20px;
            padding-left: 10px;
        }
    }
    .css3 {
        color: orange;
        &:before {
            box-shadow: 0px 2px 4px #777;
            border-radius: 5px;
            padding: 5px;
        }
        &:after {
            content: "CSS3";
            color: orange;
            font-size: 20px;
            padding-left: 10px;
        }
    }
    .git {
        color: red;
        &:before {
            box-shadow: 0px 2px 4px #777;
            border-radius: 5px;
            padding: 5px;
        }
        &:after {
            content: "Git";
            color: red;
            font-size: 20px;
            padding-left: 10px;
        }
    }
    .github {
        color: purple;
        &:before {
            box-shadow: 0px 2px 4px #777;
            border-radius: 5px;
            padding: 5px;
        }
        &:after {
            content: "GitHub";
            color: purple;
            font-size: 20px;
            padding-left: 10px;
        }
    }
    .panna {
        font-weight: 500;
        letter-spacing: 0.15rem;
        font-family: "Apple Chancery, Lucida Handwriting, Brush Script MT, Brush Script Std, Lucida Calligraphy, cursive";
        font-size: 17px;
    }

    footer {
        display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto; text-align: center; font-family: cursive; color: green; border: 1px solid; padding: 10px; border-radius: 10px; box-shadow: 1px 2px 4px #777"
    }
</style>
