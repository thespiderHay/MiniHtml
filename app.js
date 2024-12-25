// First Screen: Handle Form Submission
const form = document.getElementById("parameterForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the input value
    const username = document.getElementById("username").value;

    // Redirect to second screen with the username as a query parameter
    window.location.href = `display.html?username=${encodeURIComponent(username)}`;
  });
}

// Second Screen: Display the Passed Parameter
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

if (username) {
  // Display the username on the second screen
  document.getElementById("username").textContent = username;
}