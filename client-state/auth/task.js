 'use strict';

const formHTML = document.getElementById('signin');
formHTML.classList.add('signin_active');
let loginValue = document.getElementsByName('login')[0];
let passwordValue = document.getElementsByName('password')[0];

function clearFormData() {
    loginValue.value = '';
    passwordValue.value = '';
};

function formsChangeAuth(userID) {
    formHTML.classList.toggle('signin_active');
    document.getElementById('user_id').innerText = userID;
    document.getElementById('welcome').classList.toggle('welcome_active');
};

document.getElementById('signin__btn').onclick = function(event) {
    if (loginValue.value && passwordValue.value) {
        let formData = new FormData(document.getElementById('signin__form'));
        const postRequest = new XMLHttpRequest();
        postRequest.open("POST", 'https://netology-slow-rest.herokuapp.com/auth.php', true);
        postRequest.onreadystatechange = function() {
            if (postRequest.status == 200 && postRequest.readyState == 4) {
                let response = JSON.parse(postRequest.response);
                if (response['success'] == false) {
                    alert('Неверный логин или пароль!');
                } else {
                    formsChangeAuth(response['user_id']);
                    localStorage.setItem('authString', JSON.stringify(response));
                };
            };
        };
        postRequest.send(formData);
        clearFormData();
    } else {
        alert('Введите имя и пароль пожалуйста!');
        clearFormData();
    };
    return false;
};

document.getElementById('unsignin__btn').onclick = function (event) {
    formsChangeAuth('');
    localStorage.removeItem('authString');
};

function renderPage() {
    if (localStorage['authString']) {
        formsChangeAuth(JSON.parse(localStorage['authString'])['user_id']);
        clearFormData();
    };
};

renderPage();
