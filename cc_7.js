// select elements
const input = document.getElementById("headlineInput");
const button = document.getElementById("updateBtn");
const cta = document.getElementById("cta");

// add event listener
button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        cta.textContent = input.value;
        input.value = "";
    }
});
