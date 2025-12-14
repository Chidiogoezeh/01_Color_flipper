Color Flipper Web Project
A simple, pure front-end web application that allows users to change the background color of the page using pre-set names or a randomized RGB generator. The project demonstrates best practices in separating concerns between HTML, CSS, and vanilla JavaScript, including improved accessibility features

This is a conceptual diagram that illustrates the flow:

    A[index.html] -- Links --> B(index.css)
    A -- Loads --> C(index.js)
    D[User Input] -- Triggers Events --> C
    C -- Manipulates DOM & Styles --> A
    B -- Styles --> A
    
    style A fill:#f9f,stroke:#333
    style B fill:#ccf,stroke:#333
    style C fill:#cfc,stroke:#333

🚀 Features
Color Selection: Easily change the background to Red, Green, or Blue.

Random Color Generation: Generate a unique background color using a randomized RGB value.

Hex Code Display: The current color is displayed in the universally recognized Hexadecimal (#RRGGBB) format for easy use in other applications.

Accessibility (A11y): Dynamically adjusts the primary text color (black or white) based on the background color's brightness to ensure high contrast and readability.

Clean Code: All event handling is managed through JavaScript addEventListener calls, keeping the index.html file clean of inline JavaScript (onclick).

🛠️ Technologies Used
HTML5: Structure and content.

CSS3 (Vanilla): Styling and layout.

JavaScript (Vanilla JS): Logic, DOM manipulation, color generation, and event handling.

⚙️ Setup and Installation
This is a pure front-end project and requires no server-side setup.

Prerequisites
You only need a modern web browser (Chrome, Firefox, Edge, Safari, etc.).

Steps
Clone or Download: Get the project files (or copy the contents of index.html, index.css, and index.js) into a single local directory.

Launch: Locate the index.html file in your directory.

Open: Double-click index.html to open it directly in your default web browser.

The application will launch immediately, setting a random background color on load.

📂 Project Structure

File        Purpose     Key Content
index.html  Markup      Main structure, links CSS/JS, contains buttons and the color display element (#color-value).

style.css   Styling     Defines button look, centers content, and includes a smooth transition for color changes.

script.js   Logic       Selects DOM elements, contains randomColor and setColor functions, handles RGB-to-Hex           conversion, and manages the text contrast check.


💡 Code Highlights
Accessibility Check (script.js)
The project ensures readability by dynamically changing the text color based on the calculated brightness of the background using a luminosity formula:

JavaScript

// Luminosity formula approximation
const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

// Set text color for contrast
const textColor = brightness > 125 ? '#000' : '#FFF'; 
body.style.color = textColor; 
Event Listener Setup
All interactivity is bound programmatically in script.js:

JavaScript

// Binding the Red button to the setColor function
redButton.addEventListener('click', () => setColor('red')); 
// Binding the Random button
randomButton.addEventListener('click', randomColor);


🤝 Contribution
Feel free to fork the repository, suggest improvements, or submit pull requests!

Fork the project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📝 License
Distributed under the MIT License. See LICENSE.md for more information.