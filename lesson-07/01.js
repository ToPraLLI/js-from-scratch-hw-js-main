/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы DOM - используем правильные селекторы из вашего HTML
    const sliderImage = document.getElementById('web-tech-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    // Проверяем, что элементы найдены
    if (!sliderImage || !prevButton || !nextButton) {
        console.error('Не найдены необходимые элементы DOM');
        return;
    }

    // Текущий индекс изображения
    let currentImageIndex = 0;

    // Функция для обновления изображения
    function updateImage() {
        sliderImage.src = WEB_TECH_IMAGES[currentImageIndex];
    }

    // Обработчик для кнопки "next"
    nextButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % WEB_TECH_IMAGES.length;
        updateImage();
    });

    // Обработчик для кнопки "prev"
    prevButton.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
        updateImage();
    });

    // Инициализация - показываем первое изображение
    updateImage();
});