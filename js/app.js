const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

// Слушаем клики по кнопке бургера
burger.addEventListener('click', () => {
    // При клике по кнопке бургера меняем значение отображения
    menu.classList.toggle('disp')
});