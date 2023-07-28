 const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
        if(event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete;
        }
    };

    xhr.onloadend = function() {
    };

    xhr.send(new FormData(form));
})
