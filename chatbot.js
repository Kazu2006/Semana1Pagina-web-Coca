const chatBox = document.getElementById("chat-box");
const chatContainer = document.getElementById("chat-container");

const responses = {
    "¿Cuál es tu nombre?": "Soy un chatbot simple.",
    "¿Cómo funciona esto?": "Solo selecciona una pregunta y responderé automáticamente.",
    "¿Cuál es la capital de Francia?": "La capital de Francia es París.",
    "¿Qué puedes hacer?": "Puedo responder preguntas predefinidas."
};

function toggleChat() {
    chatContainer.style.display = (chatContainer.style.display === "block") ? "none" : "block";
}

function sendMessage(question) {
    chatBox.innerHTML = ""; // Limpia respuestas anteriores
    
    const userMessage = document.createElement("div");
    userMessage.textContent = question;
    userMessage.style.background = "#cce5ff";
    userMessage.style.padding = "8px";
    userMessage.style.margin = "5px 0";
    chatBox.appendChild(userMessage);
    
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.textContent = responses[question];
        botMessage.style.background = "#e0e0e0";
        botMessage.style.padding = "8px";
        botMessage.style.margin = "5px 0";
        chatBox.appendChild(botMessage);
    }, 500);
}
