let url = "http://localhost:3001";
let formLogin = document.querySelector("#formLogin");
let messageSection = document.querySelector("#messageSection");
let messagesTypes = {
    SUCCESS: "success",
    ERROR: "error",
};

document.addEventListener("DOMContentLoaded", () => {
    addEvents();
});

const addEvents = () => {
    formLogin.addEventListener("submit", fetchLogin);
};

const fetchLogin = async (e) => {
    e.preventDefault();
    const userName = document.querySelector("#usernameInput").value;
    const password = document.querySelector("#passwordInput").value;
    const loginInfo = { userName, password };
    try {
        const response = await fetch(`${url}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
        });
        const credentials = await response.json();

        if (credentials.hasOwnProperty("token")) {
            userName.value = "";
            password.value = "";
            localStorage.setItem("token", JSON.stringify(credentials.token));
            showMessage("Great!!!", messagesTypes.SUCCESS);
            setTimeout(() => {
                location.href = "productManagment.html";
            }, 3000);
        } else {
            showMessage(credentials.msg, messagesTypes.ERROR);
        }
    } catch (error) {
        userName.value = "";
        password.value = "";
    }
};

const showMessage = (msg, type) => {
    messageSection.innerHTML = "";
    const pMessage = document.createElement("P");
    pMessage.textContent = msg;
    if (type === messagesTypes.SUCCESS) messageSection.classList.add("successMessage");
    else if (type === messagesTypes.ERROR) messageSection.classList.add("errorMessage");
    messageSection.appendChild(pMessage);

    setTimeout(() => {
        if (messageSection.classList.contains("successMessage"))
            messageSection.classList.remove("successMessage");
        else messageSection.classList.remove("errorMessage");
        messageSection.removeChild(pMessage);
    }, 3000);
};
