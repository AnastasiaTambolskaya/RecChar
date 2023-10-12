const elfButton = document.getElementById('elfButton');
const fairyButton = document.getElementById('fairyButton');
const vampireButton = document.getElementById('vampireButton');
const okButton = document.getElementById('okButton')

const elf_female = document.getElementById('elf_female');
const fairy_female = document.getElementById('fairy_female');
const vampire_female = document.getElementById('vampire_female');

let selectedRace = '';

// Добавляем обработчик события на кнопку Elf
elfButton.addEventListener('click', () => {
  // Скрываем кнопки Fairy и Vampire
    fairyButton.style.display = 'none';
    vampireButton.style.display = 'none';

  // Показываем изображение Elf
    elf_female.style.display = 'block';

  // Скрываем изображения Fairy и Vampire
    fairy_female.style.display = 'none';
    vampire_female.style.display = 'none';
    elf_female.style.transform = 'translate(95%, 10%)';
    elfButton.style.transform = 'translate(365%, 147%)';
    okButton.style.transform = 'translate(0%, 87%)';
    selectedRace = 'elf_female';
});

// Добавляем обработчик события на кнопку Fairy
fairyButton.addEventListener('click', () => {
  // Скрываем кнопки Elf и Vampire
    elfButton.style.display = 'none';
    vampireButton.style.display = 'none';

  // Показываем изображение Fairy
    fairy_female.style.display = 'block';

  // Скрываем изображения Elf и Vampire
    elf_female.style.display = 'none';
    vampire_female.style.display = 'none';
    fairy_female.style.transform = 'translate(195%, 9%)';
    fairyButton.style.transform = 'translate(516%, 179%)';
    okButton.style.transform = 'translate(0%, 107%)';
    selectedRace = 'fairy_female';
});

// Добавляем обработчик события на кнопку Vampire
vampireButton.addEventListener('click', () => {
  // Скрываем кнопки Elf и Fairy
    elfButton.style.display = 'none';
    fairyButton.style.display = 'none';

  // Показываем изображение Vampire
    vampire_female.style.display = 'block';

  // Скрываем изображения Elf и Fairy
    elf_female.style.display = 'none';
    fairy_female.style.display = 'none';
    vampire_female.style.transform = 'translate(144%, 10%)';
    vampireButton.style.transform = 'translate(505%, 190%)';
    okButton.style.transform = 'translate(0%, 109%)';
    selectedRace = 'vampire_female';
});
okButton.addEventListener('click', function() {
    if (selectedRace === 'elf_female') {
        window.location.href = '/Users/nasta/RecChar/Project RecChar/forth.html';
    } else if (selectedRace === 'fairy_female') {
        window.location.href = 'special_page_for_fairy.html';
    } else if (selectedRace === 'vampire_female') {
        window.location.href = 'special_page_for_vampire.html';
    } else {
        alert('Пожалуйста, выберите расу перед нажатием кнопки "ОК".');
    }
}); 