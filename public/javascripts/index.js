function login() {
    const request = new Request(
        window.location.origin,
        {
            method: 'POST',
            body: ({ user, password }).stringify()
        }
    );

    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return console.log('RESPONSE', response.json());
            } else {
                throw new Error('Bad response');
            }
        })
        .then(response => {
            console.debug(response);
            // ...
        }).catch(error => {
            console.error(error);
        });
}