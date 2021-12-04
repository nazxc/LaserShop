/* --- Проверка загрузки DOM контента --- */
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const form = document.querySelector("form");

    const regName = /[А-ЯЁа-яё -]$/;
    const regTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const regEmail = /^[a-zA-Z0-9-+_]+@[a-z]+.[a-z]{2,4}$/;


    const validateElem = (elem) => {

        /* -- Проверка валидности имени -- */
        if (elem.name == "name") {
            if (!regName.test(elem.value) && elem.value != "") {
                elem.previousElementSibling.textContent = "Некорректное имя!";
            } else {
                elem.previousElementSibling.textContent = "";
            }
        }

        /* -- Проверка валидности номера телефона -- */
        if (elem.name == "tel") {
            if (!regTel.test(elem.value) && elem.value != "") {
                elem.previousElementSibling.textContent = "Некорректный номер телефона!"
            } else {
                elem.previousElementSibling.textContent = ""
            }
        }

        /* -- Проверка валидности E-mail -- */
        if (elem.name == "email") {
            if (!regEmail.test(elem.value) && elem.value != "" && elem.value != "@") {
                elem.previousElementSibling.textContent = "Некорректный E-mail!"
            } else {
                elem.previousElementSibling.textContent = ""
            }
        }
    };



    /* -- Фокус активного элемента -- */
    for (let elem of form.elements) {
        if (elem.classList.contains("form__input") &&
            elem.tagName != "BUTTON"
        ) {
            elem.addEventListener("blur", () => {
                validateElem(elem);
            });
        }
    }

    /* -- Убрать перезагрузку формы по отправке формы -- */
    form.addEventListener("submit", (even) => {
        even.preventDefault();

        /* -- Присвоить elem все элементы формы с классом "form__input" и не с тегом BUTTON -- */
        for (let elem of form.elements) {

            if (elem.classList.contains("form__input") &&
                elem.tagName != "BUTTON" &&
                (elem.name != "email")
            ) {
                if (elem.value == "") {
                    elem.previousElementSibling.textContent = "Данное поле обязательно к заполнению!";
                } else {
                    elem.previousElementSibling.textContent = "";
                }
            }
        }
    });
});