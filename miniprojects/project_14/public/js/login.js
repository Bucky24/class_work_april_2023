document.getElementById("createForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("create_username").value.trim();
    const password = document.getElementById("create_password").value.trim();
    const email = document.getElementById("create_email").value.trim();

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name,
            password,
            email,
        }),
    }).then((result) => {
        if (!result.ok) {
            alert("Bad create thing");
            return;
        }

        result.json().then(() => {
            window.location = '/';
        });
    });
});