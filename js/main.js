const form = document.getElementById('form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    window.alert("Form Submitted Successfully")
                } else {
                    console.log(response);
                    // result.innerHTML = json.message; // Result undefined in original code too?
                }
            })
            .catch(error => {
                console.log(error);
                window.alert("Something went wrong!")
            })
            .then(function () {
                form.reset();
            });
    });
}

// Security: Prevent context menu and F12
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});
