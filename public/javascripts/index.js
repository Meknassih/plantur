function login() {
    const request = new Request(
        `${window.location.origin}/users/login`,
        {
            method: 'POST',
            body: JSON.stringify({
                user: $('input#username-input').val(),
                password: $('input#pwd-input').val()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Bad response');
            }
        })
        .then(response => {
            console.debug(response);
            window.location.replace(`${window.location.origin}/home`);
        }).catch(error => {
            console.error(error);
        });
}

function handleHoveredRow(event, hovering) {
    console.log(event, hovering);
}
