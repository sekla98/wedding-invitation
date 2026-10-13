// បង្កើតបែបផែនផ្កាមាសធ្លាក់ចុះ (Khmer Traditional Flower/Sparkle Fall Effect)
function createFallingSparkles() {
    const container = document.getElementById('app-container');
    const symbols = ['✦', '✧', '🌸', '✨'];
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('falling-element');
        sparkle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        sparkle.style.left = Math.random() * container.clientWidth + 'px';
        sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's'; // ល្បឿនធ្លាក់ពី 3 ដល់ 6 វិនាទី
        sparkle.style.fontSize = (Math.random() * 10 + 10) + 'px';
        
        container.appendChild(sparkle);

        // លុបចោលវិញក្រោយពេលធ្លាក់ផុត ដើម្បីកុំឱ្យធ្ងន់ទូរស័ព្ទ
        setTimeout(() => {
            sparkle.remove();
        }, 6000);
    }, 400);
}

// ចាប់ផ្តើមដំណើរការធ្លាក់ផ្កាពេលបើកទំព័រ
window.addEventListener('load', () => {
    createFallingSparkles();
});