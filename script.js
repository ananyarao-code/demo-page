// ==========================================
// STEP 2: Alert Button
// ==========================================
function showAlert() {
    alert("🤖 AI Core Activated! Systems operational.");
}

// ==========================================
// STEP 3: Change Something on the Page (Toggle Theme Glow)
// ==========================================
function changeGlow() {
    const mainBox = document.querySelector('main');
    // Toggle a class or directly update inline styles
    if (mainBox.style.boxShadow.includes('rgba(255, 0, 128')) {
        mainBox.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 254, 0.4)";
        mainBox.style.borderColor = "rgba(0, 242, 254, 0.5)";
    } else {
        mainBox.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 0, 128, 0.6)";
        mainBox.style.borderColor = "rgba(255, 0, 128, 0.6)";
    }
}

// ==========================================
// STEP 4 & 5: User Input + If/Else Decision Logic
// ==========================================
function checkAccess() {
    const username = document.getElementById('usernameInput').value;
    const responseMessage = document.getElementById('userResponse');

    if (username.trim() === "") {
        responseMessage.textContent = "⚠️ Please enter a name first!";
        responseMessage.style.color = "#ef4444";
    } else if (username.toLowerCase() === "admin" || username.toLowerCase() === "ai") {
        responseMessage.textContent = `⚡ Access Granted! Welcome back, Commander ${username}. Full system access unlocked.`;
        responseMessage.style.color = "#22c55e";
    } else {
        responseMessage.textContent = `👋 Welcome aboard, ${username}! Enjoy exploring Artificial Intelligence.`;
        responseMessage.style.color = "#00f2fe";
    }
}

// ==========================================
// STEP 6: Fun Feature (Random AI Fact Generator)
// ==========================================
const aiFacts = [
    "The term 'Artificial Intelligence' was first coined in 1956 at Dartmouth College.",
    "AI can detect subtle patterns in medical imagery faster than human doctors in many benchmark tests.",
    "Machine learning algorithms learn by training on massive datasets rather than explicit step-by-step code.",
    "Neural networks are loosely inspired by the structure of neurons in the human brain.",
    "Modern AI can compose music, write code, and render photorealistic artworks in seconds."
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * aiFacts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = aiFacts[randomIndex];
}
