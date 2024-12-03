// Функция для отображения сообщения
function showMessage(message) {
    console.log(message);
}

// Функция для вывода текущего времени
function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(`Текущее время: ${time}`);
}

// Функция для сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Функция для смены цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Вызов функций в нужном порядке
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    // Сброс цвета фона
    resetBackgroundColor();
    // Изменение цвета фона
    changeBackgroundColor("white");
    // Переключение видимости элемента с классом .content
    toggleVisibility(".content");

    // Увеличение изображения
    const studentImage = document.querySelector("#student-img img");
    if (studentImage) {
        studentImage.addEventListener("mouseover", () => {
            studentImage.style.transform = "scale(1.1)";
            studentImage.style.transition = "transform 0.3s";
        });

        studentImage.addEventListener("mouseout", () => {
            studentImage.style.transform = "scale(1)";
        });

        studentImage.addEventListener("click", () => {
            studentImage.src = "https://via.placeholder.com/150?text=Favorite+Teacher";
        });

        studentImage.addEventListener("dblclick", () => {
            alert("Не налегай, у меня не так много любимых преподавателей");
        });
    } else {
        console.error("Изображение с ID #student-img не найдено.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Находим изображение студента
    const studentImage = document.querySelector("#heading .logo img");

    if (studentImage) {
        // Добавляем событие для вращения при наведении
        studentImage.addEventListener("mouseover", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(360deg)";
        });

        // Возвращаемся к исходному состоянию при уходе мыши
        studentImage.addEventListener("mouseout", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(0deg)";
        });
    } else {
        console.error("Изображение студента не найдено.");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".thirdblock p");
    if (paragraph) {
        paragraph.addEventListener("click", () => {
            paragraph.style.transition = "background-color 0.5s ease";
            paragraph.style.color = "white"
            paragraph.style.backgroundColor = "black"; // Смена фона на голубой
        });
    }
});

