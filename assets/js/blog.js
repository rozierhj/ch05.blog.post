const localItems = [];
// get all values from the local storage and put them into an array
for(let i=0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if(value !== 'INFO' && value !== null && key !== 'light')
        localItems.push(JSON.parse(value));
}
//Go through the array and create a div element for each local storage item related to the user inputs
//style the div element as a box and append it to the main page of the blog page
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
}
//listen for if the back button is clicked. if it is, take the user back to the homepage
const backButton = document.getElementById('back-button');
backButton.addEventListener('click',function(){

    window.location.href='index.html';

});
