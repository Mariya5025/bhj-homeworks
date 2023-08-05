let welcome = document.querySelector('#welcome');
window.onload = function() {
    if(localStorage.getItem('user_id')) {
        let id = document.querySelector('#user_id');
        id.textContent = localStorage.getItem('user_id');       
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
        welcome.insertAdjacentHTML('afterend', '<button class="btn" id="signout__btn">Выйти</button>');
        let signoutButton = document.querySelector('#signout__btn');
        signoutButton.addEventListener('click', e => {
            e.preventDefault();
            localStorage.clear();
            location.reload();     
        })
}}

let signin = document.querySelector('#signin');
signin.classList.add('signin_active');

let login = Array.from(document.getElementsByName('login'))[0];
let password = Array.from(document.getElementsByName('password'))[0];
let button = document.querySelector('#signin__btn');


button.addEventListener('click', e => {    
    e.preventDefault();
    let form = document.querySelector('#signin__form');
    let formData = new FormData(form);    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(JSON.parse(xhr.responseText).success === false) {
                alert('Неверный логин/пароль');
                login.value = '';
                password.value = '';
                return false;
            } else {           
                localStorage.setItem('user_id', `${JSON.parse(xhr.responseText).user_id}`);  
                welcome.textContent = `Добро пожаловать, пользователь ${login.value} #${JSON.parse(xhr.responseText).user_id}`;                
                welcome.classList.add('welcome_active');
                button.remove();
                let buttonField = Array.from(document.querySelectorAll('.row'))[2];
                buttonField.insertAdjacentHTML('beforeend', '<button class="btn" id="signout__btn">Выйти</button>');
                let signoutButton = document.querySelector('#signout__btn');
                signoutButton.addEventListener('click', e => {
                    e.preventDefault();
                    localStorage.clear();
                    location.reload();                
                   
                })              

            }
        
        };
        };

})
