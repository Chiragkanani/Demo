if (location.pathname == "/register") {
    const submit_btn = document.querySelector("#submit-btn");
    const registerform = document.querySelector("#registerform");
    submit_btn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = new URLSearchParams(new FormData(registerform));
        let responce = await fetch("/register", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        });
        responce = await responce.json();
        if (!responce.success) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: responce.alert,
            });
        } else {
            await Swal.fire({
                icon: "success",
                title: "You are Registered",
                text: responce.alert,
                showConfirmButton: false,
                footer: `<a href="${responce.activationLink}" target= "_blank">${responce.activationLink}</a>`,
            });
            location.pathname = "/login";
        }
    });
}

if (location.pathname == "/login") {
    const submit_btn = document.querySelector("#submit-btn");
    const loginform = document.querySelector("#loginform");
    submit_btn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = new URLSearchParams(new FormData(loginform));
        let responce = await fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
        });
        responce = await responce.json();
        if (!responce.success) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: responce.alert,
            });
        } else {
            await Swal.fire({
                icon: "success",
                title: "You are Loggedin",
                text: responce.alert,
                showConfirmButton: false,
                showCloseButton: true,
            });
            location.pathname = "/";
        }
    });
}




