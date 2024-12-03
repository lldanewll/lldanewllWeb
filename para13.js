document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector(".thirdblock p");
    if (paragraph) {
        paragraph.addEventListener("click", () => {
            paragraph.style.transition = "background-color 0.5s ease";
            paragraph.style.backgroundColor = "#f0f8ff"; // Смена фона на голубой
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const showLecturesButton = document.querySelector("#show-lectures");
    const lecturesTable = document.querySelector("#secondblock");

    if (showLecturesButton && lecturesTable) {
        showLecturesButton.addEventListener("click", () => {
            lecturesTable.classList.toggle("show");
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    // 1. Обработчик события click на заголовок H1
    const h1Heading = document.querySelector("header .heading h3");
    if (h1Heading) {
        h1Heading.addEventListener("click", () => {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }

    // 2. Замена тем практик на второй семестр
    const tableBody = document.querySelector(".thirdblock table tbody");
    const secondSemesterTopics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Защита проекта"
    ];

    const thirdBlock = document.querySelector(".thirdblock");
    if (thirdBlock) {
        const changeSemesterButton = document.createElement("button");
        changeSemesterButton.textContent = "Посмотреть практики второго семестра";
        changeSemesterButton.classList.add("btn", "btn-primary", "my-3");
        thirdBlock.prepend(changeSemesterButton);

        changeSemesterButton.addEventListener("click", () => {
            if (tableBody) {
                tableBody.innerHTML = ""; // Очищаем таблицу
                secondSemesterTopics.forEach((topic, index) => {
                    const row = `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${topic}</td>
                            <td><input type="checkbox"></td>
                            <td><input type="checkbox"></td>
                        </tr>
                    `;
                    tableBody.innerHTML += row;
                });
            }
        });
    } else {
        console.error("Элемент .thirdblock не найден.");
    }
});
