document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbx-neSGmDiQhRM4X7vIghJPzphoGBOIsk5eMw50ageXNPzuuAviBs0j58t2xcMWxEht/exec";

    var data = new FormData();
    data.append("name", name);
    data.append("email", email);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => response.json())
        .then(data => {
            var messageDiv = document.getElementById("message");
            if (data.result === "success") {
                messageDiv.innerHTML = "Subscription successful!";
                messageDiv.style.color = "green";
            } else {
                messageDiv.innerHTML = "Subscription failed.";
                messageDiv.style.color = "red";
            }
            messageDiv.style.display = "block";
        })
        .catch(error => {
            console.error('Error:', error);
            var messageDiv = document.getElementById("message");
            messageDiv.innerHTML = "Subscription failed.";
            messageDiv.style.color = "red";
            messageDiv.style.display = "block";
        });
});
