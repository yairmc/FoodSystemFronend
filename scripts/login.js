let url = "http://localhost:3001";
let formLogin = document.querySelector("#formLogin");

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
        const token = await response.json();
        userName.value = "";
        password.value = "";
        localStorage.setItem("token", JSON.stringify(token.token));
        location.href = "productManagment.html";
    } catch (error) {
        userName.value = "";
        password.value = "";
    }
};
