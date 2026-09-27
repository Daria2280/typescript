"use strict";
var PageColor;
(function (PageColor) {
    PageColor["Blue"] = "lightblue";
    PageColor["Green"] = "lightgreen";
    PageColor["Pink"] = "lightpink";
})(PageColor || (PageColor = {}));
const userName = "Користувач";
const userAge = 18;
let hobby = "";
let experience = 0;
function createGreeting(name, age, hobby, experience) {
    let experienceMessage;
    if (experience > 5) {
        experienceMessage =
            `Вау, ти справжній експерт у ${hobby}!`;
    }
    else if (experience >= 1 && experience <= 5) {
        experienceMessage =
            `Чудово, ти вже маєш досвід у ${hobby}.`;
    }
    else {
        experienceMessage =
            `Все попереду! Починати нове хобі — це цікаво.`;
    }
    return `Привіт, ${name}! Тобі ${age} років. ` +
        `Твоє хобі — ${hobby}. ${experienceMessage}`;
}
const button = document.getElementById("startButton");
const result = document.getElementById("result");
const colorSelect = document.getElementById("color");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const hobbyInput = document.getElementById("hobby");
const experienceInput = document.getElementById("experience");
button.addEventListener("click", () => {
    const name = nameInput.value;
    const age = Number(ageInput.value);
    hobby = hobbyInput.value;
    experience = Number(experienceInput.value);
    if (name.trim() === "" ||
        hobby.trim() === "" ||
        isNaN(age) ||
        isNaN(experience)) {
        result.innerHTML = `
            <p>Будь ласка, заповніть усі поля.</p>
        `;
        return;
    }
    const greeting = createGreeting(name, age, hobby, experience);
    let colorList = "<h3>Значення Enum:</h3><ul>";
    for (const color of Object.values(PageColor)) {
        colorList += `<li>${color}</li>`;
    }
    colorList += "</ul>";
    result.innerHTML = `
        <h2>${greeting}</h2>
        ${colorList}
    `;
    document.body.style.backgroundColor =
        colorSelect.value;
});
