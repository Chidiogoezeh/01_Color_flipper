// DOM Cache
const body = document.body;
const hexInput = document.getElementById('hexInput');
const rSlider = document.getElementById('redRange');
const gSlider = document.getElementById('greenRange');
const bSlider = document.getElementById('blueRange');
const colorList = document.getElementById('color-list');

// State Manager
let savedColors = JSON.parse(localStorage.getItem('myPalette')) || [];

// Helper: Convert RGB component to Hex
const toHex = (c) => parseInt(c).toString(16).padStart(2, '0').toUpperCase();

// UI Update Logic
const updateUI = () => {
    const [r, g, b] = [rSlider.value, gSlider.value, bSlider.value];
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    hexInput.value = hex;

    // Perceived Luminance (Standard Accessibility Formula)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    body.style.color = luminance > 0.5 ? '#000' : '#FFF';
};

// Handle Manual Hex Input
const handleHex = (e) => {
    let val = e.target.value.replace('#', '');
    if (val.length === 3) val = val.split('').map(char => char + char).join('');
    
    if (/^[0-9A-Fa-f]{6}$/.test(val)) {
        rSlider.value = parseInt(val.substring(0, 2), 16);
        gSlider.value = parseInt(val.substring(2, 4), 16);
        bSlider.value = parseInt(val.substring(4, 6), 16);
        updateUI();
    }
};

// Palette Management
const renderPalette = () => {
    colorList.innerHTML = '';
    savedColors.forEach(hex => {
        const li = document.createElement('li');
        li.style.cssText = `width:40px; height:40px; background:${hex}; border:2px solid #fff; border-radius:50%; cursor:pointer;`;
        li.onclick = () => {
            navigator.clipboard.writeText(hex);
            showToast(`Copied ${hex}`);
        };
        colorList.appendChild(li);
    });
};

const showToast = (msg) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
};

// Event Listeners
[rSlider, gSlider, bSlider].forEach(s => s.addEventListener('input', updateUI));
hexInput.addEventListener('input', handleHex);

document.getElementById('save-btn').onclick = () => {
    const current = hexInput.value.toUpperCase();
    if (!savedColors.includes(current)) {
        savedColors.push(current);
        localStorage.setItem('myPalette', JSON.stringify(savedColors));
        renderPalette();
        showToast("Color Saved!");
    }
};

document.getElementById('download-btn').onclick = () => {
    if (savedColors.length === 0) return showToast("Palette empty");
    const csv = "Index,Hex\n" + savedColors.map((h, i) => `${i+1},${h}`).join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "palette.csv";
    a.click();
};

document.getElementById('clear-btn').onclick = () => {
    if (confirm("Delete all colors?")) {
        savedColors = [];
        localStorage.removeItem('myPalette');
        renderPalette();
    }
};

// Initialize
updateUI();
renderPalette();