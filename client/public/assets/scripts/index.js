const handleUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
        const user = jwt_decode(token);
        document.querySelector("#current-user").innerHTML = user["username"]
        const logLink = document.querySelector("#log-link")
        logLink.innerHTML = "Log out"
        logLink.href = "/logout"
    }
}

handleUser();