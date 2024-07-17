document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbzc9fcj7H96mtG8JJYWbrON_Z0qBRrA_ZZ0wvQrDp-_UQPMAwscQAzibDumGLaCy9Y/exec";

    var data = {
        "name": name,
        "email": email
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert("Subscription successful!");
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Subscription failed.");
        });
});
