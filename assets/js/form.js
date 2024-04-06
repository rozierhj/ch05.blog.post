const dark1 = 'white';
const dark2 = 'rgba(154, 205, 237, 1)';
const dark3 = 'rgba(60, 169, 237, 1)'; 
const dark4 = 'rgba(0, 85, 154, 1)';
const dark5 = 'rgba(0, 5, 54, 1)';

window.addEventListener('load', function(){

    // let light = document.getElementById('light-bulb');
    if(localStorage.getItem('light') === undefined || localStorage.getItem('light') === null){
        localStorage.setItem('light', false);
        lightMode();
    }
    else if(this.localStorage.getItem('light') === 'true'){
        lightMode();
    }else{
        darkMode();
    }
    
    // light.style.color = '#ccc';
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
    let headerFooterBackground = dark3;
    let pageBorders = dark5;
    let h1Text = dark3;
    let pageBackground = dark2;
    let formTitle = dark5;
    let formText = dark5;
    let pageText = dark5;
    let formBackground = dark3;
    let submitButton = dark5;
    let submitText = dark2;
    let submitBorder = dark3;

    let lightBulb = document.getElementById('light-bulb');
        lightBulb.style.color = 'yellow';
        headerFooter(headerFooterBackground,h1Text,pageBorders);
        setClassSide(pageBackground,pageText,formTitle,pageBorders);
        setForm(formBackground,formText,submitText,submitButton,submitBorder);
}
function darkMode(){


    let headerFooterBackground = dark5;
    let pageBorders = dark2;
    let h1Text = dark5;
    let pageBackground = dark4;
    let formTitle = dark2;
    let formText = dark2;
    let pageText = dark5;
    let formBackground = dark5;
    let submitButton = dark3;
    let submitText = dark5;
    let submitBorder = dark2;

    let lightBulb = document.getElementById('light-bulb');
    lightBulb.style.color = '#ccc';
        headerFooter(headerFooterBackground,h1Text,pageBorders);
        setClassSide(pageBackground,pageText,formTitle,pageBorders);
        setForm(formBackground,formText,submitText,submitButton,submitBorder);
}
function setClassSide(background, text, formTitle, borders){
    let classSide = document.getElementsByClassName('side');

    for(let i = 0; i < classSide.length; i++){
        Object.assign(classSide[i].style,{
        backgroundColor: background   
    });
    }

    let circleText = document.querySelector('#circle h1');
    circleText.style.color = text;

    let menuTitle = document.querySelector('#menu h1');
    menuTitle.style.color = formTitle;

    let sideBorder = document.getElementById('center');
    sideBorder.style.borderLeftColor = borders;
    sideBorder.style.borderRightColor = borders;

    let topBorder = document.getElementsByTagName('main');
    topBorder[0].style.borderTopColor = borders;



}
function setForm(background, text, submitText, submitBackground, submitBorder){

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
    submit.style.backgroundColor = submitBackground;
    submit.style.borderBottomColor = submitBorder;
}
function headerFooter(background, text, borders){
    
    let header = document.getElementsByTagName('header');
        Object.assign(header[0].style,{
            backgroundColor: background,
            color: text,
            borderBottomColor: borders
    });
    
    let footer = document.getElementsByTagName('footer');
        Object.assign(footer[0].style,{
            backgroundColor: background,
            color: text
        });
    
}