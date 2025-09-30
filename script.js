// Khi bấm vào category-pill sẽ tự động đưa vào ô search
document.querySelectorAll('.category-pill').forEach(p => {
    p.addEventListener('click', () => {
        const input = document.querySelector('.search-bar input');
        input.value = p.textContent;
    });
});

// Carousel auto chạy 8 giây
var myCarousel = document.querySelector('#courseCarousel');
if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 8000,
        ride: 'carousel'
    });
}
const aiBtn = document.getElementById("ai-float-btn");
const aiBox = document.getElementById("ai-chat-box");
const aiClose = document.getElementById("ai-close-btn");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send-btn");
const aiBody = document.querySelector(".ai-chat-body");

aiBtn.addEventListener("click", () => {
    aiBox.style.display = "flex";
});

aiClose.addEventListener("click", () => {
    aiBox.style.display = "none";
});

aiSend.addEventListener("click", sendMessage);
aiInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;

    // Hiển thị tin nhắn user
    const userMsg = document.createElement("div");
    userMsg.className = "ai-message ai-user";
    userMsg.innerText = text;
    aiBody.appendChild(userMsg);

    aiInput.value = "";

    // Giả lập phản hồi AI
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "ai-message ai-bot";
        botMsg.innerText = "🤖 Đây là phản hồi demo cho: " + text;
        aiBody.appendChild(botMsg);

        aiBody.scrollTop = aiBody.scrollHeight;
    }, 800);
}
