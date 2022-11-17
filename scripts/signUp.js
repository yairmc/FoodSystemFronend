let url = "http://localhost:3001";
let formSignup = document.querySelector("#formSignup");

document.addEventListener("DOMContentLoaded", () => {
    addEvents();
});

const addEvents = () => {
    formSignup.addEventListener("submit", fetchSignup);
};

const fetchSignup = async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const userName = document.querySelector("#usernameInput").value;
    const password = document.querySelector("#passwordInput").value;

    const signupInfo = { name, userName, password, roleId: 2 };
    try {
        await fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupInfo),
        });

        userName.value = "";
        password.value = "";
        name.value = "";

        location.href = "login.html";
    } catch (error) {
        userName.value = "";
        password.value = "";
    }
};
