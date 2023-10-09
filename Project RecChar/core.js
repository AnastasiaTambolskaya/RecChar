document.addEventListener("DOMContentLoaded", function() {
const maleButton = document.getElementById('maleButton');
const femaleButton = document.getElementById('femaleButton');
const mujikImage = document.getElementById('mujik');
const babaImage = document.getElementById('baba');
const btn = document.getElementById('okButton');

let selectedGender = ''; // Переменная для хранения выбранного пола

// Обработчики кликов на кнопках
maleButton.addEventListener('click', function() {
    // При выборе мужского пола, показываем изображение мужчины и скрываем изображение женщины
    mujikImage.style.display = 'block';
    
    mujikImage.style.transform = 'translate(70%, 0%)';
    babaImage.style.display = 'none';
    selectedGender = 'male';
    
});

femaleButton.addEventListener('click', function() {
    // При выборе женского пола, показываем изображение женщины и скрываем изображение мужчины
    mujikImage.style.display = 'none';
    babaImage.style.display = 'block';
    babaImage.style.top = '50%';
    babaImage.style.left = '50%';
    babaImage.style.transform = 'translate(120%, 3%)';
    selectedGender = 'female';
    
});

btn.addEventListener ('click', function() {
    if (selectedGender === 'male' || selectedGender === 'female') {
        // Переход на особую страницу в зависимости от выбранного пола
        if (selectedGender === 'male') {
            window.location.href = 'third.html';
        } 
        else if (selectedGender === 'female') {
            window.location.href = 'third_1.html';
        } else {
        alert('Пожалуйста, выберите пол перед нажатием кнопки "ОК".');
    }
}
});
});