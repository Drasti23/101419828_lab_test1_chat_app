Chat Application
This project is a real-time chat application that allows users to join chat rooms, send messages, and leave rooms. It uses Socket.IO for real-time communication and MongoDB for message storage. The server is built using Express, and the application supports both individual and group chat functionality.

Table of Contents
Technologies Used
Features
Setup
File Structure
How to Use
Logout Functionality
Future Improvements
Technologies Used
Frontend:
HTML, CSS, JavaScript
Socket.IO client (for real-time communication)
Backend:
Node.js
Express
MongoDB (for message storage)
Socket.IO server (for real-time chat functionality)
Database:
MongoDB (used for storing user messages and group messages)
Features
Join/Leave Room: Users can select a room from a list and join a chat. They can leave the room anytime and return to the room selection screen.

Real-Time Chat: Messages are sent and received in real-time using Socket.IO. When a user sends a message, it is broadcasted to all users in the same room.

Group Messages: Supports group messaging functionality where users can chat with each other in real-time within selected rooms.

Message Persistence: All messages are stored in MongoDB and are retrieved when a user joins a room, allowing the user to see previous messages.

Logout: Users can log out from the chat application and are redirected to the login page.

Setup
Prerequisites
Node.js (v14 or higher)
MongoDB (either locally or MongoDB Atlas)
Installing Dependencies
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
Navigate to the project folder:

bash
Copy
Edit
cd chat-app
Install the dependencies:

bash
Copy
Edit
npm install
MongoDB Setup
Create a MongoDB database and connect it to the application.
Update the MONGO_URI in server.js with your MongoDB connection string (either from MongoDB Atlas or a local MongoDB instance).
File Structure
plaintext
Copy
Edit
chat-app/
│
├── public/
│   ├── index.html           # The main landing page
│   ├── login.html           # Login page (redirects here after logout)
│   ├── styles.css           # Basic styles for the chat UI
│   └── chat.js              # JavaScript for the chat functionality
│
├── models/
│   ├── User.js              # User schema for MongoDB
│   ├── Message.js           # Individual message schema for MongoDB
│   └── GroupMessage.js      # Group message schema for MongoDB
│
├── routes/
│   ├── auth.js              # Authentication routes
│   └── chatRoute.js         # Chat related routes
│
├── server.js                # Main server file
└── package.json             # Project metadata and dependencies
How to Use
Run the Server:

In your terminal, navigate to the project folder and run the following command to start the server:

bash
Copy
Edit
node server.js
This will start the server on http://localhost:3000.

Access the Application:

Open your browser and go to http://localhost:3000 to access the chat application.

Join a Room:

Select a room from the dropdown menu (e.g., DevOps, Cloud Computing, etc.).
Once you click the Join Room button, you'll be taken to the chat interface.
Send Messages:

Type your message in the input field and click Send or press Enter to send a message. All messages will be shown in the message history.

Leave a Room:

Click Leave Room to exit the current chat room and return to the room selection page.
Logout:

Click the Logout button to log out and be redirected to the login page (login.html).
Logout Functionality
To log out, the user can click the Logout button in the chat interface. This will trigger a POST request to the /logout route on the server, which clears the session, effectively logging the user out and redirecting them to the login page.

Here's how the logout process works:

When the Logout button is clicked, the client sends a POST request to the /logout endpoint on the server.
The server clears the session using req.session.destroy().
The client is then redirected to the login page (login.html).
Future Improvements
User Authentication: Implement user authentication using a login page, allowing users to register, log in, and have personalized experiences in the chat rooms.
Private Messages: Implement private messaging functionality where users can send direct messages to each other.
Real-Time Notifications: Add real-time notifications when a new message is received, even when the user is not actively focused on the chat window.
File Sharing: Add functionality to send files like images, videos, or documents within the chat.
Enhanced UI/UX: Improve the user interface and user experience with animations and modern design.
