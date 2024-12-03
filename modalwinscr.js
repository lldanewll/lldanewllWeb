// Получаем элементы
const modal = document.getElementById("modal");
let openModalBtns = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const heading = document.getElementById("heading_1");
const successModal = document.getElementById("successModal");
const closeSuccess = document.querySelector(".closeSuccess");

// Данные формы
let formData = { Name: "", email: "", phone: "", date: "", comment: "" };

// Кнопки для открытия модального окна
openModalBtns.forEach((button) => {
    button.onclick = function () {
        modal.style.display = "block";
    };
});

// Функция для сбора данных формы
function submitForm() {
    formData.Name = document.getElementById("name").value;
    formData.email = document.getElementById("email").value;
    formData.phone = document.getElementById("phonenumber").value;
    formData.date = document.getElementById("dateval").value;
    formData.comment = document.getElementById("comments").value;
}

// Функция для вывода данных в консоль
function printData() {
    console.log(formData.Name);
    console.log(formData.email);
    console.log(formData.phone);
    console.log(formData.date);
    console.log(formData.comment);
}

// Обработчик отправки формы
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Сохраняем данные формы
    submitForm();

    // Закрываем текущее модальное окно
    modal.style.display = "none";

    // Показ успешного сообщения с анимацией
    successModal.style.display = "block";
    successModal.classList.add("animate-success");

    // Убираем анимацию через 2 секунды
    setTimeout(() => {
        successModal.classList.remove("animate-success");
    }, 2000);

    // Логируем данные
    printData();
});

// Закрытие текущего модального окна
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Закрытие успешного модального окна
closeSuccess.addEventListener("click", function () {
    successModal.style.display = "none";
});

// Закрытие окна при клике вне его
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === successModal) {
        successModal.style.display = "none";
    }
};

// Изменение заголовка модального окна в зависимости от кнопки
document.getElementById("btn-1").addEventListener("click", function () {
    heading.textContent = "Сайт визитка";
});

document.getElementById("btn-2").addEventListener("click", function () {
    heading.textContent = "Корпоративный сайт";
});

document.getElementById("btn-3").addEventListener("click", function () {
    heading.textContent = "Интернет-магазин";
});

// Добавляем анимацию успешного модального окна
document.addEventListener("DOMContentLoaded", () => {
    // Добавляем класс для анимации
    const style = document.createElement("style");
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1); }
        }

        .animate-success {
            animation: fadeInOut 2s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});
