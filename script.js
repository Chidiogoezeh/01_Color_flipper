const body = document.getElementsByTagName("body")[0];
const colorValueDisplay = document.getElementById("color-value");

// 1. Select all buttons using their IDs
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const randomButton = document.getElementById("random-btn");

// Helper function to convert a single RGB component (0-255) to a two-digit Hex string
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Main function to set color and update text/text contrast
function updateColor(red, green, blue) {
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;

    // Convert to Hex for display
    const hexColor = `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`.toUpperCase();
    colorValueDisplay.textContent = `Color Flipper: ${hexColor}`;

    // Accessibility check: Change body text color based on background brightness
    // Uses the perceived luminance formula approximation: (R*0.299 + G*0.587 + B*0.114)
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    
    // Threshold set to 125. Brighter background gets black text, darker gets white text.
    const textColor = brightness > 125 ? '#000' : '#FFF'; 
    body.style.color = textColor; 
}


// Function for the hard-coded colors
function setColor(name) {
    let r, g, b;
    if (name === 'red') {
        r = 255; g = 0; b = 0;
    } else if (name === 'green') {
        r = 0; g = 128; b = 0; // Using a standard web green
    } else if (name === 'blue') {
        r = 0; g = 0; b = 255;
    }
    updateColor(r, g, b);
}


// Function for random color generation
function randomColor() {
    // Generate random values between 0 and 255
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    updateColor(red, green, blue);
}

// 2. Attach Event Listeners (Best Practice)
redButton.addEventListener('click', () => setColor('red'));
greenButton.addEventListener('click', () => setColor('green'));
blueButton.addEventListener('click', () => setColor('blue'));
randomButton.addEventListener('click', randomColor);

// Set the initial color to a random value when the page loads
randomColor();