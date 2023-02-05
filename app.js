const form = document.querySelector('.message-form');
const messageList = document.querySelector('.message-list');
const messageInput = document.querySelector('.message-input');

// Function to add a new message to the list
function addMessage(sender, timestamp, text) {
  const newMessage = document.createElement('li');
  newMessage.classList.add('message');
  newMessage.innerHTML = `
    <p class="sender">${sender}</p>
    <p class="timestamp">${timestamp}</p>
    <p class="text">${text}</p>
  `;
  messageList.appendChild(newMessage);
}