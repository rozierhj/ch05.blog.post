const localItems = [];
for(let i=0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if(value !== 'INFO' && value !== null && key !== 'light')
        localItems.push(JSON.parse(value));
}

for(let i = 0; i < localItems.length; i++){

    let container = document.createElement('div');
    container.classList.add('blog-post');
    const main = document.getElementById('main');
    main.appendChild(container);
    // let container = document.getElementById('username');

    let title = document.createElement('h1');
    title.textContent = localItems[i].title;
    container.appendChild(title);

    let content = document.createElement('p');
    content.textContent = localItems[i].content;
    container.appendChild(content);

    let username = document.createElement('h6');
    username.textContent = 'Posted by: '+ localItems[i].userName;
    container.append(username);
    // console.log(localItems[i].content);
    // console.log(localItems[i].title);
    // console.log(localItems[i].content);
}

const backButton = document.getElementById('back-button');
backButton.addEventListener('click',function(){

    window.location.href='index.html';

});

const lightbulb = document.getElementById('light-bulb');
lightbulb.addEventListener('click',function(){
    if(localStorage.getItem('light') === 'false'){
        localStorage.setItem('light','true');
    }else{
        localStorage.setItem('light','false');
    }
    let light = localStorage.getItem('light');
    lightMode(light);
});

function lightMode(isLight){
    let lightBulb = document.getElementById('light-bulb');

    if(isLight === 'false'){
        lightBulb.style.color = '#dae908';
        alert('lightbulb clicked');
        //light mode

    }else{
        alert('lightbulb clicked');
        lightBulb.style.color = '#ccc';
        //dark mode
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    // Store the user's preference in localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
  }
