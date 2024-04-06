
const submitButton = document.getElementById('submit-button');

// Listen for the fors submit button to be clicked. put data in local storage if it has been and take user to the blog page
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

//listen for the clear local storage button to be clicked and clear the local storage if it is clicked
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function(){
    localStorage.clear();
    console.log('Cleared Local Storage');
    alert('local storage clear');
});
let circle = document.getElementById('circle');
let height = circle.offsetHeight;
console.log(circle);
circle.style.width = height;

console.log(window.screen.height);
