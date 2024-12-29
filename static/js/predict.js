// dropdown 
function showDropdown() {
  const dropdown = document.getElementById("dropdownContent");
  dropdown.classList.add("show");
}

function filterFunction() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("dropdownContent");
  const options = div.getElementsByTagName("div");

  // Show the dropdown
  div.classList.add("show");

  // Filter the options based on input
  for (let i = 0; i < options.length; i++) {
    const txtValue = options[i].textContent || options[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }

  // Hide the dropdown if input is empty
  if (!input.value) {
    div.classList.remove("show");
  }
}

function selectOption(symptom) {
  const input = document.getElementById("searchInput");

  // Get the current value and check if it already ends with a comma or not
  let currentValue = input.value.trim();

  // If input is not empty, append a comma and space after current value
  if (currentValue.length > 0 && currentValue.slice(-1) !== ',') {
    currentValue += ', ';
  }

  // Add the selected symptom to the input field with a comma
  input.value = currentValue + symptom + ', ';

  // Clear the dropdown after selection
  document.getElementById("dropdownContent").classList.remove("show");

  // Refocus the input field for further input
  input.focus();
}

// Close the dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('#searchInput')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}











