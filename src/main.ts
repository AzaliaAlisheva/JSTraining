export function buttonclick() {
    button.innerHTML = "You clicked me";
}

const button = document.getElementById("contact") as HTMLButtonElement;
button.addEventListener('click', buttonclick);