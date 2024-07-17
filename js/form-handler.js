document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbxQm7v1vKCGYihieRB099hjxPXzk4FeL5D2QHgZ2YqgBsHTUALSRWpqMv8MoC6HK_gW/exec";

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
