function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  respond(message.toLowerCase());
  input.value = "";
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(message) {
  let response = "I'm not sure how to respond to that.";

  if (message.includes("hello") || message.includes("hi")) {
    response = "Hello! How can I help you today?";
  } else if (message.includes("how are you")) {
    response = "I'm just a bot, but I'm doing great!";
  } else if (message.includes("your name")) {
    response = "I'm ChatBot, your virtual assistant.";
  } else if (message.includes("bye")) {
    response = "Goodbye! Have a great day!";
  }

  setTimeout(() => appendMessage("Bot", response), 500);
}
