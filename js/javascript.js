const colors = document.querySelectorAll('input[name="color"]');

for (let index = 0; index < colors.length; index++) {
    const color = colors[index];
    color.addEventListener("change", showColor)
}


function showColor(event) {
    window.location.href = `jacket-${event.target.value}.html`
    console.log(event.target.value);
}