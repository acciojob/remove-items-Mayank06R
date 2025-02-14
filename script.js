//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector("input[type='button']");

removeButton.addEventListener("click", () => {
    if (colorSelect.selectedIndex !== -1) {
        colorSelect.remove(colorSelect.selectedIndex);
    } else {
        alert("No color selected!");
    }
});

