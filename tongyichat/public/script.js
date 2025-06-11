document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages"); // 聊天内容框
    const userInput = document.getElementById("user-input"); // 用户输入框
    const sendBtn = document.getElementById("send-btn"); // 发送按钮
    let messages = [{ 
        role: "assistant", // 角色为助手
        content: "你好!我是基于网量的AI助手"
    }]; // 存储聊天消息的数组

    // 发送消息的函数
    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        
        userInput.value = "";
        userInput.focus();
        appendMessage("user", userMessage); // 添加用户消息到界面
        messages.push({
            role: "user",
            content: userMessage
        });

        // 添加加载动画
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "message assistant";
        loadingDiv.innerHTML = `
            <div class="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 模拟API请求（实际使用时替换为真实API）
        axios.post('/api/chat', { messages })
            .then((response) => {
                chatMessages.removeChild(loadingDiv);
                appendMessage("assistant", response.data.message);
                messages.push({
                    role: response.data.role,
                    content: response.data.message
                });
            })
            .catch((error) => {
                console.error("API请求失败:", error);
                chatMessages.removeChild(loadingDiv);
                appendMessage("assistant", "抱歉，请求出错，请重试。");
            });
    }

    // 添加消息到聊天界面
    function appendMessage(sender, content) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${content}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 事件监听
    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    userInput.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight < 120 ? this.scrollHeight + "px" : "120px";
    });
});