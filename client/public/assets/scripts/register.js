document.querySelector("#registration-form").addEventListener("submit", (e) => {
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
            password: data.get("password"),
            email: data.get("email")
        })
    }

    fetch("http://localhost:3000/users", options)
        .then(res => res.json())
        .then(data => {
            if (data['success']) {
                alert("User created successfully!")
                window.location.assign("/login")
            } else {
                throw "Unable to create user.";
            }
        })
        .catch(e => {
            alert("Unable to create user.")
        })
})