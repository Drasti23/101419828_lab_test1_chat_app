
const socket = io('http://localhost:3000'); 


const messageInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');
const leaveRoomButton = document.getElementById('leaveRoom');
const roomSelect = document.getElementById('rooms');


let currentRoom = '';

const from_user = localStorage.getItem('username') || 'Anonymous';  


function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('chatMessage', { room: currentRoom, message, from_user });
        messageInput.value = '';  
    }
}


function joinRoom() {
    const roomSelect = document.getElementById('rooms');
    const selectedRoom = roomSelect.value;

    if (currentRoom) {
        socket.emit('leaveRoom', { room: currentRoom, from_user }); 
    }

    currentRoom = selectedRoom;

    messagesDiv.innerHTML = '';


    socket.emit('joinRoom', { room: selectedRoom, from_user });
    document.getElementById('roomName').innerText = `Room: ${selectedRoom}`;

    document.getElementById('roomSelection').style.display = 'none';
    document.getElementById('chatBox').style.display = 'block';
}

function leaveRoom() {
    socket.emit('leaveRoom', { room: currentRoom, from_user });


    alert('Leaving the room...');
    document.getElementById('roomSelection').style.display = 'block';
    document.getElementById('chatBox').style.display = 'none';
}

function displayMessage(from_user, message) {
    const msgElement = document.createElement('div');
    msgElement.textContent = `${from_user}: ${message}`;
    messagesDiv.appendChild(msgElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  
}

function logout() {
    fetch('/logout', {
        method: 'POST', 
    })
    .then(response => response.text())
    .then(message => {
        alert('Logout successful!, Redirecting to Login page');
        window.location.href = '/login.html';  
    })
    .catch(error => {
        console.error('Error logging out:', error);
    });
}

socket.on('message', (data) => {
    displayMessage(data.from_user, data.message);
});

socket.on('previousMessages', (messages) => {
    messages.forEach(message => {
        displayMessage(message.from_user, message.message);
    });
});

socket.on('systemMessage', (message) => {
    displayMessage("System", message);
});

document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
const logoutButton = document.getElementById('logoutButton');  

logoutButton.addEventListener('click', logout);

leaveRoomButton.addEventListener('click', leaveRoom);


document.getElementById('roomSelection').querySelector('button').addEventListener('click', joinRoom);

