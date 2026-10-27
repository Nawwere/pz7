// Поиск элементов через querySelector (п.2, 3)
const statusButton = document.querySelector('.status-button');
const resetButton = document.querySelector('.reset-button');
const statusText = document.querySelector('.status-text');
const statusPanel = document.querySelector('.status-panel');
const themeButton = document.querySelector('.theme-button');
const clickCountSpan = document.querySelector('.click-count');

// Самостоятельная часть: счётчик кликов
let clickCount = 0;

// п.4, 5, 6: обработчик клика по кнопке «Выполнено»
statusButton.addEventListener('click', () => {
    statusText.textContent = 'Практическая работа выполнена!';
    statusPanel.classList.add('completed');
    
    // Самостоятельная часть: увеличиваем счётчик и выводим на страницу
    clickCount++;
    clickCountSpan.textContent = clickCount;
});

// п.8: кнопка «Сбросить»
resetButton.addEventListener('click', () => {
    statusText.textContent = 'Работа ещё не отмечена как выполненная.';
    statusPanel.classList.remove('completed');
});

// Самостоятельная часть: переключение темы через classList.toggle()
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});