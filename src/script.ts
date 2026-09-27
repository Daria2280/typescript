enum PageColor {
    Blue = "lightblue",
    Green = "lightgreen",
    Pink = "lightpink"
}
const userName: string = "Користувач";
const userAge: number = 18;
let hobby: string = "";
let experience: number = 0;
function createGreeting(
    name: string,
    age: number,
    hobby: string,
    experience: number
): string {

    let experienceMessage: string;

    if (experience > 5) {
        experienceMessage =
            `Вау, ти справжній експерт у ${hobby}!`;
    } else if (experience >= 1 && experience <= 5) {
        experienceMessage =
            `Чудово, ти вже маєш досвід у ${hobby}.`;
    } else {
        experienceMessage =
            `Все попереду! Починати нове хобі — це цікаво.`;
    }

    return `Привіт, ${name}! Тобі ${age} років. ` +
           `Твоє хобі — ${hobby}. ${experienceMessage}`;
}
const button = document.getElementById(
    "startButton"
) as HTMLButtonElement;

const result = document.getElementById(
    "result"
) as HTMLDivElement;

const colorSelect = document.getElementById(
    "color"
) as HTMLSelectElement;

const nameInput = document.getElementById(
    "name"
) as HTMLInputElement;

const ageInput = document.getElementById(
    "age"
) as HTMLInputElement;

const hobbyInput = document.getElementById(
    "hobby"
) as HTMLInputElement;

const experienceInput = document.getElementById(
    "experience"
) as HTMLInputElement;
button.addEventListener("click", (): void => {
    const name: string = nameInput.value;
    const age: number = Number(ageInput.value);
    hobby = hobbyInput.value;
    experience = Number(experienceInput.value);
    if (
        name.trim() === "" ||
        hobby.trim() === "" ||
        isNaN(age) ||
        isNaN(experience)
    ) {
        result.innerHTML = `
            <p>Будь ласка, заповніть усі поля.</p>
        `;
        return;
    }
    const greeting: string = createGreeting(
        name,
        age,
        hobby,
        experience
    );
    let colorList: string = "<h3>Значення Enum:</h3><ul>";

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