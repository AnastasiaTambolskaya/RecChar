const elfButton = document.getElementById('elfButton');
const fairyButton = document.getElementById('fairyButton');
const vampireButton = document.getElementById('vampireButton');
const okButton = document.getElementById('okButton')

const elf = document.getElementById('elf');
const fairy = document.getElementById('fairy');
const vampire = document.getElementById('vampire');

// Добавляем обработчик события на кнопку Elf
elfButton.addEventListener('click', () => {
  // Скрываем кнопки Fairy и Vampire
    fairyButton.style.display = 'none';
    vampireButton.style.display = 'none';

  // Показываем изображение Elf
    elf.style.display = 'block';

  // Скрываем изображения Fairy и Vampire
    fairy.style.display = 'none';
    vampire.style.display = 'none';
    elf.style.transform = 'translate(123%, 10%)';
    elfButton.style.transform = 'translate(335%, 190%)';
    okButton.style.transform = 'translate(0%, 110%)';
    selectedRace = 'elf';
});

// Добавляем обработчик события на кнопку Fairy
fairyButton.addEventListener('click', () => {
  // Скрываем кнопки Elf и Vampire
    elfButton.style.display = 'none';
    vampireButton.style.display = 'none';

  // Показываем изображение Fairy
    fairy.style.display = 'block';

  // Скрываем изображения Elf и Vampire
    elf.style.display = 'none';
    vampire.style.display = 'none';
    fairy.style.transform = 'translate(121%, 0%)';
    fairyButton.style.transform = 'translate(454%, 14%)';
    okButton.style.transform = 'translate(0%, 8%)';
    selectedRace = 'fairy';
});

// Добавляем обработчик события на кнопку Vampire
vampireButton.addEventListener('click', () => {
  // Скрываем кнопки Elf и Fairy
    elfButton.style.display = 'none';
    fairyButton.style.display = 'none';

  // Показываем изображение Vampire
    vampire.style.display = 'block';

  // Скрываем изображения Elf и Fairy
    elf.style.display = 'none';
    fairy.style.display = 'none';
    vampire.style.transform = 'translate(227%, 10%)';
    vampireButton.style.transform = 'translate(365%, 190%)';
    okButton.style.transform = 'translate(0%, 109%)';
    selectedRace = 'vampire';
});
okButton.addEventListener('click', function() {
    if (selectedRace === 'elf') {
        window.location.href = 'file:///F:/Project%20RecChar/forth.html';
    } else if (selectedRace === 'fairy') {
        window.location.href = 'special_page_for_fairy.html';
    } else if (selectedRace === 'vampire') {
        window.location.href = 'special_page_for_vampire.html';
    } else {
        alert('Пожалуйста, выберите расу перед нажатием кнопки "ОК".');
    }
});