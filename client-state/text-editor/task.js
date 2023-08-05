let input = document.querySelector('#editor');
window.onload = function() {
    let inputedText = localStorage.getItem('text');
    input.textContent = inputedText;
}
input.insertAdjacentHTML('afterend', '<button type="button" class= "clear" id="clear">Очистить содержимое</button>');

let button = document.getElementById('clear');
button.addEventListener('click', e => {
    input.value = '';    
    e.preventDefault();
});

input.addEventListener('input', e => {
    localStorage.setItem('text', `${e.target.value}`);
});
 
