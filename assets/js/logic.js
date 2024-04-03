const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click',function(event){
    event.preventDefault();

    const  post = {
       userName: document.getElementById('username').value,
       title: document.getElementById('title').value,
       content: document.getElementById('content').value
    };
    console.log(document.getElementById('username').value);

    let suffix = localStorage.length;
    let storageId = 'post'+suffix;
    localStorage.setItem(String(storageId), JSON.stringify(post));

    if(localStorage.getItem('light') === undefined || localStorage.getItem('light') === null){
        localStorage.setItem('light', true);;
    }
    window.location.href='blog.html';

});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function(){
    localStorage.clear();
    console.log('Cleared Local Storage');
    alert('local storage clear');
});