//your JS code here. If required.
function removeColor() {
  // Get the select element by its ID
  let select = document.getElementById("colorSelect");

  // Get the selected option index
  let selectedIndex = select.selectedIndex;

  // Remove the selected option if one is selected
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
