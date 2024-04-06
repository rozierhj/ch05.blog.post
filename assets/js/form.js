// code controls the light/dark mode styles of the homepage and blog page

//default page color style
const dark1 = 'white';
const dark2 = 'rgba(154, 205, 237, 1)';
const dark3 = 'rgba(60, 169, 237, 1)'; 
const dark4 = 'rgba(0, 85, 154, 1)';
const dark5 = 'rgba(0, 5, 54, 1)';

let statusjs = document.title;
//update the page style on load
    window.addEventListener('load', function(){

        if(localStorage.getItem('light') === undefined || localStorage.getItem('light') === null){
            localStorage.setItem('light', true);
    
            lightMode();
        }
        else if(this.localStorage.getItem('light') === 'true'){
            lightMode();
        }else{  
            darkMode();
        }
    });

//switch between light/dark mode when the lightbulb icon is pressed
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

//collection of style functions and the light-mode inputs
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
    let blogPageText = dark5;
    let blogPostBackground = dark3;
    let blogPostText = dark1;
    let blogPostBorder = dark5;

    let lightBulb = document.getElementById('light-bulb');
        lightBulb.style.color = 'yellow';
    let page = document.getElementsByTagName('body');
    page[0].style.backgroundColor = dark1;

        headerFooter(headerFooterBackground,h1Text,pageBorders);
        blogPosts(blogPostBackground,blogPostBorder,blogPostText);

      if(statusjs === 'Homepage'){

        setClassSide(pageBackground,pageText,formTitle,pageBorders);
        setForm(formBackground,formText,submitText,submitButton,submitBorder);
      }
      if(statusjs === 'Blog Posts'){
        blogBackground(pageBackground,pageBorders,blogPageText);
      }

}
//collection of style function and their dark-mode inputs
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
    let blogPageText = dark2;
    let blogPostBackground = dark1;
    let blogPostText = dark5;
    let blogPostBorder = dark5;

    let lightBulb = document.getElementById('light-bulb');
    lightBulb.style.color = '#ccc';
    let page = document.getElementsByTagName('body');
    page[0].style.backgroundColor = dark5;
        headerFooter(headerFooterBackground,h1Text,pageBorders);
        blogPosts(blogPostBackground,blogPostBorder,blogPostText);
        if(statusjs === 'Homepage'){
            setClassSide(pageBackground,pageText,formTitle,pageBorders);
            setForm(formBackground,formText,submitText,submitButton,submitBorder);
        }
        if(statusjs === 'Blog Posts'){
            blogBackground(pageBackground,pageBorders,blogPageText);
          }
        
}
//styling the main page of the homepage
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
    topBorder[0].style.borderColor = borders;



}
//styling the input form on the homepage
function setForm(background, text, submitText, submitBackground, submitBorder){

    let inputField = document.getElementsByTagName('input');
    console.log(inputField);
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
//styling the header footers on the homepage and blog page
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
            color: text,
            borderColor:borders
        });
    
}
//styling the main page of the blog page
function blogBackground(background, borders, text){

    let blogFooter = document.getElementsByTagName('footer');
    blogFooter[0].style.borderColor = borders;
    let list = blogFooter[0].getElementsByTagName('li');
        for(let i = 0; i < list.length; i++){
            Object.assign(list[i].style,{
               color:text,
            });
        }
        let bottomMessage = document.getElementById('bottom-message');
        bottomMessage.style.color = text;
        let heart = bottomMessage.getElementsByTagName('i');
        heart[0].style.color = 'red';
        let mainPage = document.getElementsByTagName('main');
        console.log(mainPage);
        mainPage[0].style.backgroundColor =background;
        mainPage[0].style.borderColor = borders;    
    let backButton = document.getElementById('back-button');
        Object.assign(backButton.style,{
            backgroundColor:background,
            color:text
        });
    let backArrow = backButton.getElementsByTagName('i');
    backArrow[0].style.color = borders;
}
//styling the individual blog div elements
function blogPosts(background, borders, text){

    let posts = document.getElementsByClassName('blog-post');
        for(let i = 0; i < posts.length; i++){
            Object.assign(posts[i].style,{
                backgroundColor:background,
                color:text,
                borderColor:borders
            });
        }

}
    

