<template>
  <!-- Chats container -->
  <div class="chat-container" ref="chatContainer"></div>

  <!-- Typing container -->
  <div class="typing-container">
    <div class="typing-content">
      <div class="typing-textarea">
        <textarea id="chat-input" spellcheck="false" placeholder="Enter a prompt here" required></textarea>
        <span id="send-btn" class="material-symbols-rounded" @click="handleOutgoingChat">send</span>
      </div>
      <div class="typing-controls">
        <span id="theme-btn" class="material-symbols-rounded" @click="toggleTheme">{{ themeButton }}</span>
        <span id="delete-btn" class="material-symbols-rounded" @click="deleteChats">delete</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const chatInput = ref(null);
const chatContainer = ref(null);
const themeButton = ref("light_mode");
const deleteButton = ref(null);
const userText = ref(null);
const initialInputHeight = ref(0);

const API_KEY = "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";

onMounted(() => {
  chatInput.value = document.querySelector("#chat-input");
  chatContainer.value = document.querySelector(".chat-container");
  deleteButton.value = document.querySelector("#delete-btn");

  watchEffect(() => {
    if (chatInput.value) {
      chatInput.value.addEventListener("input", () => {
        chatInput.value.style.height = `${initialInputHeight.value}px`;
        chatInput.value.style.height = `${chatInput.value.scrollHeight}px`;
      });

      chatInput.value.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
          e.preventDefault();
          handleOutgoingChat();
        }
      });
    }
  });
});

const loadDataFromLocalstorage = () => {
  const themeColor = localStorage.getItem("themeColor");

  document.body.classList.toggle("light-mode", themeColor === "light_mode");
  themeButton.value = document.body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";

  const defaultText = `<div class="default-text">
                            <h1>Welcome To Umbrella AI Chat</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`;

  chatContainer.value.innerHTML = localStorage.getItem("all-chats") || defaultText;
  chatContainer.value.scrollTo(0, chatContainer.value.scrollHeight);
};

const createChatElement = (content, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = content;
  return chatDiv;
};

const getChatResponse = async (incomingChatDiv) => {
  const API_URL = "https://api.openai.com/v1/completions";
  const pElement = document.createElement("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userText.value,
      max_tokens: 2048,
      temperature: 0.2,
      n: 1,
      stop: null,
    }),
  };

  try {
    const response = await (await fetch(API_URL, requestOptions)).json();
    pElement.textContent = response.choices[0].text.trim();
  } catch (error) {
    pElement.classList.add("error");
    pElement.textContent =
      "Oops! Something went wrong while retrieving the response. Please try again.";
  }

  incomingChatDiv.querySelector(".typing-animation").remove();
  incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
  localStorage.setItem("all-chats", chatContainer.value.innerHTML);
  chatContainer.value.scrollTo(0, chatContainer.value.scrollHeight);
};

const copyResponse = (copyBtn) => {
  const reponseTextElement = copyBtn.parentElement.querySelector("p");
  navigator.clipboard.writeText(reponseTextElement.textContent);
  copyBtn.textContent = "done";
  setTimeout(() => (copyBtn.textContent = "content_copy"), 1000);
};

const showTypingAnimation = () => {
  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/chatbot.jpg" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span @click="copyResponse" class="material-symbols-rounded">content_copy</span>
                </div>`;

  const incomingChatDiv = createChatElement(html, "incoming");
  chatContainer.value.appendChild(incomingChatDiv);
  chatContainer.value.scrollTo(0, chatContainer.value.scrollHeight);
  getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
  userText.value = chatInput.value.trim();
  if (!userText.value) return;

  chatInput.value = "";
  chatInput.value.style.height = `${initialInputHeight.value}px`;

  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/user.jpg" alt="user-img">
                        <p>${userText.value}</p>
                    </div>
                </div>`;

  const outgoingChatDiv = createChatElement(html, "outgoing");
  chatContainer.value.querySelector(".default-text")?.remove();
  chatContainer.value.appendChild(outgoingChatDiv);
  chatContainer.value.scrollTo(0, chatContainer.value.scrollHeight);
  setTimeout(showTypingAnimation, 500);
};

const deleteChats = () => {
  if (confirm("Are you sure you want to delete all the chats?")) {
    localStorage.removeItem("all-chats");
    loadDataFromLocalstorage();
  }
};

const toggleTheme = () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeColor", themeButton.value);
  themeButton.value = document.body.classList.contains("light-mode")
    ? "dark_mode"
    : "light_mode";
};
</script>



<style scoped>
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
:root {
  --text-color: #FFFFFF;
  --icon-color: #ACACBE;
  --icon-hover-bg: #5b5e71;
  --placeholder-color: #dcdcdc;
  --outgoing-chat-bg: #343541;
  --incoming-chat-bg: #444654;
  --outgoing-chat-border: #343541;
  --incoming-chat-border: #444654;
}
.light-mode {
  --text-color: #343541;
  --icon-color: #a9a9bc;
  --icon-hover-bg: #f1f1f3;
  --placeholder-color: #6c6c6c;
  --outgoing-chat-bg: #FFFFFF;
  --incoming-chat-bg: #F7F7F8;
  --outgoing-chat-border: #FFFFFF;
  --incoming-chat-border: #D9D9E3;
}
body {
  background: var(--outgoing-chat-bg);
}

/* Chats container styling */
.chat-container {
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 150px;
}
:where(.chat-container, textarea)::-webkit-scrollbar {
  width: 6px;
}
:where(.chat-container, textarea)::-webkit-scrollbar-track {
  background: var(--incoming-chat-bg);
  border-radius: 25px;
}
:where(.chat-container, textarea)::-webkit-scrollbar-thumb {
  background: var(--icon-color);
  border-radius: 25px;
}
.default-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  padding: 0 10px;
  text-align: center;
  color: var(--text-color);
}
.default-text h1 {
  font-size: 3.3rem;
}
.default-text p {
  margin-top: 10px;
  font-size: 1.1rem;
}
.chat-container .chat {
  padding: 25px 10px;
  display: flex;
  justify-content: center;
  color: var(--text-color);
}
.chat-container .chat.outgoing {
  background: var(--outgoing-chat-bg);
  border: 1px solid var(--outgoing-chat-border);
}
.chat-container .chat.incoming {
  background: var(--incoming-chat-bg);
  border: 1px solid var(--incoming-chat-border);
}
.chat .chat-content {
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}
span.material-symbols-rounded {
  user-select: none;
  cursor: pointer;
}
.chat .chat-content span {
  cursor: pointer;
  font-size: 1.3rem;
  color: var(--icon-color);
  visibility: hidden;
}
.chat:hover .chat-content:not(:has(.typing-animation), :has(.error)) span {
  visibility: visible;
}
.chat .chat-details {
  display: flex;
  align-items: center;
}
.chat .chat-details img {
  width: 35px;
  height: 35px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 2px;
}
.chat .chat-details p {
  white-space: pre-wrap;
  font-size: 1.05rem;
  padding: 0 50px 0 25px;
  color: var(--text-color);
  word-break: break-word;
}
.chat .chat-details p.error {
  color: #e55865;
}
.chat .typing-animation {
  padding-left: 25px;
  display: inline-flex;
}
.typing-animation .typing-dot {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  margin: 0 3px;
  opacity: 0.7;
  background: var(--text-color);
  animation: animateDots 1.5s var(--delay) ease-in-out infinite;
}
.typing-animation .typing-dot:first-child {
  margin-left: 0;
}
@keyframes animateDots {
  0%,44% {
    transform: translateY(0px);
  }
  28% {
    opacity: 0.4;
    transform: translateY(-6px);
  }
  44% {
    opacity: 0.2;
  }
}

/* Typing container styling */
.typing-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 20px 10px;
  justify-content: center;
  background: var(--outgoing-chat-bg);
  border-top: 1px solid var(--incoming-chat-border);
}
.typing-container .typing-content {
  display: flex;
  max-width: 950px;
  width: 100%;
  align-items: flex-end;
}
.typing-container .typing-textarea {
  width: 100%;
  display: flex;
  position: relative;
}
.typing-textarea textarea {
  resize: none;
  height: 55px;
  width: 100%;
  border: none;
  padding: 15px 45px 15px 20px;
  color: var(--text-color);
  font-size: 1rem;
  border-radius: 4px;
  max-height: 250px;
  overflow-y: auto;
  background: var(--incoming-chat-bg);
  outline: 1px solid var(--incoming-chat-border);
}
.typing-textarea textarea::placeholder {
  color: var(--placeholder-color);
}
.typing-content span {
  width: 55px;
  height: 55px;
  display: flex;
  border-radius: 4px;
  font-size: 1.35rem;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
}
.typing-textarea span {
  position: absolute;
  right: 0;
  bottom: 0;
  visibility: hidden;
}
.typing-textarea textarea:valid ~ span {
  visibility: visible;
}
.typing-controls {
  display: flex;
}
.typing-controls span {
  margin-left: 7px;
  font-size: 1.4rem;
  background: var(--incoming-chat-bg);
  outline: 1px solid var(--incoming-chat-border);
}
.typing-controls span:hover {
  background: var(--icon-hover-bg);
}

/* Reponsive Media Query */
@media screen and (max-width: 600px) {
  .default-text h1 {
    font-size: 2.3rem;
  }
  :where(.default-text p, textarea, .chat p) {
    font-size: 0.95rem!important;
  }
  .chat-container .chat {
    padding: 20px 10px;
  }
  .chat-container .chat img {
    height: 32px;
    width: 32px;
  }
  .chat-container .chat p {
    padding: 0 20px;
  }
  .chat .chat-content:not(:has(.typing-animation), :has(.error)) span {
    visibility: visible;
  }
  .typing-container {
    padding: 15px 10px;
  }
  .typing-textarea textarea {
    height: 45px;
    padding: 10px 40px 10px 10px;
  }
  .typing-content span {
    height: 45px;
    width: 45px;
    margin-left: 5px;
  }
  span.material-symbols-rounded {
    font-size: 1.25rem!important;
  }
}
</style>
