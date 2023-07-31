'use strict';

const textEditor = document.getElementById('editor')

// text input
document.getElementById('editor').oninput = function (event) {
    localStorage.textEditor ? localStorage.textEditor = JSON.stringify(event.target.value) : localStorage.setItem('textEditor', JSON.stringify(event.target.value));
};

// clear button
document.querySelector('div.text__clear').onclick = function () {
    localStorage.textEditor ? localStorage.removeItem('textEditor') : false;
    textEditor.value = '';
};

// load from start
localStorage.textEditor ? textEditor.value = JSON.parse(localStorage.textEditor) : false;
