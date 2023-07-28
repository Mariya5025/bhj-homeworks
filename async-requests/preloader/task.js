const poolAnswers = document.getElementById('poll__answers');

 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('load', function() {
    if(xhr.readyState === xhr.DONE) {
        // Если запрос завершился ошибкой 400+
        if(xhr.status >= 400) {
            setTimeout(() => {
                return alert('Ошибка загрузки данных о вопросе');
            }, 1000)
        } 
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const poolTitleText = response.data.title;
            const poolAnswersText = response.data.answers;

            const poolTitle = document.getElementById('poll__title');
            poolTitle.textContent = poolTitleText;

            poolAnswersText.forEach(answer => {
                createHTML(answer);
            });

            const btnAnswers = document.querySelectorAll('.poll__answer');
            btnAnswers.forEach(btn => {
                btn.addEventListener('click', () => {
                    alert('Спасибо, Ваш голос засчитан!');
                    
                })
            })
        }
    }
})
xhr.send();

 
        
