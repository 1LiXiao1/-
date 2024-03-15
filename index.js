const imageInput = document.getElementById('imageInput');
const numberInput = document.getElementById('numberInput');
const applyButton = document.getElementById('applyButton');
const output = document.getElementById('output');
const box = document.querySelector('.box');

// Функция для изменения размера текста
function changeFontSize(size) {
    output.style.fontSize = `${size}px`;
    box.style.fontSize = `${size}px`;
    applyButton.style.fontSize = `${size}px`;
}

// Функция для установки изображения в качестве фона
function setBackgroundImage(imageUrl, className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.style.backgroundImage = `url(${imageUrl})`;
    });
}

// Обработчик события при вводе числа
numberInput.addEventListener('input', function() {
    const inputValue = parseInt(numberInput.value);
    changeFontSize(inputValue);
});

// Обработчик события при нажатии кнопки Применить
applyButton.addEventListener('click', function() {
    const inputValue = parseInt(numberInput.value);
    changeFontSize(inputValue);
});

// Обработчик события при выборе изображения
imageInput.addEventListener('change', function() {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imageUrl = event.target.result;
        setBackgroundImage(imageUrl, 'p-background');
        setBackgroundImage(imageUrl, 'box-background');
        setBackgroundImage(imageUrl, 'button-background');
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});
