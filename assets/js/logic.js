const dark1 = 'white';
const dark2 = 'rgba(154, 205, 237, 1)';
const dark3 = 'rgba(60, 169, 237, 1)'; 
const dark4 = 'rgba(0, 85, 154, 1)';
const dark5 = 'rgba(0, 5, 54, 1)';

const submitButton = document.getElementById('submit-button');

window.addEventListener('load', function(){

    // let light = document.getElementById('light-bulb');
    if(localStorage.getItem('light') === undefined || localStorage.getItem('light') === null){
        localStorage.setItem('light', false);
    }
    
    // light.style.color = '#ccc';
});

submitButton.addEventListener('click',function(event){
    event.preventDefault();

    const  post = {
       userName: document.getElementById('username').value,
       title: document.getElementById('title').value,
       content: document.getElementById('content').value
    };
    console.log(document.getElementById('username').value);

    if(post.userName == '' || post.title == '' || post.content == ''){
            alert('Please fill out the entire table before submitting');
    }else{
        let suffix = localStorage.length;
        let storageId = 'post'+suffix;
        localStorage.setItem(String(storageId), JSON.stringify(post));
        window.location.href='blog.html';
    }
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function(){
    localStorage.clear();
    console.log('Cleared Local Storage');
    alert('local storage clear');
});

const clickLight = document.getElementById('light-bulb');
clickLight.addEventListener('click',function(){

    let lightStatus = localStorage.getItem('light');
    if(lightStatus === 'true'){
        localStorage.setItem('light',false);
        darkMode();
        //set to dark mode
    }
    else{
        localStorage.setItem('light',true);
        lightMode();
        //set to light mode
    }

    // let page = document.getElementsByTagName('body');
    // page.style.backgroundColor = 'red';

});

function lightMode(){
    let lightBulb = document.getElementById('light-bulb');
        lightBulb.style.color = 'yellow';
        headerFooter(dark1,dark3,'green')
        setClassSide('blue', 'red', 'purple','pink');
        setForm(dark1,dark5,dark5,dark1,dark2);
}
function darkMode(){
    let lightBulb = document.getElementById('light-bulb');
    lightBulb.style.color = '#ccc';

        headerFooter(dark3,dark1,'red')
        setClassSide('red', 'blue', 'pink','purple');
        setForm(dark5,dark1,dark1,dark2,dark1);
}
function setClassSide(color, text, menuColor, colorBorder){
    let classSide = document.getElementsByClassName('side');

    for(let i = 0; i < classSide.length; i++){
        Object.assign(classSide[i].style,{
        backgroundColor: color    
    });
    }

    let circleText = document.querySelector('#circle h1');
    circleText.style.color = text;

    let menuTitle = document.querySelector('#menu h1');
    menuTitle.style.color = menuColor;

    let sideBorder = document.getElementById('center');
    sideBorder.style.borderLeftColor = colorBorder;
    sideBorder.style.borderRightColor = colorBorder;

    let topBorder = document.getElementsByTagName('main');
    topBorder[0].style.borderTopColor = colorBorder;



}
function setForm(background, text, submitText, submitColor, submitBorder){

    let inputField = document.getElementsByTagName('input');

    for(let i = 0; i < inputField.length; i++){
        Object.assign(inputField[i].style,{
            backgroundColor: background,
            color: text
        });
    }
    let inputLabel = document.getElementsByTagName('label');

    for(let i = 0; i < inputLabel.length; i++){
        Object.assign(inputLabel[i].style,{
            color: text
        });
    }

    let submit = document.getElementById('submit-button');
    submit.style.color = submitText;
    submit.style.backgroundColor = submitColor;
    submit.style.borderBottomColor = submitBorder;
}
function headerFooter(colorBackground, colorText, borderColor){
    let header = document.getElementsByTagName('header');

    Object.assign(header[0].style,{
        backgroundColor: colorBackground,
        color: colorText,
        borderBottomColor: borderColor
    });
    
    let footer = document.getElementsByTagName('footer');
        Object.assign(footer[0].style,{
            backgroundColor: colorBackground,
            color: colorText
        });
    
}