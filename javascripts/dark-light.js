  // Add an event listener for when the window loads
window.addEventListener("load", (event) => {
  // Post a message to the parent window
  window.parent.postMessage("", "*");
}, false);

// Add an event listener for receiving messages
window.addEventListener("message", (event) => {
  // Get the origin of the message
  var origin = event.origin;

  // Check if the origin is the expected one
  if (origin === "https://criptonautas.co") {
    // Handle the message based on its data
    switch (event.data) {
      case "light":
        // Set the body class to 'light'
        document.body.classList.replace('dark', 'light');
        break;
      case "dark":
        // Set the body class to 'dark'
        document.body.classList.replace('light', 'dark');
        break;
    }
  }
}, false);