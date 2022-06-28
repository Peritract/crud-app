document.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

    const options = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.get("username"),
            password: data.get("password")
        })
    }

    fetch("http://localhost:3000/auth/login", options)
        .then(res => res.json())
        .then(data => {
            if (data['success']) {
                localStorage.setItem("token", data["token"])
                alert("Successfully authenticated!")
                window.location.assign("/")
            } else {
                throw "Unable to authenticate."
            }
        })
        .catch(e => {
            alert("Unable to authenticate.")
        })
})