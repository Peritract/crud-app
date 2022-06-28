const loadUsers = () => {
    const token = localStorage.getItem("token");

    if (token) {

        const options = {
            headers: new Headers({'Authorization': localStorage.getItem('token')}),
        }

        fetch('http://localhost:3000/users', options)
            .then(res => res.json())
            .then(data => {
                if (data["success"]) {
                    const box = document.querySelector("#user-container");
                    data["users"].forEach((u) => {
                        const elem = document.createElement("li");
                        elem.innerHTML = u["username"];
                        box.appendChild(elem);
                    })
                } else {
                    throw "Error accessing data"
                }
            })
            .catch(e => {
                alert("There was an error accessing the data!");
                window.location.assign("/");
            })

    } else {
        alert("Only authenticated users can access this page!");
        window.location.assign("/");
    }
}

loadUsers()