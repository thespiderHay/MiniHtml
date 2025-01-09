// First Screen: Handle Form Submission
const form = document.getElementById('parameterForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the input value
    const username = document.getElementById('username').value;

    // Redirect to second screen with the username as a query parameter
    window.location.href = `display.html?username=${encodeURIComponent(
      username,
    )}`;
  });
}

// Second Screen: Display the Passed Parameter
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
  // Display the username on the second screen
  document.getElementById('username').textContent = username;
}

function requestCamera() {
  // Send a message to the Super App
  try {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({type: 'photoCaptured'}),
    );
  } catch (error) {
    alert('Error sending message to Super App: ' + error.message);
  }
}

// Listener for messages from the Super App
document.addEventListener('message', event => {
  // alert(event.data)
  try {
    const message = JSON.parse(event.data);
    if (message.type === 'photoCaptured') {
     // alert(message.data)
      const imgElement = document.getElementById('imageDisplay');
      imgElement.src = `data:image/jpeg;base64,${message.data}`;
    }
  } catch (error) {
    alert('Error processing message from Super App: ' + error.message);
  }
});

window.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  const token = data.token;
  console.log('Authorization Token:', token);
  alert(token)
});
