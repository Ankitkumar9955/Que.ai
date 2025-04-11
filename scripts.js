document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const clearButton = document.getElementById('clearChat');
    const themeToggle = document.getElementById('themeToggle');
    
    function addInitialGreeting() {
        const messageDiv = document.createElement('div');
        messageDiv.className = "message ai-message";
        messageDiv.textContent = "Hi there! I'm Que.ai, your interactive AI assistant. Ask me anything!";
        chatMessages.appendChild(messageDiv);
        setTimeout(() => {
            showSuggestions();
        }, 500);
    }
    
    addInitialGreeting();

    const sampleSuggestions = [
        "What is the capital of France?",
        "What is the weather in Chennai?",
        "Tell me a fun fact",
        "How does AI work?",
        "Write a short poem",
        "Tell me a joke",
    ];

    function showSuggestions() {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = "message ai-message";
        suggestionsDiv.style.background = "transparent";
        suggestionsDiv.style.boxShadow = "none";
        suggestionsDiv.style.padding = "5px 0";

        let suggestionsHTML = `<div style='display: flex; flex-wrap: wrap; gap: 10px;'>`;
        sampleSuggestions.forEach(suggestion => {
            suggestionsHTML += `<div 
                style='background: var(--input-bg); padding: 8px 15px; border-radius: 20px; cursor:pointer;'>${suggestion}</div>`;
        });
        suggestionsHTML += `</div>`;
        
        suggestionsDiv.innerHTML = suggestionsHTML;
        chatMessages.appendChild(suggestionsDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const suggestionElements = document.querySelectorAll('.suggestion');
        suggestionElements.forEach(el => {
            el.addEventListener('click', () => {
                userInput.value = el.textContent;
                sendMessage();
            });
        });
    }

   // Add other JavaScript functions and event listeners here...
});
