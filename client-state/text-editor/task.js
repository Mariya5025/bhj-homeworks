'use strict';

const textEditor = document.getElementById('editor')

 
document.getElementById('editor').oninput = function (event) {
    localStorage.textEditor ? localStorage.textEditor = JSON.stringify(event.target.value) : localStorage.setItem('textEditor', JSON.stringify(event.target.value));
};

 
document.querySelector('div.text__clear').onclick = function () {
    localStorage.textEditor ? localStorage.removeItem('textEditor') : false;
    textEditor.value = '';
};

 
